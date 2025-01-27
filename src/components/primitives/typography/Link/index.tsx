import { StyledElement } from '@/types/withCss'
import * as S from './styles'

export const Link = ({ children, ...props }: StyledElement<'a'>) => {
  return <S.A {...props}>{children}</S.A>
}
