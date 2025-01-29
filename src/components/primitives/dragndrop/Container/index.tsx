import React, { ForwardedRef, ReactNode, forwardRef } from 'react'
import { GripVertical } from 'lucide-react'

import * as S from './styles'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  children: ReactNode
  isOver?: boolean
  // eslint-disable-next-line
  handleProps: React.HTMLAttributes<any>
}

export const ContainerComponent = (
  { label, children, handleProps, ...props }: ContainerProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  return (
    <S.StyledContainer ref={ref} {...props}>
      <S.Header>
        {label}
        <S.Handle {...handleProps}>
          <GripVertical size={16} />
        </S.Handle>
      </S.Header>
      <S.Grid>{children}</S.Grid>
    </S.StyledContainer>
  )
}

export const Container = forwardRef(ContainerComponent)
