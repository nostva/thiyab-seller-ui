import { createFileRoute, redirect, useNavigate } from '@tanstack/react-router'

import { AppLayout } from '@/components/layout/app-layout'
import { AUTHENTICATED_ROUTE_PREFIX } from '@/constants'
import { useAuth } from '@/hooks/use-auth'

export const Route = createFileRoute(AUTHENTICATED_ROUTE_PREFIX)({
  beforeLoad: ({ context, location }) => {
    if (!context.auth.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
  loader: () => ({
    breadcrumb: 'Dashboard',
  }),
  component: AuthLayout,
})

function AuthLayout() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    navigate({
      to: '/login',
    })
    return <></>
  }

  return <AppLayout />
}
