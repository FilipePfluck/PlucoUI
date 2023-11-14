import { ChevronsUpDown } from 'lucide-react'
import * as S from './styles'
import { Portal } from '@ark-ui/react'

export const Select = () => {
  return (
    <S.Root
      items={[
        'apple',
        'banana',
        'blueberry',
        'grapes',
        'pineapple',
        'aubergine',
        'broccoli',
        'carrot',
        'beef',
        'chicken',
        'lamb',
        'pork',
      ]}
    >
      <S.Label>Fruits</S.Label>
      <S.Control>
        <S.Trigger>
          <S.ValueText />
          <S.Indicator>
            <ChevronsUpDown />
          </S.Indicator>
        </S.Trigger>
      </S.Control>
      <Portal>
        <S.Positioner>
          <S.Content>
            <S.ItemGroup id="fruits">
              <S.ItemGroupLabel htmlFor="fruits">Fruits</S.ItemGroupLabel>
              <S.Item item="apple">
                <S.ItemText>Apple</S.ItemText>
              </S.Item>
              <S.Item item="banana">
                <S.ItemText>Banana</S.ItemText>
              </S.Item>
              <S.Item item="blueberry">
                <S.ItemText>Blueberry</S.ItemText>
              </S.Item>
              <S.Item item="grapes">
                <S.ItemText>Grapes</S.ItemText>
              </S.Item>
              <S.Item item="pineapple">
                <S.ItemText>Pineapple</S.ItemText>
              </S.Item>
            </S.ItemGroup>

            <S.ItemGroup id="vegetables">
              <S.ItemGroupLabel htmlFor="vegetables">
                Vegetables
              </S.ItemGroupLabel>
              <S.Item item="aubergine">
                <S.ItemText>Aubergine</S.ItemText>
              </S.Item>
              <S.Item item="broccoli">
                <S.ItemText>Broccoli</S.ItemText>
              </S.Item>
              <S.Item item="carrot">
                <S.ItemText>Carrot</S.ItemText>
              </S.Item>
            </S.ItemGroup>

            <S.ItemGroup id="meats">
              <S.ItemGroupLabel htmlFor="meats">Meats</S.ItemGroupLabel>
              <S.Item item="beef">
                <S.ItemText>Beef</S.ItemText>
              </S.Item>
              <S.Item item="chicken">
                <S.ItemText>Chicken</S.ItemText>
              </S.Item>
              <S.Item item="lamb">
                <S.ItemText>Lamb</S.ItemText>
              </S.Item>
              <S.Item item="pork">
                <S.ItemText>Pork</S.ItemText>
              </S.Item>
            </S.ItemGroup>
          </S.Content>
        </S.Positioner>
      </Portal>
    </S.Root>
  )
}
