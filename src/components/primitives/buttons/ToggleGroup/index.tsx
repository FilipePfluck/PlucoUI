import { ToggleGroupRootProps as ArkToggleGroupProps } from '@ark-ui/react'

import * as S from './styles'
import { ComponentPropsWithRef } from 'react'
import { SystemStyleObject } from '@pandacss/dev'

export type ToggleProps = ComponentPropsWithRef<'button'> & {
  id: string
  'aria-label': string
  css?: SystemStyleObject
}

interface ToggleGroupProps extends ArkToggleGroupProps {
  orientation?: 'vertical' | 'horizontal'
  items: ToggleProps[]
  css?: SystemStyleObject
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
