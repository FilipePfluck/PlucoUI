import { ComponentPropsWithRef } from 'react'
import * as S from './styles'
import { SystemStyleObject } from '@pandacss/dev'

type KbdProps = ComponentPropsWithRef<'code'> & {
  css?: SystemStyleObject
}

export const Code = ({ ...props }: KbdProps) => {
  return <S.Container {...props} />
}
