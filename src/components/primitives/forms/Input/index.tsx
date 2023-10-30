import { ForwardedRef, ReactNode, forwardRef } from 'react'

import * as S from './styles'
import { SimpleSpread } from '@/types/utils'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ExtraInputProps {
  icon?: ReactNode
  leftElement?: ReactNode
  rightElement?: ReactNode
  size?: 'sm' | 'md'
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
  roundedCorners?: 'none' | 'right' | 'left' | 'all'
}

export type InputProps = SimpleSpread<HTMLStyledProps<'input'>, ExtraInputProps>

const InputComponent = (
  { icon, leftElement, rightElement, size, width, ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <S.InputContainer size={size} width={width} className="group">
      {icon && <S.InputIcon>{icon}</S.InputIcon>}
      {leftElement}
      <S.Input size={size} ref={ref} {...props} />
      {rightElement}
    </S.InputContainer>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputComponent)
