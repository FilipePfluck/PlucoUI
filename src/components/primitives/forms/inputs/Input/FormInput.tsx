import { Input, InputProps } from '.'
import { Field } from '../../Field'

type FormInputProps = InputProps & {
  name: string
  label: string
  isRequired?: boolean
  helperMessage?: string
  errorMessage?: string
}

export const FormInput = ({
  name,
  label,
  isRequired,
  helperMessage,
  errorMessage,
  ...props
}: FormInputProps) => {
  return (
    <Field
      id={name}
      label={label}
      isRequired={isRequired}
      helperMessage={helperMessage}
      errorMessage={errorMessage}
    >
      <Input name={name} {...props} />
    </Field>
  )
}
