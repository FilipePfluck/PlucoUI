import { Star } from 'lucide-react'
import { RatingGroupProps as ArkRatingGroupProps } from '@ark-ui/react'

import * as S from './styles'

type RatingGroupProps = ArkRatingGroupProps & {
  label?: string
  count?: number
}

export const RatingGroup = ({
  count = 5,
  label,
  ...props
}: RatingGroupProps) => {
  return (
    <S.Root count={count} {...props}>
      {label && <S.Label>{label}</S.Label>}
      <S.Control>
        {({ items }) =>
          items.map((item) => (
            <S.Item key={item} index={item}>
              {({ isHighlighted }) => {
                if (isHighlighted)
                  return (
                    <Star
                      fill="var(--colors-brand)"
                      color="var(--colors-brand)"
                    />
                  )
                return (
                  <Star
                    fill="var(--colors-border)"
                    color="var(--colors-border)"
                  />
                )
              }}
            </S.Item>
          ))
        }
      </S.Control>
    </S.Root>
  )
}
