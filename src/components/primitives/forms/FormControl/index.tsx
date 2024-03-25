import { Collapsible, ark } from '@ark-ui/react'

import * as S from './styles'
import { ComponentPropsWithRef } from 'react'
import { SystemStyleObject } from '@pandacss/dev'
import { Label } from '../Label'

type FormControlProps = ComponentPropsWithRef<'div'> & {
  id: string
  label: string
  isRequired?: boolean
  errorMessage?: string
  helperMessage?: string
  css?: SystemStyleObject
}

export const FormControl = ({
  id,
  label,
  isRequired = false,
  errorMessage,
  helperMessage,
  children,
  ...props
}: FormControlProps) => {
  const showHelperMessage = !errorMessage && helperMessage

  const describedByHelperMessage = showHelperMessage
    ? `${id}-helper-message`
    : ''

  const describedByErrorMessage = errorMessage ? `${id}-error-message` : ''

  return (
    <S.Root {...props}>
      <Label isRequired={isRequired} htmlFor={`${id}-form-element`}>
        {label}
      </Label>

      <ark.div
        asChild
        id={`${id}-form-element`}
        aria-required={isRequired}
        aria-invalid={!!errorMessage}
        aria-describedby={`${describedByHelperMessage} ${describedByErrorMessage}`}
      >
        {children}
      </ark.div>

      <Collapsible.Root open={!!showHelperMessage || !!errorMessage}>
        <S.MessageContainer>
          {showHelperMessage && (
            <S.HelperMessage id={`${id}-helper-message`}>
              {helperMessage}
            </S.HelperMessage>
          )}
          {errorMessage && (
            <S.ErrorMessage id={`${id}-error-message`} role="alert">
              {errorMessage}
            </S.ErrorMessage>
          )}
        </S.MessageContainer>
      </Collapsible.Root>
    </S.Root>
  )
}
