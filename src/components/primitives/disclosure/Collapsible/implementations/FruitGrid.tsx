import * as S from '../styles'
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

export const FruitGrid = () => {
  return (
    <S.Root>
      <Flex direction="column" gap="4">
        <S.FruitGrid>
          {visibleFruits.map((fruit, index) => (
            <S.FruitCard
              style={{
                // @ts-ignore
                '--delay-base': `${positionsDelays[index].base}s`,
                '--delay-md': `${positionsDelays[index].md}s`,
                '--delay-lg': `${positionsDelays[index].lg}s`,
              }}
              key={fruit}
            >
              {fruit}
            </S.FruitCard>
          ))}
        </S.FruitGrid>

        <S.Content>
          <S.FruitGrid>
            {hiddenFruits.map((fruit, index) => (
              <S.FruitCard
                key={fruit}
                style={{
                  // @ts-ignore
                  '--delay-base': `${positionsDelays[index].base}s`,
                  '--delay-md': `${positionsDelays[index].md}s`,
                  '--delay-lg': `${positionsDelays[index].lg}s`,
                }}
              >
                {fruit}
              </S.FruitCard>
            ))}
          </S.FruitGrid>
        </S.Content>

        <Flex gap="2" align="center">
          <S.Divider />
          <S.Trigger asChild>
            <IconButton size="md" aria-label="Toggle">
              <FoldVertical size={16} />
            </IconButton>
          </S.Trigger>
          <S.Divider />
        </Flex>
      </Flex>
    </S.Root>
  )
}
