import { styled } from '@/styled-system/jsx'
import { IconButton } from '../../buttons/IconButton'

export const InputIconButton = styled(IconButton, {
  base: {
    color: 'border.brand',
    '.group:has(:disabled) &': {
      color: 'fg.muted',
    },
    '.group:has([aria-invalid="true"]) &': {
      color: 'border.danger',
    },
    ml: 'auto',
  },
})
