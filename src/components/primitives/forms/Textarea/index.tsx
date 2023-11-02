import { ForwardedRef, forwardRef } from 'react'

import * as S from './styles'
import { SimpleSpread } from '@/types/utils'
import { HTMLStyledProps } from '@/styled-system/jsx'

interface ExtraTextAreaProps {
  // TODO use panda variant props here
  size?: 'sm' | 'md'
  width?: 'auto' | 'sm' | 'md' | 'lg' | 'full'
}

export type TextAreaProps = SimpleSpread<
  HTMLStyledProps<'textarea'>,
  ExtraTextAreaProps
>

const TextAreaComponent = (
  { size, width, ...props }: TextAreaProps,
  ref: ForwardedRef<HTMLTextAreaElement>,
) => {
  return <S.TextareaContainer size={size} width={width} ref={ref} {...props} />
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  TextAreaComponent,
)
