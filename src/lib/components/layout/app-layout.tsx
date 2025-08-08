import { Outlet } from '@tanstack/react-router'

import { AppSidebar } from '@/components/layout/app-sidebar'
import { GeneratedBreadcrumbs } from '@/components/layout/generated-breadcrumbs'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import { Alerts } from '../shared/alerts'

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="container mx-auto">
          <header className="border-b border-border flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center justify-between gap-2 px-4 w-full">
              <div className="flex items-center justify-start gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <GeneratedBreadcrumbs />
              </div>
              <div className="flex items-center justify-end gap-2">
                <Alerts />
              </div>
            </div>
          </header>
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
