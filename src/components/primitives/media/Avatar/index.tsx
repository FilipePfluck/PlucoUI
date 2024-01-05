import { AvatarProps as ArkAvatarProps } from '@ark-ui/react'
import { User } from 'lucide-react'

import * as S from './styles'

type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  name?: string
  src: string
  fallback?: 'initials' | 'icon'
} & ArkAvatarProps

export const Avatar = ({
  src,
  size = 'md',
  name = '',
  fallback = 'initials',
}: AvatarProps) => {
  const [firstName, surname] = name?.split(' ')
  const initials = firstName.split('')[0] + surname.split('')[0]

  return (
    <S.Root size={size}>
      <S.Fallback size={size}>
        {fallback === 'initials' && !!name && initials}
        {(fallback === 'icon' || !name) && <User />}
      </S.Fallback>
      <S.Image size={size} src={src} alt={name} />
    </S.Root>
  )
}
