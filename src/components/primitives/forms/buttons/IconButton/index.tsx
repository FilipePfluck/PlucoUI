import { ComponentPropsWithRef } from 'react'
import * as S from './styles'
import { WithCss } from '@/types/withCss'

export type IconButtonProps = ComponentPropsWithRef<'button'> &
  WithCss<S.IconButtonVariants> & {
    // makes aria-label required for iconButtons
    'aria-label': string
  }

export const IconButton = ({ children, ...props }: IconButtonProps) => {
  return <S.IconButtonContainer {...props}>{children}</S.IconButtonContainer>
}
