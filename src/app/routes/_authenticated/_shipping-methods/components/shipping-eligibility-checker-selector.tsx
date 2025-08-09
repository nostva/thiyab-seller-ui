import { ConfigurableOperationSelector } from '@/components/shared/configurable-operation-selector.js'
import { configurableOperationDefFragment } from '@/graphql/fragments.js'
import { graphql } from '@/graphql/graphql.js'
import { ConfigurableOperationInput as ConfigurableOperationInputType } from '@vendure/common/lib/generated-types'

export const shippingEligibilityCheckersDocument = graphql(
  `
    query GetShippingEligibilityCheckers {
      shippingEligibilityCheckers {
        ...ConfigurableOperationDef
      }
    }
  `,
  [configurableOperationDefFragment],
)

interface ShippingEligibilityCheckerSelectorProps {
  value: ConfigurableOperationInputType | undefined
  onChange: (value: ConfigurableOperationInputType | undefined) => void
}

export function ShippingEligibilityCheckerSelector({
  value,
  onChange,
}: ShippingEligibilityCheckerSelectorProps) {
  return (
    <ConfigurableOperationSelector
      value={value}
      onChange={onChange}
      queryDocument={shippingEligibilityCheckersDocument}
      queryKey="shippingEligibilityCheckers"
      dataPath="shippingEligibilityCheckers"
      buttonText="Select Shipping Eligibility Checker"
    />
  )
}
