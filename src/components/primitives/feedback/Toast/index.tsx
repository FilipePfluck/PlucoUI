/* import { Toaster } from '@ark-ui/react'
import S from './styles'
import { IconButton } from '../../buttons/IconButton'
import { X } from 'lucide-react'

type ToastProps = {
  toaster: CreateToasterReturn
}

const Toast = () => (
  <Toaster toaster={toaster}>
    {(toast) => (
      <S.Root>
        <S.Title>{toast.title}</S.Title>
        <S.Description>{toast.description}</S.Description>
        <S.CloseTrigger asChild>
          <IconButton size="sm" intent="ghost" aria-label="close">
            <X size={18} strokeWidth={1.5} />
          </IconButton>
        </S.CloseTrigger>
      </S.Root>
    )}
  </Toaster>
)

export { Toast }
 */
