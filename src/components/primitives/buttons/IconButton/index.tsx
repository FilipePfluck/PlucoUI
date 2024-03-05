import * as S from './styles'
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react'
import { SystemStyleObject } from '@pandacss/dev'

export type IconButtonProps = ComponentPropsWithRef<'button'> &
  S.IconButtonVariants & {
    // make aria-label required for iconButtons
    'aria-label': string
    css?: SystemStyleObject
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
