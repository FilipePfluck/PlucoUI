import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Toast } from '@ark-ui/react'

export default Pluco(Toast, {
  Root: cva({
    base: {
      focusRing: 'outside',

      bg: 'bg.surface',
      rounded: 'md',
      shadow: 'xl',
      minW: '60',
      p: '4',
      position: 'relative',
      translate: 'var(--x) var(--y)',
      willChange: 'translate, opacity, scale',
      transition:
        'translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms',

      _open: {
        animation: 'slideInToast',
      },

      _closed: {
        animation: 'slideOutToast',
      },

      '&[data-type="error"]': {
        bg: 'bg.danger',
      },

      '&[data-type="success"]': {
        bg: 'bg.success',
      },
    },
  }),
  Title: cva({
    base: {
      color: 'fg.important',
      textStyle: 'headingXs',

      '[data-type="error"] &': {
        color: 'white',
      },

      '[data-type="success"] &': {
        color: 'white',
      },
    },
  }),
  Description: cva({
    base: {
      color: 'fg',
      textStyle: 'bodySm',

      '[data-type="error"] &': {
        color: 'white',
      },

      '[data-type="success"] &': {
        color: 'white',
      },
    },
  }),
  CloseTrigger: cva({
    base: {
      position: 'absolute',
      top: '3',
      right: '3',

      '[data-type="error"] &': {
        iconColor: 'white',
      },

      '[data-type="success"] &': {
        iconColor: 'white',
      },
    },
  }),
})
