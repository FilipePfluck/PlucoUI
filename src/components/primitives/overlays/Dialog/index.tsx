import {
  Dialog,
  Portal,
  DialogContentProps as ArkDialogProps,
} from '@ark-ui/react'

import * as S from './styles'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import { IconButton } from '../../buttons/IconButton'

type DialogContentProps = ArkDialogProps & {
  title?: string
  description?: string
  children?: ReactNode
}

const DialogHeader = ({
  title,
  description,
}: {
  title?: string
  description?: string
}) => {
  return (
    <>
      {(title || description) && (
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </S.Header>
      )}
    </>
  )
}

export const DialogContent = ({
  title,
  description,
  children,
  ...props
}: DialogContentProps) => {
  return (
    <Portal>
      <S.Overlay />
      <Dialog.Container>
        <S.Content {...props}>
          <DialogHeader title={title} description={description} />
          {children}
          <S.CloseButton asChild>
            <IconButton aria-label="Close" intent="ghost" size="sm">
              <X size={16} />
            </IconButton>
          </S.CloseButton>
        </S.Content>
      </Dialog.Container>
    </Portal>
  )
}
