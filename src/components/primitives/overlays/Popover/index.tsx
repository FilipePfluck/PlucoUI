import {
  PopoverArrowTip,
  PopoverContentProps,
  PopoverPositioner,
  Portal,
} from '@ark-ui/react'

import * as S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { X } from 'lucide-react'

type PopoverProps = PopoverContentProps &
  S.ContentVariants & {
    title?: string
    description?: string
  }

const PopoverHeader = ({
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

export const PopoverContent = ({
  children,
  width,
  title,
  description,
  ...props
}: PopoverProps) => {
  return (
    <Portal>
      <PopoverPositioner>
        <S.Content width={width} {...props}>
          <PopoverHeader title={title} description={description} />
          {children}
          <S.CloseButton asChild>
            <IconButton intent="ghost" aria-label="close">
              <X size={16} />
            </IconButton>
          </S.CloseButton>
          <S.Arrow>
            <PopoverArrowTip />
          </S.Arrow>
        </S.Content>
      </PopoverPositioner>
    </Portal>
  )
}
