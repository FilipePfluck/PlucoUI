import { ComponentPropsWithRef } from 'react'
import * as S from './styles'
import { SystemStyleObject } from '@pandacss/dev'

type KbdProps = ComponentPropsWithRef<'kbd'> & {
  css?: SystemStyleObject
}

export const Kbd = ({ ...props }: KbdProps) => {
  return <S.Container {...props} />
}
