import type { ColumnDef, HeaderContext } from '@tanstack/table-core'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { camelCaseToTitleCase } from '@/lib/utils'

export interface DataTableColumnHeaderProps {
  customConfig: Partial<ColumnDef<any>>
  headerContext: HeaderContext<any, any>
}

export function DataTableColumnHeader({
  headerContext,
  customConfig,
}: DataTableColumnHeaderProps) {
  const { column } = headerContext
  const isSortable = column.getCanSort()

  const customHeader = customConfig.header
  let display = camelCaseToTitleCase(column.id)
  if (typeof customHeader === 'function') {
    display = customHeader(headerContext)
  } else if (typeof customHeader === 'string') {
    display = customHeader
  }

  const columSort = column.getIsSorted()
  const nextSort =
    columSort === 'asc' ? true : columSort === 'desc' ? undefined : false

  return (
    <div className="flex items-center">
      {isSortable && (
        <Button
          size="icon-sm"
          variant="ghost"
          onClick={() => column.toggleSorting(nextSort)}
        >
          {columSort === 'desc' ? (
            <ArrowUp />
          ) : columSort === 'asc' ? (
            <ArrowDown />
          ) : (
            <ArrowUpDown className="opacity-50" />
          )}
        </Button>
      )}
      <div>{display}</div>
    </div>
  )
}
