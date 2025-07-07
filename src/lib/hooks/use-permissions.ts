import type { Permission } from '@/graphql/schema'
import { useAuth } from '@/hooks/use-auth'
import { useChannel } from '@/hooks/use-channel'

export function usePermissions() {
  const { channels } = useAuth()
  const { selectedChannelId } = useChannel()

  function hasPermissions(permissions: string[]) {
    if (permissions.length === 0) {
      return true
    }
    // Use the selected channel instead of settings.activeChannelId
    const activeChannel = (channels ?? []).find(
      (channel) => channel.id === selectedChannelId,
    )
    if (!activeChannel) {
      return false
    }
    return permissions.some((permission) =>
      activeChannel.permissions.includes(permission as Permission),
    )
  }

  return { hasPermissions }
}
