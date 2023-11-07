import { PinInputProps as ArkPinInputProps } from '@ark-ui/react'

import * as S from './styles'

type PinInputProps = ArkPinInputProps & {
  label?: string
  length?: number
}

export const PinInput = ({ label, length = 5, ...props }: PinInputProps) => {
  function range(N: number) {
    return Array.from({ length: N }, (_, index) => index)
  }

  return (
    // property mask from PinInput.Root is conflicting
    // with property mask from styled component
    // @ts-ignore
    <S.Root {...props}>
      {label && <S.Label>{label}</S.Label>}
      <S.Control>
        {range(length).map((id) => (
          <S.Input key={id} index={id} />
        ))}
      </S.Control>
    </S.Root>
  )
}
