import { CheckboxRootProps as ArkCheckboxProps } from '@ark-ui/react'
import * as S from './styles'
import { ForwardedRef, forwardRef } from 'react'

interface CheckboxProps extends ArkCheckboxProps {
  id?: string
  label: string
}

const CheckboxComponent = (
  { id, label, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLLabelElement>,
) => {
  return (
    <S.Root id={id} ref={ref} {...props}>
      <S.Control />
      <S.Label>{label}</S.Label>
    </S.Root>
  )
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  CheckboxComponent,
)
