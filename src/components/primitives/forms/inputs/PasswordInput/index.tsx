'use client'

import { Lock, Eye, EyeOff } from 'lucide-react'
import { Input, InputProps } from '../Input'
import { useState } from 'react'

import * as S from './styles'

export const PasswordInput = ({ ...props }: InputProps) => {
  const [shouldShowPassowrd, setShouldShowPassword] = useState(false)

  const buttonAriaLabel = shouldShowPassowrd
    ? "Don't show the password"
    : 'Show the password'

  return (
    <Input
      placeholder="Password"
      type={shouldShowPassowrd ? 'text' : 'password'}
      role="textbox"
      startElement={<Lock strokeWidth={1.5} size={16} />}
      endElement={
        <S.InputIconButton
          aria-label={buttonAriaLabel}
          onClick={() => setShouldShowPassword((state) => !state)}
          type="button"
          intent="link"
          size="sm"
        >
          {shouldShowPassowrd ? (
            <EyeOff strokeWidth={1.5} size={16} />
          ) : (
            <Eye strokeWidth={1.5} size={16} />
          )}
        </S.InputIconButton>
      }
      {...props}
    />
  )
}
