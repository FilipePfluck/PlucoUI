import { SliderRootProps as ArkSliderProps } from '@ark-ui/react'

import S from './styles'

type SliderProps = ArkSliderProps & {
  label?: string
  markers?: number[]
}

export const Slider = ({ label, markers = [], ...props }: SliderProps) => {
  const value = props.value || props.defaultValue || [0]

  return (
    <S.Root
      thumbAlignment="center"
      thumbSize={{ width: 4, height: 4 }}
      {...props}
    >
      <S.Label>{label}</S.Label>
      <S.Control>
        <S.Track>
          <S.Range />
        </S.Track>
        {value.map((_, i) => (
          <S.Thumb key={i} index={i} />
        ))}
      </S.Control>
      <S.MarkerGroup>
        {markers.map((value) => (
          <S.Marker key={value} value={value}>
            {value}
          </S.Marker>
        ))}
      </S.MarkerGroup>
    </S.Root>
  )
}
