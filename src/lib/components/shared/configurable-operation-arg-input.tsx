import type { ConfigArgType } from '@vendure/common/lib/shared-types'

import type { ConfigurableOperationDefFragment } from '@/graphql/fragments'
import { InputComponent } from '@/framework/component-registry/dynamic-component'

import { FacetValueInput } from '../data-input/facet-value-input'

export interface ConfigurableOperationArgInputProps {
  definition: ConfigurableOperationDefFragment['args'][number]
  readOnly?: boolean
  value: string
  onChange: (value: any) => void
}

export function ConfigurableOperationArgInput({
  definition,
  value,
  onChange,
  readOnly,
}: ConfigurableOperationArgInputProps) {
  if ((definition.ui as any)?.component === 'facet-value-form-input') {
    return (
      <FacetValueInput value={value} onChange={onChange} readOnly={readOnly} />
    )
  }
  switch (definition.type as ConfigArgType) {
    case 'boolean':
      return (
        <InputComponent
          id="vendure:checkboxInput"
          value={value}
          onChange={(value: any) => onChange(value)}
          readOnly={readOnly}
        />
      )
    case 'string':
      return (
        <InputComponent
          id="vendure:textInput"
          value={value}
          onChange={(value: any) => onChange(value)}
          readOnly={readOnly}
        />
      )
    default:
      return (
        <InputComponent
          id="vendure:textInput"
          value={value}
          onChange={(value: any) => onChange(value)}
          readOnly={readOnly}
        />
      )
  }
}
