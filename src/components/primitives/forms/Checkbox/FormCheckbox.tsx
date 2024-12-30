import { Control, Controller, useFormContext } from 'react-hook-form'
import { Field } from '../Field'
import { Checkbox, CheckboxProps } from '.'
import { getValueByPath } from '@/utils/getValueByPath'

type FormCheckboxProps = CheckboxProps & {
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
  const { trigger } = useFormContext()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, formState }) => {
        const { onChange: onFieldChange, value, ...rest } = field

        return (
          <Field
            id={name}
            label={label}
            isRequired={isRequired}
            errorMessage={errorMessage}
          >
            <Checkbox
              label={checkboxLabel}
              onCheckedChange={({ checked }) => {
                onFieldChange(checked)

                if (getValueByPath(formState.errors, name)) {
                  trigger(name)
                }
              }}
              checked={value}
              {...rest}
            />
          </Field>
        )
      }}
    />
  )
}
