import { PinInputRootProps as ArkPinInputProps } from '@ark-ui/react'

import S from './styles'
import { WithCss } from '@/types/withCss'

type PinInputProps = WithCss<ArkPinInputProps> & {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  length?: number
}

export const PinInput = ({
  length = 5,
  size,
  'aria-invalid': ariaIvalid,
  ...props
}: PinInputProps) => {
  function range(N: number) {
    return Array.from({ length: N }, (_, index) => index)
  }

  return (
    // property mask from PinInput.Root is conflicting
    // with property mask from styled component
    // @ts-ignore
    <S.Root {...props}>
      <S.Control>
        {range(length).map((id) => (
          <S.Input aria-invalid={ariaIvalid} size={size} key={id} index={id} />
        ))}
      </S.Control>
    </S.Root>
  )
}
