import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { AwesomeGraphQLClient } from 'awesome-graphql-client'
import { type DocumentNode, print } from 'graphql'

export const ADMIN_API_URL = import.meta.env.VITE_API_SERVER_URL

console.log(import.meta.env)

export type Variables = object
export type RequestDocument = string | DocumentNode

const awesomeClient = new AwesomeGraphQLClient({
  endpoint: ADMIN_API_URL,
  fetch: async (url: string, options: RequestInit = {}) => {
    // Get the active channel token from localStorage
    const channelToken = localStorage.getItem('vendure-selected-channel-token')
    const headers = new Headers(options.headers)

    if (channelToken) {
      headers.set('vendure-selected-channel-token', channelToken)
    }

    // Get the content language from user settings and add as query parameter
    let finalUrl = url
    try {
      const userSettings = localStorage.getItem('vendure-user-settings')
      if (userSettings) {
        const settings = JSON.parse(userSettings)
        const contentLanguage = settings.contentLanguage

        if (contentLanguage) {
          const urlObj = new URL(finalUrl)
          urlObj.searchParams.set('languageCode', contentLanguage)
          finalUrl = urlObj.toString()
        }
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn('Failed to read content language from user settings:', error)
    }

    return fetch(finalUrl, {
      ...options,
      headers,
      credentials: 'include',
      mode: 'cors',
    })
  },
})

export type VariablesAndRequestHeadersArgs<V extends Variables> =
  V extends Record<any, never>
    ? [variables?: V, requestHeaders?: HeadersInit]
    : [variables: V, requestHeaders?: HeadersInit]

function query<T, V extends Variables = Variables>(
  document: RequestDocument | TypedDocumentNode<T, V>,
  variables?: V,
): Promise<T> {
  const documentString =
    typeof document === 'string' ? document : print(document)
  return awesomeClient.request(documentString, variables) as any
}

function mutate<T, V extends Variables = Variables>(
  document: TypedDocumentNode<T, V>,
): (variables: V) => Promise<T>
function mutate(
  document: RequestDocument,
): (variables: Variables) => Promise<unknown>
function mutate<T, V extends Variables = Variables>(
  document: TypedDocumentNode<T, V>,
  variables: V,
): Promise<T>
function mutate(
  document: RequestDocument,
  variables: Variables,
): Promise<unknown>
function mutate<T, V extends Variables = Variables>(
  document: RequestDocument | TypedDocumentNode<T, V>,
  maybeVariables?: V,
): Promise<T> | ((variables: V) => Promise<T>) {
  const documentString =
    typeof document === 'string' ? document : print(document)
  if (maybeVariables) {
    return awesomeClient.request(documentString, maybeVariables) as any
  } else {
    return (variables: V): Promise<T> => {
      return awesomeClient.request(documentString, variables) as any
    }
  }
}

export const api = {
  query,
  mutate,
}
