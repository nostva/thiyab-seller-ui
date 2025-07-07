import { Trans } from '@lingui/react/macro'
import type { Column, ColumnDef } from '@tanstack/react-table'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'

import { DataTableFilterDialog } from '@/components/data-table/data-table-filter-dialog'
import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { camelCaseToTitleCase } from '@/lib/utils'

export interface AddFilterMenuProps {
  columns: Column<any, unknown>[]
}

export function AddFilterMenu({ columns }: AddFilterMenuProps) {
  const [selectedColumn, setSelectedColumn] = useState<ColumnDef<any> | null>(
    null,
  )
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filterableColumns = columns.filter((column) => column.getCanFilter())

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="h-8 border-dashed">
            <PlusCircle className="mr-2 h-4 w-4" />
            <Trans>Add filter</Trans>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          {filterableColumns.map((column) => (
            <DropdownMenuItem
              key={column.id}
              onSelect={() => {
                setSelectedColumn(column)
                setIsDialogOpen(true)
              }}
            >
              {camelCaseToTitleCase(column.id)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      {selectedColumn && (
        <DataTableFilterDialog column={selectedColumn as any} />
      )}
    </Dialog>
  )
}
