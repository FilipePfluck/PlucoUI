import { ForwardedRef, forwardRef } from 'react'
import * as S from './styles'
import { HTMLStyledProps } from '@/styled-system/jsx'

type ButtonProps = HTMLStyledProps<'button'> & S.ButtonVariants

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
