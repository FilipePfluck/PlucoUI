import { PasswordInput } from '.'
import { Field } from '../../Field'
import { InputProps } from '../Input'

type FormPasswordInputProps = InputProps & {
  name: string
  label: string
  isRequired?: boolean
  helperMessage?: string
  errorMessage?: string
}

export const FormPasswordInput = ({
  name,
  label,
  isRequired,
  helperMessage,
  errorMessage,
  ...props
}: FormPasswordInputProps) => {
  return (
    <Field
      id={name}
      label={label}
      isRequired={isRequired}
      helperMessage={helperMessage}
      errorMessage={errorMessage}
    >
      <PasswordInput name={name} {...props} />
    </Field>
  )
}
