import { ChannelContext } from '@/providers/channel-provider'
import * as React from 'react'

export function useChannel() {
  const context = React.useContext(ChannelContext)
  if (context === undefined) {
    throw new Error('useChannel must be used within a ChannelProvider')
  }
  return context
}
