import { HTMLStyledProps } from '@/styled-system/types'
import * as S from './styles'
import { ReactNode, forwardRef } from 'react'

type SkeletonProps = HTMLStyledProps<'div'> & {
  children?: ReactNode
  isLoaded?: boolean
  variant?:
    | 'headingLg'
    | 'headingMd'
    | 'headingSm'
    | 'headingXs'
    | 'textLg'
    | 'textMd'
    | 'textSm'
    | 'textXs'
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
