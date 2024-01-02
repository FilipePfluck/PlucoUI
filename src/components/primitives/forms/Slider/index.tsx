import { SliderProps as ArkSliderProps } from '@ark-ui/react'

import * as S from './styles'

type SliderProps = ArkSliderProps & {
  label?: string
}

export const Slider = ({ label, ...props }: SliderProps) => {
  const value = props.value || props.defaultValue || [0]

  return (
    <S.Root {...props}>
      <S.Label>{label}</S.Label>
      <S.Control>
        <S.Track>
          <S.Range />
        </S.Track>
        {value.map((_, i) => (
          <S.Thumb key={i} index={i} />
        ))}
      </S.Control>
    </S.Root>
  )
}
