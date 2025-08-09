import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip.js'
import { useLocalFormat } from '@/hooks/use-local-format.js'

interface HistoryEntryDateProps {
  date: string
  className?: string
}

export function HistoryEntryDate({
  date,
  className,
}: Readonly<HistoryEntryDateProps>) {
  const { formatRelativeDate, formatDate } = useLocalFormat()

  const formatFullDateTime = (dateString: string) => {
    return formatDate(dateString, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={className}>{formatRelativeDate(date)}</div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{formatFullDateTime(date)}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
