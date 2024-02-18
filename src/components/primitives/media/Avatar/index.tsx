import { AvatarRootProps as ArkAvatarProps } from '@ark-ui/react'
import { User } from 'lucide-react'

import * as S from './styles'

export type AvatarProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  name?: string
  src: string
  fallback?: 'initials' | 'icon'
  gradientBorder?: boolean
  status?: 'online' | 'idle' | 'doNotDisturb' | 'offline'
} & ArkAvatarProps

export const Avatar = ({
  src,
  size = 'md',
  name = '',
  fallback = 'initials',
  gradientBorder = false,
  status,
}: AvatarProps) => {
  const [firstName, surname] = name?.split(' ')
  const initials = firstName.split('')[0] + surname.split('')[0]

  return (
    <S.Background
      size={size}
      colorScheme={gradientBorder ? 'gradient' : 'gray'}
    >
      <S.Root size={size} gradientBorder={gradientBorder}>
        <S.Fallback size={size}>
          {fallback === 'initials' && !!name && initials}
          {(fallback === 'icon' || !name) && <User />}
        </S.Fallback>
        <S.Image size={size} src={src} alt={name} />
      </S.Root>
      {!!status && <S.StatusBadge status={status} size={size} />}
    </S.Background>
  )
}
