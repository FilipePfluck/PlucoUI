import { StyledElement } from '@/types/withCss'
import * as S from './styles'

type BlockquoteProps = StyledElement<'div'> & {
  cite?: string
  variant?: 'primary' | 'secondary'
}

export const Blockquote = ({ children, cite, ...props }: BlockquoteProps) => {
  return (
    <S.Root {...props}>
      {children}
      {cite && <S.Caption>— {cite}</S.Caption>}
    </S.Root>
  )
}
