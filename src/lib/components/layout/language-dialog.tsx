import { Trans } from '@lingui/react/macro'
import { useState } from 'react'

import { CurrencyCode } from '@/constants'
import { useLocalFormat } from '@/hooks/use-local-format'
import { useServerConfig } from '@/hooks/use-server-config'
import { useUserSettings } from '@/hooks/use-user-settings'

import { Button } from '../ui/button'
import {
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export function LanguageDialog() {
  const serverConfig = useServerConfig()
  const { settings, setDisplayLanguage } = useUserSettings()
  const availableCurrencyCodes = Object.values(CurrencyCode)
  const { formatCurrency, formatLanguageName, formatCurrencyName, formatDate } =
    useLocalFormat()
  const [selectedCurrency, setSelectedCurrency] = useState<string>('USD')

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <Trans>Select display language</Trans>
        </DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-1 w-full">
          <Label>
            <Trans>Display language</Trans>
          </Label>
          <Select
            defaultValue={settings.displayLanguage}
            onValueChange={setDisplayLanguage}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {serverConfig?.availableLanguages.map((language) => (
                <SelectItem key={language} value={language}>
                  {formatLanguageName(language)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-sidebar border border-border rounded-md px-6 py-4 space-y-4">
        <span className="font-medium block text-accent-foreground">
          <Trans>Sample Formatting</Trans>: {settings.displayLocale}{' '}
          {settings.displayLanguage}
        </span>
        <Select
          defaultValue={selectedCurrency}
          onValueChange={setSelectedCurrency}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a currency" />
          </SelectTrigger>
          <SelectContent>
            {availableCurrencyCodes.map((currency) => (
              <SelectItem key={currency} value={currency}>
                {formatCurrencyName(currency)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm font-medium">
            Medium date
          </span>
          <span>
            {formatDate(new Date('2025-03-14'), { dateStyle: 'medium' })}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm font-medium">
            Short date
          </span>
          <span>
            {formatDate(new Date('2025-03-14'), { dateStyle: 'short' })}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-muted-foreground text-sm font-medium">
            Price
          </span>
          <span>{formatCurrency(100.0, selectedCurrency)}</span>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button>Close</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
