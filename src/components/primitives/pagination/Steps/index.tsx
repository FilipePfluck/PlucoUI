import S from './styles'

const items = [
  { value: 'first', title: 'First', description: 'Contact Info' },
  { value: 'second', title: 'Second', description: 'Date & Time' },
  { value: 'third', title: 'Third', description: 'Select Rooms' },
]

export const Steps = () => {
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

      <div>
        <S.PrevTrigger>Back</S.PrevTrigger>
        <S.NextTrigger>Next</S.NextTrigger>
      </div>
    </S.Root>
  )
}
