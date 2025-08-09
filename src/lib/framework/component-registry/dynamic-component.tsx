import React from 'react'
import {
  useComponentRegistry,
  type DataInputComponentProps,
} from './component-registry.js'

export type DisplayComponentProps = {
  id: string
  value: any
  // rest of the props are passed to the component
  [key: string]: any
}

export type InputComponentProps = {
  id: string
  value: any
  onChange?: (value: any) => void
  onBlur?: () => void
  name?: string
  // rest of the props are passed to the component
  [key: string]: any
}

/**
 * @description
 * This component is used to delegate the rendering of a component to the component registry.
 *
 * @example
 * ```ts
 * <Delegate component="money.display.default" value={100} />
 * ```
 *
 * @returns
 */
export function DisplayComponent(
  props: Readonly<DisplayComponentProps>,
): React.ReactNode {
  const { getDisplayComponent } = useComponentRegistry()
  const Component = getDisplayComponent(String(props.id))
  if (!Component) {
    throw new Error(`Component with id ${String(props.id)} not found`)
  }
  const { value, ...rest } = props
  return <Component value={value} {...rest} />
}

export function InputComponent(
  props: Readonly<InputComponentProps>,
): React.ReactNode {
  const { getInputComponent } = useComponentRegistry()
  const Component = getInputComponent(String(props.id))
  if (!Component) {
    throw new Error(`Component with id ${String(props.id)} not found`)
  }
  const { value, onChange, onBlur, name, ...rest } = props

  // Create props that match DataInputComponentProps interface
  const componentProps: DataInputComponentProps = {
    value,
    onChange: onChange || (() => {}),
    onBlur: onBlur || (() => {}),
    name: name || '',
    ref: () => {},
    ...rest,
  }

  return <Component {...componentProps} />
}
