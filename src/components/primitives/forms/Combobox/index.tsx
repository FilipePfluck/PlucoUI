import { useState } from 'react'
import {
  ComboboxInputValueChangeDetails,
  Portal,
  ComboboxRootProps as ArkComboboxProps,
  ComboboxItemProps as ArkComboboxItemProps,
  CollectionItem,
} from '@ark-ui/react'
import S from './styles'
import { ChevronsUpDown } from 'lucide-react'

interface ComboboxItemProps extends Partial<ArkComboboxItemProps> {
  label: string
  value: string
}

type ComboboxProps = ArkComboboxProps<CollectionItem> & {
  data: ComboboxItemProps[]
}

export const Combobox = ({ data, ...props }: ComboboxProps) => {
  const [items, setItems] = useState(data)

  const handleChange = (e: ComboboxInputValueChangeDetails) => {
    const filtered = data.filter((item) =>
      item.label.toLowerCase().includes(e.value.toLowerCase()),
    )
    setItems(filtered.length > 0 ? filtered : data)
  }

  return (
    <S.Root
      onInputValueChange={handleChange}
      lazyMount
      unmountOnExit
      allowCustomValue
      {...props}
      items={items}
    >
      <S.Label>Framework</S.Label>
      <S.Control>
        <S.Input width="lg" />
        <S.Trigger>
          <ChevronsUpDown strokeWidth={1.5} size={18} />
        </S.Trigger>
        <S.ClearTrigger></S.ClearTrigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.ItemGroup id="framework">
              <S.ItemGroupLabel htmlFor="framework">
                Frameworks
              </S.ItemGroupLabel>
              {items.map((item) => (
                <S.Item key={item.value} item={item}>
                  <S.ItemText>{item.label}</S.ItemText>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
