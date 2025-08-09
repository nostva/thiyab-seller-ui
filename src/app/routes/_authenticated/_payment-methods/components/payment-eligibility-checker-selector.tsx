import { ConfigurableOperationSelector } from '@/components/shared/configurable-operation-selector.js'
import { configurableOperationDefFragment } from '@/graphql/fragments.js'
import { graphql } from '@/graphql/graphql.js'
import { ConfigurableOperationInput as ConfigurableOperationInputType } from '@vendure/common/lib/generated-types'

export const paymentEligibilityCheckersDocument = graphql(
  `
    query GetPaymentEligibilityCheckers {
      paymentMethodEligibilityCheckers {
        ...ConfigurableOperationDef
      }
    }
  `,
  [configurableOperationDefFragment],
)

interface PaymentEligibilityCheckerSelectorProps {
  value: ConfigurableOperationInputType | undefined
  onChange: (value: ConfigurableOperationInputType | undefined) => void
}

export function PaymentEligibilityCheckerSelector({
  value,
  onChange,
}: PaymentEligibilityCheckerSelectorProps) {
  return (
    <ConfigurableOperationSelector
      value={value}
      onChange={onChange}
      queryDocument={paymentEligibilityCheckersDocument}
      queryKey="paymentMethodEligibilityCheckers"
      dataPath="paymentMethodEligibilityCheckers"
      buttonText="Select Payment Eligibility Checker"
      emptyText="No checkers found"
    />
  )
}
