import { Star } from 'lucide-react'
import { RatingGroupRootProps as ArkRatingGroupProps } from '@ark-ui/react'

import S from './styles'

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
        <S.Context>
          {({ items }) =>
            items.map((item) => (
              <S.Item key={item} index={item}>
                <S.ItemContext>
                  {({ highlighted }) => {
                    if (highlighted)
                      return (
                        <Star
                          fill="var(--colors-border-brand)"
                          color="var(--colors-border-brand)"
                        />
                      )
                    return (
                      <Star
                        fill="var(--colors-border)"
                        color="var(--colors-border)"
                      />
                    )
                  }}
                </S.ItemContext>
              </S.Item>
            ))
          }
        </S.Context>
        <S.HiddenInput />
      </S.Control>
    </S.Root>
  )
}
