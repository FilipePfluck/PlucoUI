import { Check, ChevronsUpDown, X } from 'lucide-react'
import S, { Separator } from './styles'
import {
  Portal,
  SelectItemProps as ArkSelectItemProps,
  SelectRootProps as ArkSelectProps,
  CollectionItem,
} from '@ark-ui/react'

interface SelectItemProps extends Partial<ArkSelectItemProps> {
  label: string
  value: string
}

type BaseSelectProps = {
  items: {
    groupLabel?: string
    id: string
    items: SelectItemProps[]
  }[]
  label?: string
  placeholder?: string
  clearable?: boolean
  showIndicator?: boolean
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
}

type SelectProps = BaseSelectProps &
  Omit<ArkSelectProps<CollectionItem>, keyof BaseSelectProps>

// TODO - revise this whole component

export const Select = ({
  items: groups,
  label,
  placeholder,
  width,
  clearable = false,
  showIndicator = false,
  ...props
}: SelectProps) => {
  let items: SelectItemProps[] = []

  groups.forEach((group) => {
    items = items.concat(group.items)
  })

  return (
    <S.Root {...props} items={items}>
      {label && <S.Label>{label}</S.Label>}
      <S.Control>
        <S.Trigger width={width} data-clearable={clearable}>
          <S.ValueText placeholder={placeholder} />
          <S.Indicator>
            <ChevronsUpDown strokeWidth={1.5} size={18} />
          </S.Indicator>
        </S.Trigger>
        {clearable && (
          <S.ClearTrigger>
            <X strokeWidth={1.5} size={18} />
          </S.ClearTrigger>
        )}
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content width={width}>
            {groups.map(({ id, items, groupLabel }, index) => (
              <>
                <S.ItemGroup id={id} key={id}>
                  {groupLabel && (
                    <S.ItemGroupLabel
                      showIndicator={showIndicator}
                      htmlFor={id}
                    >
                      {groupLabel}
                    </S.ItemGroupLabel>
                  )}
                  {items.map(({ label, value, ...props }) => (
                    <S.Item
                      item={value}
                      key={value}
                      showIndicator={showIndicator}
                      {...props}
                    >
                      {showIndicator && (
                        <S.ItemIndicator>
                          <Check size={14} />
                        </S.ItemIndicator>
                      )}
                      <S.ItemText>{label}</S.ItemText>
                    </S.Item>
                  ))}
                </S.ItemGroup>
                {index + 1 !== groups.length && <Separator />}
              </>
            ))}
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
