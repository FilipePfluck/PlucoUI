import { Control, Controller } from 'react-hook-form'
import { FormControl } from '../FormControl'
import { Checkbox } from '.'

type FormCheckboxProps = {
  // eslint-disable-next-line
  control: Control<any>
  errorMessage?: string
  name: string
  label: string
  checkboxLabel: string
  isRequired?: boolean
}

export const FormCheckbox = ({
  name,
  control,
  errorMessage,
  label,
  checkboxLabel,
  isRequired,
}: FormCheckboxProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const { onChange, value, ...rest } = field

        return (
          <FormControl
            id={name}
            label={label}
            isRequired={isRequired}
            errorMessage={errorMessage}
          >
            <Checkbox
              label={checkboxLabel}
              onCheckedChange={({ checked }) => onChange(checked)}
              checked={value}
              {...rest}
            />
          </FormControl>
        )
      }}
    />
  )
}
