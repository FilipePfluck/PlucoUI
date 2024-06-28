import { CheckboxRootProps as ArkCheckboxProps } from '@ark-ui/react'
import S from './styles'
import { ForwardedRef, forwardRef } from 'react'
import { SystemStyleObject } from '@/styled-system/types'

export type CheckboxProps = ArkCheckboxProps & {
  label: string
  css?: SystemStyleObject
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
