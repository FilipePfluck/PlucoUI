import S, { Divider, FruitCard, FruitGrid } from '../styles'
import { Flex } from '@/styled-system/jsx'
import { IconButton } from '@/components/primitives/buttons/IconButton'
import { FoldVertical } from 'lucide-react'

export const visibleFruits = ['🍎', '🍐', '🍊', '🍋']
export const hiddenFruits = [
  '🍌',
  '🍉',
  '🍇',
  '🍓',
  '🫐',
  '🍈',
  '🍒',
  '🍑',
  '🥭',
  '🍍',
  '🥥',
  '🥝',
]

function calculateDelay(i: number, numOfCols: number) {
  const r = Math.floor(i / numOfCols)
  const c = i % numOfCols
  return r * 0.1 + c * 0.1
}

const positionsDelays = hiddenFruits.map((_, index) => {
  return {
    base: calculateDelay(index, 1),
    md: calculateDelay(index, 2),
    lg: calculateDelay(index, 4),
  }
})

export const Fruits = () => {
  return (
    <S.Root>
      <Flex direction="column" gap="4">
        <FruitGrid>
          {visibleFruits.map((fruit, index) => (
            <FruitCard
              style={{
                // @ts-ignore
                '--delay-base': `${positionsDelays[index].base}s`,
                '--delay-md': `${positionsDelays[index].md}s`,
                '--delay-lg': `${positionsDelays[index].lg}s`,
              }}
              key={fruit}
            >
              {fruit}
            </FruitCard>
          ))}
        </FruitGrid>

        <S.Content>
          <FruitGrid>
            {hiddenFruits.map((fruit, index) => (
              <FruitCard
                key={fruit}
                style={{
                  // @ts-ignore
                  '--delay-base': `${positionsDelays[index].base}s`,
                  '--delay-md': `${positionsDelays[index].md}s`,
                  '--delay-lg': `${positionsDelays[index].lg}s`,
                }}
              >
                {fruit}
              </FruitCard>
            ))}
          </FruitGrid>
        </S.Content>

        <Flex gap="2" align="center">
          <Divider />
          <S.Trigger asChild>
            <IconButton size="md" aria-label="Toggle">
              <FoldVertical size={16} />
            </IconButton>
          </S.Trigger>
          <Divider />
        </Flex>
      </Flex>
    </S.Root>
  )
}
