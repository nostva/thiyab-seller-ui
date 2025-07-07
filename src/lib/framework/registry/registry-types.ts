import type { DashboardAlertDefinition } from '../alert/types'
import type { DashboardWidgetDefinition } from '../dashboard-widget/types'
import type {
  DashboardActionBarItem,
  DashboardPageBlockDefinition,
} from '../extension-api/extension-api-types'
import type { NavMenuConfig } from '../nav-menu/nav-menu-extensions'

export interface GlobalRegistryContents {
  extensionSourceChangeCallbacks: Set<() => void>
  registerDashboardExtensionCallbacks: Set<() => void>
  navMenuConfig: NavMenuConfig
  dashboardActionBarItemRegistry: Map<string, DashboardActionBarItem[]>
  dashboardPageBlockRegistry: Map<string, DashboardPageBlockDefinition[]>
  dashboardWidgetRegistry: Map<string, DashboardWidgetDefinition>
  dashboardAlertRegistry: Map<string, DashboardAlertDefinition>
}
