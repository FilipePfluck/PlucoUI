import { ComponentPropsWithRef, useMemo } from 'react'
import { styled, type StyledComponent } from '@/styled-system/jsx'
import { SystemStyleObject } from '@pandacss/dev'
import { TextStylesTypes } from '@/panda/textStyles'

type As = 'p' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TextProps = {
  as?: As
  css?: SystemStyleObject
  textStyle?: TextStylesTypes
} & ComponentPropsWithRef<As>

export const Text = (props: TextProps) => {
  const { as = 'p', ...localProps } = props
  const Dynamic = useMemo(() => styled(as, {}) as StyledComponent<As>, [as])

  return <Dynamic {...localProps} />
}
