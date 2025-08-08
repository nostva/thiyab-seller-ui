import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

import { AuthProvider } from '@/providers/auth'
import { ChannelProvider } from '@/providers/channel-provider'
import { I18nProvider } from '@/providers/i18n-provider'
import { ServerConfigProvider } from '@/providers/server-config'
import { ThemeProvider } from '@/providers/theme-provider'
import { UserSettingsProvider } from '@/providers/user-settings'

export const queryClient = new QueryClient()

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <QueryClientProvider client={queryClient}>
        <UserSettingsProvider>
          <ThemeProvider defaultTheme="system">
            <AuthProvider>
              <ServerConfigProvider>
                <ChannelProvider>{children}</ChannelProvider>
              </ServerConfigProvider>
            </AuthProvider>
          </ThemeProvider>
        </UserSettingsProvider>
        {process.env.NODE_ENV === 'development' && (
          <>
            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition="bottom-right"
            />
          </>
        )}
      </QueryClientProvider>
    </I18nProvider>
  )
}
