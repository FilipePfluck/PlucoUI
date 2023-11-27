import { ChevronsUpDown } from 'lucide-react'
import * as S from './styles'
import { Portal } from '@ark-ui/react'

interface SelectItemProps {
  label: string
  value: string
}

interface SelectProps {
  items: {
    groupLabel?: string
    id: string
    items: SelectItemProps[]
  }[]
  itemsValues: string[]
  label?: string
}

export const Select = ({ items, itemsValues, label }: SelectProps) => {
  return (
    <S.Root items={itemsValues}>
      {label && <S.Label>{label}</S.Label>}
      <S.Control>
        <S.Trigger>
          <S.ValueText />
          <S.Indicator>
            <ChevronsUpDown strokeWidth={1.5} size={18} />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            {items.map(({ id, items, groupLabel }) => (
              <S.ItemGroup id={id} key={id}>
                {groupLabel && (
                  <S.ItemGroupLabel htmlFor={id}>{groupLabel}</S.ItemGroupLabel>
                )}
                {items.map(({ label, value }) => (
                  <S.Item item={value} key={value}>
                    <S.ItemText>{label}</S.ItemText>
                  </S.Item>
                ))}
              </S.ItemGroup>
            ))}
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
