import { styled } from '@/styled-system/jsx'
import { Dialog } from '@ark-ui/react'

export const Overlay = styled(Dialog.Backdrop, {
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
})

export const Content = styled(Dialog.Content, {
  base: {
    position: 'fixed',
    center: 'absolute',

    display: 'flex',
    flexDirection: 'column',
    gap: '4',

    bg: 'bg.surface',
    rounded: 'lg',
    boxShadow: 'lg',
    p: '6',

    w: '90vw',
    maxW: '450px',
    maxH: '85vh',

    _focus: {
      outline: 'none',
    },

    transition: '0.2s',

    "&[data-state='open']": {
      opacity: '1',
      transform: 'translate(-50%, -50%) scale(1)',
    },
    "&[data-state='closed']": {
      opacity: '0',
      transform: 'translate(-50%, -48%) scale(.96)',
    },
  },
})

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
    color: 'fg.important',
  },
})

export const Description = styled(Dialog.Description, {
  base: {
    textStyle: 'bodyMd',
    color: 'fg',
  },
})

export const CloseButton = styled(Dialog.CloseTrigger, {
  base: {
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
})
