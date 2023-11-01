import { SwitchProps as ArkSwitchProps } from '@ark-ui/react'

import * as S from './styles'

interface SwitchProps extends ArkSwitchProps {
  label?: string
}

export const Switch = ({ label, ...props }: SwitchProps) => {
  return (
    <S.Root {...props}>
      <S.Control>
        <S.Thumb />
      </S.Control>
      {label && <S.Label>{label}</S.Label>}
    </S.Root>
  )
}
