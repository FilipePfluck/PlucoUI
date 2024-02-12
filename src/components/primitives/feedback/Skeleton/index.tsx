import { HTMLStyledProps } from '@/styled-system/types'
import { HeadingTextStyles, TextTextStyles } from '@/panda/textStyles'
import { ReactNode, forwardRef } from 'react'

import * as S from './styles'

type SkeletonProps = HTMLStyledProps<'div'> & {
  children?: ReactNode
  isLoaded?: boolean
  variant?: HeadingTextStyles | TextTextStyles
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { isLoaded, children, ...rest } = props

    if (isLoaded) {
      return children
    }
    return (
      <S.Root ref={ref} {...rest}>
        {children}
      </S.Root>
    )
  },
)

Skeleton.displayName = 'Skeleton'
