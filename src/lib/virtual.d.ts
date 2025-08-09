declare module 'virtual:dashboard-extensions' {
  export const runDashboardExtensions: () => Promise<void>
}

declare module 'virtual:vendure-ui-config' {
  import { LanguageCode } from '@vendure/core'

  // TODO: Find a better way to share types between vite plugin and virtual module declaration
  // Currently we have duplicated type definitions here and in vite-plugin-ui-config.ts
  interface ResolvedApiConfig {
    host: string | 'auto'
    port: number | 'auto'
    adminApiPath: string
    tokenMethod: 'cookie' | 'bearer'
    authTokenHeaderKey: string
    channelTokenKey: string
  }

  interface ResolvedI18nConfig {
    defaultLanguage: LanguageCode
    defaultLocale: string | undefined
    availableLanguages: LanguageCode[]
    availableLocales: string[]
  }

  interface ResolvedUiConfig {
    hideVendureBranding: boolean
    loginImageUrl: string | null
    api: ResolvedApiConfig
    i18n: ResolvedI18nConfig
  }

  export const uiConfig: ResolvedUiConfig
}
