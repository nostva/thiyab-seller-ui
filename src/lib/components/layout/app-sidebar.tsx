import * as React from 'react'

import { NavMain } from '@/components/layout/nav-main'
import { NavUser } from '@/components/layout/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { getNavMenuConfig } from '@/framework/nav-menu/nav-menu-extensions'

import { ChannelSwitcher } from './channel-switcher'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { sections } = getNavMenuConfig()

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <ChannelSwitcher />
      </SidebarHeader>
      <SidebarContent className="flex flex-col h-full overflow-y-auto">
        <NavMain items={sections} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
