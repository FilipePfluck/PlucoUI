import { SystemStyleObject } from '@/styled-system/types'
import { ComponentPropsWithRef, ElementType } from 'react'

export type WithCss<T> = T & {
  css?: SystemStyleObject | SystemStyleObject[] | undefined
}

export type StyledElement<T extends ElementType> = WithCss<
  ComponentPropsWithRef<T>
>
