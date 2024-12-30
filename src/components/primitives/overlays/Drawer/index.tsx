import { DialogContentProps, Portal } from '@ark-ui/react'

import S, { Header } from './styles'
import { IconButton } from '../../forms/buttons/IconButton'
import { X } from 'lucide-react'

export interface DrawerProps extends DialogContentProps {
  title?: string
  description?: string
  mode?: 'modal' | 'non-modal'
  side?: 'right' | 'left' | 'top' | 'bottom'
  size?: 'sm' | 'md' | 'lg'
}

const DrawerHeader = ({
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

export const DrawerContent = ({
  title,
  description,
  side,
  size,
  mode = 'modal',
  children,
  ...props
}: DrawerProps) => {
  return (
    <Portal>
      {mode === 'modal' && <S.Backdrop />}
      <S.Content
        {...(!description ? { 'aria-labeledby': undefined } : {})}
        side={side}
        size={size}
        {...props}
      >
        <DrawerHeader title={title} description={description} />
        {children}
        <S.CloseTrigger asChild>
          <IconButton aria-label="close" intent="ghost">
            <X size={16} />
          </IconButton>
        </S.CloseTrigger>
      </S.Content>
    </Portal>
  )
}
