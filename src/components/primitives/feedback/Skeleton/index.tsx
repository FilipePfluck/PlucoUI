import { HTMLStyledProps } from '@/styled-system/types'
import { HeadingTextStyles, TextTextStyles } from '@/panda/textStyles'
import { ReactNode, forwardRef } from 'react'

import * as S from './styles'

type SkeletonProps = HTMLStyledProps<'div'> & {
  children?: ReactNode
  isLoaded?: boolean
  variant?: HeadingTextStyles | TextTextStyles
  fallbackNoOfLines?: number
}

export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (props, ref) => {
    const { isLoaded, children, fallbackNoOfLines, ...rest } = props

    if (isLoaded) {
      return children
    }

    if (fallbackNoOfLines) {
      return (
        <S.Container>
          {Array.from({ length: fallbackNoOfLines }).map((_, i) => (
            <S.Root key={i} w={i % 2 === 0 ? '80%' : '70%'} {...rest} />
          ))}
        </S.Container>
      )
    }

    return (
      <S.Root ref={ref} {...rest}>
        {children}
      </S.Root>
    )
  },
)

Skeleton.displayName = 'Skeleton'
