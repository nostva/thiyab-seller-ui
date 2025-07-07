import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { Trans } from '@lingui/react/macro'
import type { AnyRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import type { ResultOf, VariablesOf } from 'gql.tada'
import { toast } from 'sonner'

import { DateTimeInput } from '@/components/data-input/datetime-input'
import { FormFieldWrapper } from '@/components/shared/form-field-wrapper'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { NEW_ENTITY_PATH } from '@/constants'
import { useDetailPage } from '@/framework/page/use-detail-page'

import { getOperationVariablesFields } from '../document-introspection/get-document-structure'
import {
  DetailFormGrid,
  Page,
  PageActionBar,
  PageActionBarRight,
  PageBlock,
  PageLayout,
  PageTitle,
} from '../layout-engine/page-layout'
import type { DetailEntityPath } from './page-types'

export interface DetailPageProps<
  T extends TypedDocumentNode<any, any>,
  C extends TypedDocumentNode<any, any>,
  U extends TypedDocumentNode<any, any>,
  EntityField extends keyof ResultOf<T> = DetailEntityPath<T>,
> {
  /**
   * @description
   * The name of the entity.
   */
  entityName?: string
  /**
   * @description
   * A unique identifier for the page.
   */
  pageId: string
  /**
   * @description
   * The Tanstack Router route used to navigate to this page.
   */
  route: AnyRoute
  /**
   * @description
   * The title of the page.
   */
  title: (entity: ResultOf<T>[EntityField]) => string
  /**
   * @description
   * The query document used to fetch the entity.
   */
  queryDocument: T
  /**
   * @description
   * The mutation document used to create the entity.
   */
  createDocument?: C
  /**
   * @description
   * The mutation document used to update the entity.
   */
  updateDocument: U
  /**
   * @description
   * A function that sets the values for the update input type based on the entity.
   */
  setValuesForUpdate: (
    entity: ResultOf<T>[EntityField],
  ) => VariablesOf<U>['input']
}

/**
 * @description
 * **Status: Developer Preview**
 *
 * Auto-generates a detail page with a form based on the provided query and mutation documents.
 *
 * For more control over the layout, you would use the more low-level {@link Page} component.
 *
 * @docsCategory components
 * @docsPage DetailPage
 * @docsWeight 0
 * @since 3.3.0
 */
export function DetailPage<
  T extends TypedDocumentNode<any, any>,
  C extends TypedDocumentNode<any, any>,
  U extends TypedDocumentNode<any, any>,
>({
  pageId,
  route,
  entityName,
  queryDocument,
  createDocument,
  updateDocument,
  setValuesForUpdate,
  title,
}: DetailPageProps<T, C, U>) {
  const params = route.useParams()
  const creatingNewEntity = params.id === NEW_ENTITY_PATH
  const navigate = useNavigate()

  const { form, submitHandler, entity, isPending, resetForm } = useDetailPage<
    any,
    any,
    any
  >({
    queryDocument,
    updateDocument,
    createDocument,
    params: { id: params.id },
    setValuesForUpdate,
    onSuccess: async (data) => {
      toast.success('Updated successfully')
      resetForm()
      const id = (data as any).id
      if (creatingNewEntity && id) {
        await navigate({ to: `../$id`, params: { id } })
      }
    },
    onError: (error) => {
      toast.error('Failed to update', {
        description: error instanceof Error ? error.message : 'Unknown error',
      })
    },
  })

  const updateFields = getOperationVariablesFields(updateDocument, 'input')

  return (
    <Page pageId={pageId} form={form} submitHandler={submitHandler}>
      <PageTitle>{title(entity)}</PageTitle>
      <PageActionBar>
        <PageActionBarRight>
          <Button
            type="submit"
            disabled={
              !form.formState.isDirty || !form.formState.isValid || isPending
            }
          >
            <Trans>Update</Trans>
          </Button>
        </PageActionBarRight>
      </PageActionBar>
      <PageLayout>
        <PageBlock column="main" blockId="main-form">
          <DetailFormGrid>
            {updateFields
              .filter((fieldInfo) => fieldInfo.name !== 'customFields')
              .map((fieldInfo) => {
                if (fieldInfo.name === 'id' && fieldInfo.type === 'ID') {
                  return null
                }
                return (
                  <FormFieldWrapper
                    key={fieldInfo.name}
                    control={form.control}
                    name={fieldInfo.name as never}
                    label={fieldInfo.name}
                    render={({ field }) => {
                      switch (fieldInfo.type) {
                        case 'Int':
                        case 'Float':
                          return (
                            <Input
                              type="number"
                              value={field.value}
                              onChange={(e) =>
                                field.onChange(e.target.valueAsNumber)
                              }
                            />
                          )
                        case 'DateTime':
                          return <DateTimeInput {...field} />
                        case 'Boolean':
                          return (
                            <Checkbox
                              value={field.value}
                              onCheckedChange={field.onChange}
                            />
                          )
                        case 'String':
                        default:
                          return <Input {...field} />
                      }
                    }}
                  />
                )
              })}
          </DetailFormGrid>
        </PageBlock>
      </PageLayout>
    </Page>
  )
}
