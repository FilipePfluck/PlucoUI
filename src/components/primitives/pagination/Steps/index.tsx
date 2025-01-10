import { Flex } from '@/styled-system/jsx'
import { Button } from '../../forms/buttons/Button'
import S from './styles'

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

type StepsItems = {
  value: string
  title: string
  description: string
}[]

// TODO - Reflect on what is the best approach
// to dynamically change the content of each step
// from a DX standpoint

export const Steps = ({ items }: { items: StepsItems }) => {
  return (
    <S.Root count={items.length}>
      <S.List>
        {items.map((item, index) => (
          <S.Item key={index} index={index}>
            <S.Trigger>
              <S.Indicator>{index + 1}</S.Indicator>
              <p>{item.title}</p>
            </S.Trigger>
            <S.Separator />
          </S.Item>
        ))}
      </S.List>

      {items.map((item, index) => (
        <S.Content key={index} index={index}>
          {item.title} - {item.description}
        </S.Content>
      ))}

      <S.CompletedContent>
        Steps Complete - Thank you for filling out the form!
      </S.CompletedContent>

      <Flex gap="4">
        <S.PrevTrigger asChild>
          <Button intent="secondary">Back</Button>
        </S.PrevTrigger>
        <S.NextTrigger asChild>
          <Button intent="secondary">Next</Button>
        </S.NextTrigger>
      </Flex>
    </S.Root>
  )
}
