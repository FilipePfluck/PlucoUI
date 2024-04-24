import { SplitterRootProps } from '@ark-ui/react'
import * as S from './styles'

export const Splitter = ({ ...props }: SplitterRootProps) => {
  return (
    <S.Root
      size={[
        { id: 'a', size: 50 },
        { id: 'b', size: 50 },
      ]}
      {...props}
    >
      <S.Panel id="a">A</S.Panel>
      <S.ResizeTrigger id="a:b" />
      <S.Panel id="b">B</S.Panel>
    </S.Root>
  )
}
