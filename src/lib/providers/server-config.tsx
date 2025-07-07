import { api } from '@/graphql/api'
import { graphql } from '@/graphql/graphql'
import { useAuth } from '@/hooks/use-auth'
import { useQuery } from '@tanstack/react-query'
import type { ResultOf } from 'gql.tada'
import React from 'react'

export const getServerConfigDocument = graphql(`
  query GetServerConfig {
    globalSettings {
      id
      availableLanguages
      serverConfig {
        moneyStrategyPrecision
        orderProcess {
          name
          to
        }
        permittedAssetTypes
        permissions {
          name
          description
          assignable
        }
      }
    }
  }
`)

type QueryResult = ResultOf<
  typeof getServerConfigDocument
>['globalSettings']['serverConfig']

export interface ServerConfig {
  availableLanguages: string[]
  moneyStrategyPrecision: QueryResult['moneyStrategyPrecision']
  orderProcess: QueryResult['orderProcess']
  permittedAssetTypes: QueryResult['permittedAssetTypes']
  permissions: QueryResult['permissions']
}

// create a provider for the global settings
export const ServerConfigProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { user } = useAuth()
  const queryKey = ['getServerConfig', user?.id]
  const { data } = useQuery({
    queryKey,
    queryFn: () => api.query(getServerConfigDocument),
    retry: false,
    enabled: !!user?.id,
    staleTime: 1000,
  })
  const value: ServerConfig | null = data?.globalSettings
    ? {
        availableLanguages: data?.globalSettings.availableLanguages ?? [],
        moneyStrategyPrecision:
          data?.globalSettings.serverConfig.moneyStrategyPrecision ?? 2,
        orderProcess: data?.globalSettings.serverConfig.orderProcess ?? [],
        permittedAssetTypes:
          data?.globalSettings.serverConfig.permittedAssetTypes ?? [],
        permissions: data?.globalSettings.serverConfig.permissions ?? [],
      }
    : null

  return (
    <ServerConfigContext.Provider value={value}>
      {children}
    </ServerConfigContext.Provider>
  )
}

export const ServerConfigContext = React.createContext<ServerConfig | null>(
  null,
)
