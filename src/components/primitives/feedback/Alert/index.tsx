import * as S from './styles'
import { ReactNode } from 'react'

type AlertProps = {
  title: string
  description?: string
  icon?: ReactNode
  intent?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'
}

export const Alert = ({ title, description, icon, intent }: AlertProps) => {
  return (
    <S.Root intent={intent}>
      {/* TODO - figure out why icon colors isn't changing  */}
      {icon && <S.Icon intent={intent}>{icon}</S.Icon>}
      <S.Content>
        <S.Title intent={intent}>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Content>
    </S.Root>
  )
}
