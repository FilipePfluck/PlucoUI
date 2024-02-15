import { ReactNode } from 'react'
import * as S from './styles'

type BadgeProps = {
  children?: ReactNode
  intent?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info'
}

export const Badge = ({ children, intent }: BadgeProps) => {
  return <S.Root intent={intent}>{children}</S.Root>
}
