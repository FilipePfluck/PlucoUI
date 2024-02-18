import { TabsRootProps as ArkTabsProps } from '@ark-ui/react'
import * as S from './styles'
import { ReactNode, useState } from 'react'

type TabsProps = ArkTabsProps & {
  items: {
    id: string
    name: ReactNode
    content: ReactNode
    index: number
  }[]
}

export const Tabs = ({
  orientation = 'horizontal',
  items,
  defaultValue,
  ...props
}: TabsProps) => {
  const [value, setValue] = useState(defaultValue)

  const valueIndex = items.findIndex((item) => {
    return item.id === value
  })

  return (
    <S.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={({ value }) => setValue(value)}
      orientation={orientation}
      {...props}
    >
      <S.List>
        {items.map((item) => (
          <S.Trigger key={item.id} value={item.id}>
            {item.name}
          </S.Trigger>
        ))}
        <S.Indicator />
      </S.List>
      {items.map((item) => (
        <S.Content
          style={{
            // @ts-ignore
            '--tab-hidden-distance-x':
              item.index > valueIndex ? '120px' : '-120px',
            '--tab-hidden-distance-y':
              item.index > valueIndex ? '40px' : '-40px',
          }}
          data-orientation={orientation}
          key={item.id}
          value={item.id}
        >
          {item.content}
        </S.Content>
      ))}
    </S.Root>
  )
}
