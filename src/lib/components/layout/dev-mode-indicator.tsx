import { Badge } from '@/components/ui/badge.js'
import { Button } from '@/components/ui/button.js'
import { useUserSettings } from '@/hooks/use-user-settings.js'
import { Trans } from '@/lib/trans.js'
import { CodeXmlIcon, XIcon } from 'lucide-react'

export function DevModeIndicator() {
  const { setDevMode } = useUserSettings()
  return (
    <Badge className="bg-dev-mode text-background">
      <CodeXmlIcon className="w-6 h-6" />
      <Trans>Dev Mode</Trans>
      <Button variant="ghost" size="icon-xs" onClick={() => setDevMode(false)}>
        <XIcon className="w-4 h-4" />
      </Button>
    </Badge>
  )
}
