import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authenticated/_zones/components/zone-countries-add',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_authenticated/_zones/components/zone-countries-add"!</div>
  )
}
