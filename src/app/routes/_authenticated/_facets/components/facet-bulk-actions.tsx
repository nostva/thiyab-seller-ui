import { toast } from 'sonner'

import { AssignToChannelBulkAction } from '@/components/shared/assign-to-channel-bulk-action.js'
import { RemoveFromChannelBulkAction } from '@/components/shared/remove-from-channel-bulk-action.js'
import { api } from '@/graphql/api.js'
import { ResultOf } from '@/graphql/graphql.js'
import { BulkActionComponent } from '@/framework/extension-api/types/data-table.js'
import { useChannel } from '@/hooks/use-channel.js'
import { useLingui } from '@lingui/react/macro'
import { DeleteBulkAction } from '../../../../common/delete-bulk-action.js'
import { DuplicateBulkAction } from '../../../../common/duplicate-bulk-action.js'

import {
  assignFacetsToChannelDocument,
  deleteFacetsDocument,
  removeFacetsFromChannelDocument,
} from '../facets.graphql.js'

export const DeleteFacetsBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  return (
    <DeleteBulkAction
      mutationDocument={deleteFacetsDocument}
      entityName="facets"
      requiredPermissions={['DeleteCatalog', 'DeleteFacet']}
      selection={selection}
      table={table}
    />
  )
}

export const AssignFacetsToChannelBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  return (
    <AssignToChannelBulkAction
      selection={selection}
      table={table}
      entityType="facets"
      mutationFn={api.mutate(assignFacetsToChannelDocument)}
      requiredPermissions={['UpdateCatalog', 'UpdateFacet']}
      buildInput={(channelId: string) => ({
        facetIds: selection.map((s) => s.id),
        channelId,
      })}
    />
  )
}

export const RemoveFacetsFromChannelBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  const { selectedChannel } = useChannel()
  const { i18n } = useLingui()

  return (
    <RemoveFromChannelBulkAction
      selection={selection}
      table={table}
      entityType="facets"
      mutationFn={api.mutate(removeFacetsFromChannelDocument)}
      requiredPermissions={['UpdateCatalog', 'UpdateFacet']}
      buildInput={() => ({
        facetIds: selection.map((s) => s.id),
        channelId: selectedChannel?.id,
      })}
      onSuccess={(result) => {
        const typedResult = result as ResultOf<
          typeof removeFacetsFromChannelDocument
        >
        if (typedResult?.removeFacetsFromChannel) {
          const errors: string[] = []

          for (const item of typedResult.removeFacetsFromChannel) {
            if ('id' in item) {
              // Do nothing
            } else if ('message' in item) {
              errors.push(item.message)
              toast.error(
                i18n._({
                  id: 'failed-to-remove-facet-from-channel',
                  values: {
                    error: item.message,
                  },
                  message: 'Failed to remove facet from channel: {error}',
                }),
              )
            }
          }

          const successCount = selection.length - errors.length

          if (successCount > 0) {
            toast.success(
              i18n._({
                id: 'successfully-removed-facets-from-channel',
                values: {
                  count: successCount,
                },
                message: 'Successfully removed {count} facets from channel',
              }),
            )
          }
        }
      }}
    />
  )
}

export const DuplicateFacetsBulkAction: BulkActionComponent<any> = ({
  selection,
  table,
}) => {
  return (
    <DuplicateBulkAction
      entityType="Facet"
      duplicatorCode="facet-duplicator"
      duplicatorArguments={[
        {
          name: 'includeValues',
          value: 'true',
        },
      ]}
      requiredPermissions={['UpdateCatalog', 'UpdateFacet']}
      entityName="Facet"
      selection={selection}
      table={table}
    />
  )
}
