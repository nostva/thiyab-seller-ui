import { NEW_ENTITY_PATH } from '@/constants.js'

import type { PageBreadcrumb } from '@/components/layout/generated-breadcrumbs.js'
import { extendDetailFormQuery } from '@/framework/document-extension/extend-detail-form-query.js'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type {
  FileBaseRouteOptions,
  ParsedLocation,
} from '@tanstack/react-router'
import { addCustomFields } from '../document-introspection/add-custom-fields.js'
import {
  getQueryName,
  getQueryTypeFieldInfo,
} from '../document-introspection/get-document-structure.js'
import type { DetailEntity } from './page-types.js'
import { getDetailQueryOptions } from './use-detail-page.js'

export interface DetailPageRouteLoaderConfig<
  T extends TypedDocumentNode<any, any>,
> {
  /**
   * @description
   * The pageId is used to ensure any detail form extensions (such as extensions to
   * the detail query document) get correctly applied at the route loader level.
   */
  pageId?: string
  queryDocument: T
  breadcrumb: (
    isNew: boolean,
    entity: DetailEntity<T>,
    location: ParsedLocation,
  ) => Array<PageBreadcrumb | undefined>
}

export function detailPageRouteLoader<T extends TypedDocumentNode<any, any>>({
  pageId,
  queryDocument,
  breadcrumb,
}: DetailPageRouteLoaderConfig<T>) {
  const loader: FileBaseRouteOptions<any, any>['loader'] = async ({
    context,
    params,
    location,
  }: {
    context: any
    params: any
    location: ParsedLocation
  }) => {
    if (!params.id) {
      throw new Error('ID param is required')
    }
    const isNew = params.id === NEW_ENTITY_PATH
    const { extendedQuery: extendedQueryDocument } = extendDetailFormQuery(
      addCustomFields(queryDocument),
      pageId,
    )
    const result = isNew
      ? null
      : await context.queryClient.ensureQueryData(
          getDetailQueryOptions(extendedQueryDocument, { id: params.id }),
          { id: params.id },
        )

    const entityField = getQueryName(queryDocument)
    const entityName = getQueryTypeFieldInfo(queryDocument)?.type

    if (!isNew && !result[entityField]) {
      throw new Error(`${entityName} with the ID ${params.id} was not found`)
    }
    return {
      breadcrumb: breadcrumb(isNew, result?.[entityField], location),
    }
  }
  return loader
}
