import { HTMLArkProps } from '@ark-ui/react'
import S, { Group } from './styles'

type RadioItemProps = HTMLArkProps<'label'> & {
  id: string
  label: string
}

interface RadioGroupProps {
  orientation?: 'vertical' | 'horizontal'
  labelOrientation?: 'vertical' | 'horizontal'
  label?: string
  items: RadioItemProps[]
}

export const RadioGroup = ({
  items,
  label,
  orientation = 'vertical',
  labelOrientation = 'vertical',
}: RadioGroupProps) => {
  return (
    <S.Root orientation={labelOrientation}>
      {label && <S.Label>{label}</S.Label>}
      <Group orientation={orientation}>
        {items.map(({ id, label }) => {
          return (
            <S.Item
              key={id}
              value={label}
              id={id}
              data-testid={`radio-${id}`}
              aria-labelledby={`label-${id}`}
              className="group"
            >
              <S.ItemControl aria-hidden="false">
                <S.ItemHiddenInput />
              </S.ItemControl>
              <S.ItemText id={`label-${id}`}>{label}</S.ItemText>
            </S.Item>
          )
        })}
      </Group>
    </S.Root>
  )
}
