import { PageContext } from '@/framework/layout-engine/page-provider'
import { useContext } from 'react'

export function usePage() {
  const page = useContext(PageContext)
  if (!page) {
    throw new Error('PageProvider not found')
  }
  return page
}
