import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'
import * as S from './styles'
import { SystemStyleObject } from '@pandacss/dev'

export type ButtonProps = ComponentPropsWithRef<'button'> &
  S.ButtonVariants & {
    css?: SystemStyleObject
  }

const ButtonComponent = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.ButtonContainer ref={ref} {...props}>
      {children}
    </S.ButtonContainer>
  )
}

export const Button = forwardRef(ButtonComponent)
