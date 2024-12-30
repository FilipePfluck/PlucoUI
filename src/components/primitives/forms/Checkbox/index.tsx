import { CheckboxRootProps as ArkCheckboxProps } from '@ark-ui/react'
import S from './styles'
import { ForwardedRef, forwardRef } from 'react'
import { WithCss } from '@/types/withCss'

export type CheckboxProps = WithCss<ArkCheckboxProps> & {
  label: string
}

const CheckboxComponent = (
  {
    label,
    'aria-invalid': ariaInvalid,
    'aria-required': ariaRequired,
    'aria-describedby': ariaDescribedBy,
    ...props
  }: CheckboxProps,
  ref: ForwardedRef<HTMLLabelElement>,
) => {
  return (
    <S.Root ref={ref} {...props}>
      <S.Control aria-hidden={false}>
        <S.Indicator />
        <S.HiddenInput
          aria-invalid={ariaInvalid}
          aria-required={ariaRequired}
          aria-describedby={ariaDescribedBy}
        />
      </S.Control>
      <S.Label>{label}</S.Label>
    </S.Root>
  )
}

export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  CheckboxComponent,
)
