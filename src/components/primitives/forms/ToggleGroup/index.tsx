import { ToggleGroupRootProps as ArkToggleGroupProps } from '@ark-ui/react'

import * as S from './styles'
import { StyledElement, WithCss } from '@/types/withCss'

export type ToggleProps = StyledElement<'button'> & {
  id: string
  'aria-label': string
}

interface ToggleGroupProps extends WithCss<ArkToggleGroupProps> {
  orientation?: 'vertical' | 'horizontal'
  items: ToggleProps[]
}

export const ToggleGroup = ({
  orientation,
  items,
  ...props
}: ToggleGroupProps) => {
  return (
    <S.Root orientation={orientation} {...props}>
      {items.map(({ id, children, ...props }) => (
        <S.Toggle key={id} {...props} value={id}>
          {children}
        </S.Toggle>
      ))}
    </S.Root>
  )
}
