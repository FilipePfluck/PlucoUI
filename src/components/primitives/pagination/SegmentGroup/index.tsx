import { SegmentGroupProps as ArkSegmentGroupProps } from '@ark-ui/react'

import * as S from './styles'

type SegmentGroupProps = ArkSegmentGroupProps & {
  items: string[]
}

export const SegmentGroup = ({ items, ...props }: SegmentGroupProps) => {
  return (
    <S.Root {...props}>
      <S.Indicator />
      {items.map((item) => (
        <S.Item key={item} value={item}>
          <S.ItemText>{item}</S.ItemText>
          <S.ItemControl />
        </S.Item>
      ))}
    </S.Root>
  )
}
