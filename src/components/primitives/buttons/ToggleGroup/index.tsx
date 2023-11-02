import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react'
import * as S from './styles'

export const ToggleGroup = () => {
  return (
    <S.Root>
      <S.Toggle value="left">
        <AlignLeft size={16} />
      </S.Toggle>
      <S.Toggle value="center">
        <AlignCenter size={16} />
      </S.Toggle>
      <S.Toggle value="right">
        <AlignRight size={16} />
      </S.Toggle>
    </S.Root>
  )
}
