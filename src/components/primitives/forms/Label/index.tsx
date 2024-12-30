import * as S from './styles'
import { StyledElement } from '@/types/withCss'

type LabelProps = StyledElement<'label'> & {
  isRequired?: boolean
}

export const Label = ({ children, isRequired, ...props }: LabelProps) => {
  return (
    <S.Root>
      <S.Label {...props}>{children}</S.Label>
      {isRequired && <S.RequiredIndicator aria-hidden>*</S.RequiredIndicator>}
    </S.Root>
  )
}
