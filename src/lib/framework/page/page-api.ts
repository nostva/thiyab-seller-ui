import type { DashboardRouteDefinition } from '../extension-api/extension-api-types'

export const extensionRoutes = new Map<string, DashboardRouteDefinition>()

export function registerRoute(config: DashboardRouteDefinition) {
  if (config.path) {
    extensionRoutes.set(config.path, config)
  }
}
