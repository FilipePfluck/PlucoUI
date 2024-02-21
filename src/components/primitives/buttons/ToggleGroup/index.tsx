import {
  ToggleGroupRootProps as ArkToggleGroupProps,
  HTMLArkProps,
} from '@ark-ui/react'

import * as S from './styles'

export type ToggleProps = HTMLArkProps<'button'> & {
  disabled?: boolean
  id: string
  'aria-label': string
}

interface ToggleGroupProps extends ArkToggleGroupProps {
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
