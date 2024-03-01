import { CheckboxRootProps as ArkCheckboxProps } from '@ark-ui/react'
import * as S from './styles'
import { ForwardedRef, forwardRef } from 'react'

export type CheckboxProps = ArkCheckboxProps & {
  label: string
}

const CheckboxComponent = (
  { label, ...props }: CheckboxProps,
  ref: ForwardedRef<HTMLLabelElement>,
) => {
  return (
    <S.Root ref={ref} {...props}>
      <S.Control />
      <S.Label>{label}</S.Label>
    </S.Root>
  )
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  CheckboxComponent,
)
