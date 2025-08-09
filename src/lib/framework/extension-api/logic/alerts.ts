import type { DashboardAlertDefinition } from '../types/alerts.js'
import { globalRegistry } from '../../registry/global-registry.js'

export function registerAlertExtensions(alerts?: DashboardAlertDefinition[]) {
  if (alerts) {
    for (const alert of alerts) {
      globalRegistry.get('dashboardAlertRegistry').set(alert.id, alert)
    }
  }
}
