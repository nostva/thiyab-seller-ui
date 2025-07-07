import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { FileBaseRouteOptions } from '@tanstack/react-router'

import type { PageBreadcrumb } from '@/components/layout/generated-breadcrumbs'
import { NEW_ENTITY_PATH } from '@/constants'

import {
  getQueryName,
  getQueryTypeFieldInfo,
} from '../document-introspection/get-document-structure'
import type { DetailEntity } from './page-types'
import { getDetailQueryOptions } from './use-detail-page'

export interface DetailPageRouteLoaderConfig<
  T extends TypedDocumentNode<any, any>,
> {
  queryDocument: T
  breadcrumb: (
    isNew: boolean,
    entity: DetailEntity<T>,
  ) => Array<PageBreadcrumb | undefined>
}

export function detailPageRouteLoader<T extends TypedDocumentNode<any, any>>({
  queryDocument,
  breadcrumb,
}: DetailPageRouteLoaderConfig<T>) {
  const loader: FileBaseRouteOptions<any, any>['loader'] = async ({
    context,
    params,
  }: {
    context: any
    params: any
  }) => {
    if (!params.id) {
      throw new Error('ID param is required')
    }
    const isNew = params.id === NEW_ENTITY_PATH
    const result = isNew
      ? null
      : await context.queryClient.ensureQueryData(
          getDetailQueryOptions(queryDocument, { id: params.id }),
          { id: params.id },
        )

    const entityField = getQueryName(queryDocument)
    const entityName = getQueryTypeFieldInfo(queryDocument)?.type

    if (!isNew && !result[entityField]) {
      throw new Error(`${entityName} with the ID ${params.id} was not found`)
    }
    return {
      breadcrumb: breadcrumb(isNew, result?.[entityField]),
    }
  }
  return loader
}
