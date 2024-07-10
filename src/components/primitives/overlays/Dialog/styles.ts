import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Dialog } from '@ark-ui/react'

export default Pluco(Dialog, {
  Backdrop: cva({
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
  Content: cva({
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
  }),
  Title: cva({
    base: {
      textStyle: 'headingSm',
      color: 'fg.important',
    },
  }),
  Description: cva({
    base: {
      textStyle: 'headingSm',
      color: 'fg.important',
    },
  }),
  CloseTrigger: cva({
    base: {
      position: 'absolute',
      top: '16px',
      right: '16px',
    },
  }),
})

export const Header = styled('header', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})
