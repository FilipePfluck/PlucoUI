import { HTMLStyledProps } from '@/styled-system/jsx'
import * as S from './styles'
import { ForwardedRef, forwardRef } from 'react'

type IconButtonProps = HTMLStyledProps<'button'> &
  S.IconButtonVariants & {
    // make aria-label required for iconButtons
    'aria-label': string
  }

const IconButtonComponent = (
  { children, ...props }: IconButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => {
  return (
    <S.IconButtonContainer ref={ref} {...props}>
      {children}
    </S.IconButtonContainer>
  )
}

export const IconButton = forwardRef(IconButtonComponent)
