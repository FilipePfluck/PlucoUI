import { ReactNode, useMemo, useState } from 'react'

import {
  ComboboxInputValueChangeDetails,
  Portal,
  ComboboxRootProps as ArkComboboxProps,
  ComboboxItemProps as ArkComboboxItemProps,
  CollectionItem,
  createListCollection,
} from '@ark-ui/react'

import { ChevronsUpDown } from 'lucide-react'

import S, { EmptyState } from './styles'

import { Input } from '../inputs/Input'
import { IconButton } from '../buttons/IconButton'

interface ComboboxItemProps extends Partial<ArkComboboxItemProps> {
  label: string
  value: string
}

type ComboboxProps = Omit<ArkComboboxProps<CollectionItem>, 'collection'> & {
  data: ComboboxItemProps[]
  emptyState?: ReactNode
  filterOptionsIfSelected?: boolean
}

const defaultEmptyState = 'No results match your search...'

export const Combobox = ({
  data,
  emptyState = defaultEmptyState,
  filterOptionsIfSelected = true,
  ...props
}: ComboboxProps) => {
  const [items, setItems] = useState(data)
  const [selectedFromList, setSelectedFromList] = useState(false)

  const collection = useMemo(() => {
    return createListCollection({
      items,
    })
  }, [items])

  const handleChange = (details: ComboboxInputValueChangeDetails) => {
    const search = details.inputValue

    const shouldFilterOptions = filterOptionsIfSelected || !selectedFromList

    if (shouldFilterOptions) {
      setItems(
        data.filter((item) =>
          item.label.toLowerCase().includes(search.toLowerCase()),
        ),
      )
    } else {
      setItems(data)
    }

    setSelectedFromList(false)
  }

  return (
    <S.Root
      onInputValueChange={handleChange}
      onValueChange={() => setSelectedFromList(true)}
      allowCustomValue
      {...props}
      collection={collection}
    >
      <S.Control>
        <S.Input width="lg" asChild>
          <Input
            endElement={
              <S.Trigger asChild tabIndex={0}>
                <IconButton
                  aria-label="Open combobox list"
                  intent="link"
                  size="sm"
                >
                  <ChevronsUpDown strokeWidth={1.5} size={18} />
                </IconButton>
              </S.Trigger>
            }
          />
        </S.Input>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content
            style={{
              // @ts-ignore
              '--n-of-results': `${items.length || 1}`,
            }}
          >
            <S.ItemGroup>
              {items.map((item) => (
                <S.Item
                  onClick={() => console.log('Click!')}
                  item={item}
                  key={item.label}
                >
                  <S.ItemText>{item.label}</S.ItemText>
                </S.Item>
              ))}
              {items.length === 0 && (
                <EmptyState css={{ animation: 'none' }}>
                  {emptyState}
                </EmptyState>
              )}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
