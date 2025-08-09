import { ConfigurableOperationSelector } from '@/components/shared/configurable-operation-selector.js'
import { configurableOperationDefFragment } from '@/graphql/fragments.js'
import { graphql } from '@/graphql/graphql.js'
import { ConfigurableOperationInput as ConfigurableOperationInputType } from '@vendure/common/lib/generated-types'

export const shippingCalculatorsDocument = graphql(
  `
    query GetShippingCalculators {
      shippingCalculators {
        ...ConfigurableOperationDef
      }
    }
  `,
  [configurableOperationDefFragment],
)

interface ShippingCalculatorSelectorProps {
  value: ConfigurableOperationInputType | undefined
  onChange: (value: ConfigurableOperationInputType | undefined) => void
}

export function ShippingCalculatorSelector({
  value,
  onChange,
}: Readonly<ShippingCalculatorSelectorProps>) {
  return (
    <ConfigurableOperationSelector
      value={value}
      onChange={onChange}
      queryDocument={shippingCalculatorsDocument}
      queryKey="shippingCalculators"
      dataPath="shippingCalculators"
      buttonText="Select Shipping Calculator"
    />
  )
}
