import { HTMLArkProps } from '@ark-ui/react'
import * as S from './styles'

type RadioItemProps = HTMLArkProps<'label'> & {
  id: string
  label: string
}

interface RadioButtonGroupProps {
  orientation?: 'vertical' | 'horizontal'
  labelOrientation?: 'vertical' | 'horizontal'
  label?: string
  items: RadioItemProps[]
}

export const RadioButtonGroup = ({
  items,
  label,
  orientation = 'vertical',
  labelOrientation = 'vertical',
}: RadioButtonGroupProps) => {
  return (
    <S.Root orientation={labelOrientation}>
      {label && <S.Label>{label}</S.Label>}
      <S.Group orientation={orientation}>
        {items.map(({ id, label, ...props }) => {
          return (
            <S.Item
              key={id}
              value={label}
              id={id}
              data-testid={`radio-${id}`}
              aria-labelledby={`label-${id}`}
              className="group"
              {...props}
            >
              <S.Control>
                <S.Text id={`label-${id}`}>{label}</S.Text>
              </S.Control>
            </S.Item>
          )
        })}
      </S.Group>
    </S.Root>
  )
}
