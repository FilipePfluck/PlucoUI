'use client'

import { Lock, Eye, EyeOff } from 'lucide-react'
import { Input, InputProps } from '../Input'
import { ForwardedRef, forwardRef, useState } from 'react'

import * as S from './styles'

const PasswordInputComponent = (
  { ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const [shouldShowPassowrd, setShouldShowPassword] = useState(false)

  const buttonAriaLabel = shouldShowPassowrd
    ? "Don't show the password"
    : 'Show the password'

  return (
    <Input
      placeholder="Password"
      type={shouldShowPassowrd ? 'text' : 'password'}
      icon={<Lock strokeWidth={1.5} size={16} />}
      rightElement={
        <S.InputIconButton
          aria-label={buttonAriaLabel}
          onClick={() => setShouldShowPassword((state) => !state)}
          type="button"
          intent="ghost"
          size="sm"
        >
          {shouldShowPassowrd ? (
            <EyeOff strokeWidth={1.5} size={16} />
          ) : (
            <Eye strokeWidth={1.5} size={16} />
          )}
        </S.InputIconButton>
      }
      ref={ref}
      {...props}
    />
  )
}

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  PasswordInputComponent,
)
