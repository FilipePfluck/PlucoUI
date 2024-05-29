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
    display: 'flex',
    flexDirection: 'column',
    gap: '4',
    backgroundColor: 'bg.surface',
    boxShadow: 'lg',
    position: 'fixed',
    p: '6',
    top: 0,
    bottom: 0,
    width: 'var(--drawer-size)',
    transition: '0.2s',

    _focus: {
      outline: 'none',
    },
    _dataOpen: {
      transform: 'translate3d(0,0,0)',
      opacity: 1,
    },
    _dataClosed: {
      transform: 'var(--drawer-transform)',
      opacity: 0,
    },
  },
  variants: {
    side: {
      top: {
        left: 0,
        right: 0,
        w: '100%',
        height: 'var(--drawer-size)',
        bottom: 'auto',
        '--drawer-transform': 'translate3d(0,-100%,0)',
      },
      right: {
        right: 0,
        '--drawer-transform': 'translate3d(100%,0,0)',
      },
      bottom: {
        left: 0,
        right: 0,
        w: '100%',
        height: 'var(--drawer-size)',
        top: 'auto',
        '--drawer-transform': 'translate3d(0,100%,0)',
      },
      left: {
        left: 0,
        '--drawer-transform': 'translate3d(-100%,0,0)',
      },
    },
    size: {
      sm: {
        '--drawer-size': '240px',
      },
      md: {
        '--drawer-size': '320px',
      },
      lg: {
        '--drawer-size': '480px',
      },
    },
  },
  defaultVariants: {
    side: 'right',
    size: 'md',
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
