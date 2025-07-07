import { ServerConfigContext } from '@/providers/server-config'
import React from 'react'

export const useServerConfig = () => React.useContext(ServerConfigContext)
