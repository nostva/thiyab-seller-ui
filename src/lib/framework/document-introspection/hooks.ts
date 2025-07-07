import type { DocumentNode } from 'graphql'
import { useMemo } from 'react'

import {
  type FieldInfo,
  getListQueryFields,
} from '@/framework/document-introspection/get-document-structure'

/**
 * Returns a stable array of FieldInfo objects representing the fields of the list query.
 */
export function useListQueryFields(documentNode: DocumentNode): FieldInfo[] {
  return useMemo(() => getListQueryFields(documentNode), [documentNode])
}
