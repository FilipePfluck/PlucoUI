import * as S from './styles'
import { StyledElement } from '@/types/withCss'

export type ButtonProps = StyledElement<'button'> & S.ButtonVariants

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.ButtonContainer {...props}>{children}</S.ButtonContainer>
}
