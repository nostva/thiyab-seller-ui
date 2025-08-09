import { RouterProvider, createRouter } from '@tanstack/react-router'
import { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

import { registerDefaults } from '@/framework/defaults.js'
import { useAuth } from '@/hooks/use-auth.js'
import { Toaster } from '@/index.js'

import { defaultLocale, dynamicActivate } from '@/providers/i18n-provider.js'
import { AppProviders, queryClient } from './app-providers.js'
import { routeTree } from './routeTree.gen.js'
import './styles.css'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  context: {
    auth: undefined!, // This will be set after we wrap the app in an AuthProvider
    queryClient,
  },
  defaultErrorComponent: ({ error }: { error: Error }) => (
    <div>Uh Oh!!! {error.message}</div>
  ),
})

function InnerApp() {
  const auth = useAuth()
  return (
    <>
      <RouterProvider router={router} context={{ auth, queryClient }} />
    </>
  )
}

function App() {
  const [i18nLoaded, setI18nLoaded] = useState(false)
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale, () => {
      setI18nLoaded(true)
    })
    registerDefaults()
  }, [])

  return (
    i18nLoaded && (
      <AppProviders>
        <InnerApp />
        <Toaster />
      </AppProviders>
    )
  )
}

// Render the app
const rootElement = document.getElementById('app')
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
