import { Portal } from '@ark-ui/react'
import * as S from './styles'
import { ChevronsUpDown } from 'lucide-react'

export const Combobox = () => {
  const items = ['React', 'Solid', 'Vue']

  return (
    <S.Root items={items} lazyMount unmountOnExit allowCustomValue>
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
                <S.Item key={item} item={item}>
                  <S.ItemText>{item}</S.ItemText>
                </S.Item>
              ))}
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
