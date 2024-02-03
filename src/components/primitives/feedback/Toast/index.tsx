import { createToaster } from '@ark-ui/react'
import * as S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { X } from 'lucide-react'

const [Toaster, toast] = createToaster({
  placement: 'bottom-end',
  render(toast) {
    return (
      <S.Root>
        <S.Title>{toast.title}</S.Title>
        <S.Description>{toast.description}</S.Description>
        <S.CloseTrigger asChild>
          <IconButton size="sm" intent="ghost" aria-label="close">
            <X size={18} strokeWidth={1.5} />
          </IconButton>
        </S.CloseTrigger>
      </S.Root>
    )
  },
})

export { Toaster, toast }
