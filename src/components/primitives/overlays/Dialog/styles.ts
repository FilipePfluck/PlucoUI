import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Dialog } from '@ark-ui/react'

export const Overlay = styled(
  Dialog.Backdrop,
  cva({
    base: {
      bg: 'rgb(0, 0, 0, 0.4)',
      position: 'fixed',
      inset: '0px',
      _dataOpen: {
        animation: 'fadeIn',
      },
      _dataClosed: {
        animation: 'fadeOut',
      },
    },
  }),
)

export const Content = styled(
  Dialog.Content,
  cva({
    base: {
      position: 'fixed',
      center: 'absolute',

      display: 'flex',
      flexDirection: 'column',
      gap: '4',

      bg: 'bg.card',
      rounded: 'lg',
      boxShadow: 'md',
      p: '6',

      w: '90vw',
      maxW: '450px',
      maxH: '85vh',

      _focus: {
        outline: 'none',
      },

      "&[data-state='open']": {
        animation: 'openModal',
      },
      "&[data-state='closed']": {
        animation: 'closeModal',
      },
    },
  }),
)

export const Header = styled('header', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})

export const Title = styled(Dialog.Title, {
  base: {
    textStyle: 'headingSm',
    color: 'fg',
  },
})

export const Description = styled(Dialog.Description, {
  base: {
    textStyle: 'textMd',
    color: 'fg.subtle',
  },
})

export const CloseButton = styled(
  Dialog.CloseTrigger,
  cva({
    base: {
      position: 'absolute',
      top: '16px',
      right: '16px',
    },
  }),
)
