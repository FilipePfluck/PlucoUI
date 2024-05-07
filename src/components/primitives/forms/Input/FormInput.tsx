import { ForwardedRef, forwardRef } from 'react'
import { Input, InputProps } from '.'
import { FormControl } from '../FormControl'

type FormInputProps = InputProps & {
  name: string
  label: string
  isRequired?: boolean
  helperMessage?: string
  errorMessage?: string
}

const FormInputComponent = (
  {
    name,
    label,
    isRequired,
    helperMessage,
    errorMessage,
    ...props
  }: FormInputProps,
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
      <Input name={name} ref={ref} {...props} />
    </FormControl>
  )
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  FormInputComponent,
)
