import { ProgressProps as ArkProgressProps } from '@ark-ui/react'

import * as S from './styles'

type ProgressProps = ArkProgressProps & {
  type?: 'circular' | 'linear'
  label?: string
}

export const Progress = ({
  type = 'linear',
  label,
  ...props
}: ProgressProps) => {
  return (
    <S.Root {...props}>
      {label && <S.Label>{label}</S.Label>}
      {type === 'linear' && (
        <S.Track>
          <S.Range />
        </S.Track>
      )}
      {type === 'circular' && (
        <S.Circle>
          <S.CircleTrack />
          <S.CircleRange />
        </S.Circle>
      )}
    </S.Root>
  )
}
