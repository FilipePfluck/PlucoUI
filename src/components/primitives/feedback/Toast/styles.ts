import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Toast } from '@ark-ui/react'

export default Pluco(Toast, {
  Root: cva({
    base: {
      bg: 'bg.surface',
      rounded: 'md',
      shadow: 'xl',
      minW: '60',
      p: '4',
      position: 'relative',

      _open: {
        animation: 'slideInToast',
      },

      _closed: {
        animation: 'slideOutToast',
      },
    },
  }),
  Title: cva({
    base: {
      color: 'fg.important',
      textStyle: 'headingXs',
    },
  }),
  Description: cva({
    base: {
      color: 'fg',
      textStyle: 'bodySm',
    },
  }),
  CloseTrigger: cva({
    base: {
      position: 'absolute',
      top: '3',
      right: '3',
    },
  }),
})
