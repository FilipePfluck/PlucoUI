import { ChevronsUpDown } from 'lucide-react'
import * as S from './styles'
import { Portal, SelectItemProps as ArkSelectItemProps } from '@ark-ui/react'

interface SelectItemProps extends Partial<ArkSelectItemProps> {
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
  placeholder?: string
}

// TODO - revise this whole component

export const Select = ({
  items: groups,
  itemsValues,
  label,
  placeholder,
}: SelectProps) => {
  return (
    <S.Root items={itemsValues}>
      {label && <S.Label>{label}</S.Label>}
      <S.Control>
        <S.Trigger>
          <S.ValueText placeholder={placeholder} />
          <S.Indicator>
            <ChevronsUpDown strokeWidth={1.5} size={18} />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            {groups.map(({ id, items, groupLabel }) => (
              <S.ItemGroup id={id} key={id}>
                {groupLabel && (
                  <S.ItemGroupLabel htmlFor={id}>{groupLabel}</S.ItemGroupLabel>
                )}
                <S.Separator />
                {items.map(({ label, value, ...props }) => (
                  <S.Item item={value} key={value} {...props}>
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
