import { ForwardedRef, forwardRef } from 'react'
import { PasswordInput } from '.'
import { FormControl } from '../FormControl'
import { InputProps } from '../Input'

type FormPasswordInputProps = InputProps & {
  name: string
  label: string
  isRequired?: boolean
  helperMessage?: string
  errorMessage?: string
}

const FormPasswordInputComponent = (
  {
    name,
    label,
    isRequired,
    helperMessage,
    errorMessage,
    ...props
  }: FormPasswordInputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <FormControl
      id={name}
      label={label}
      isRequired={isRequired}
      helperMessage={helperMessage}
      errorMessage={errorMessage}
    >
      <PasswordInput ref={ref} name={name} {...props} />
    </FormControl>
  )
}

export const FormPasswordInput = forwardRef<
  HTMLInputElement,
  FormPasswordInputProps
>(FormPasswordInputComponent)
