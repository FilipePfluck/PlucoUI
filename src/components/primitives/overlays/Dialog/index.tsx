import {
  Dialog,
  Portal,
  DialogContentProps as ArkDialogProps,
} from '@ark-ui/react'

import S, { Header } from './styles'
import { X } from 'lucide-react'
import { ReactNode } from 'react'
import { IconButton } from '../../forms/buttons/IconButton'

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
        <Header>
          {title && <S.Title>{title}</S.Title>}
          {description && <S.Description>{description}</S.Description>}
        </Header>
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
      <S.Backdrop />
      <Dialog.Positioner>
        <S.Content {...props}>
          <DialogHeader title={title} description={description} />
          {children}
          <S.CloseTrigger asChild>
            <IconButton aria-label="Close" intent="ghost" size="sm">
              <X size={16} />
            </IconButton>
          </S.CloseTrigger>
        </S.Content>
      </Dialog.Positioner>
    </Portal>
  )
}
