import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Splitter } from '@ark-ui/react'

export default Pluco(Splitter, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),
  Panel: cva({
    base: {
      borderWidth: '1px',
      borderColor: 'border',
      bg: 'bg.surface',
      rounded: 'md',
      color: 'fg',
      display: 'flex',
      align: 'center',
      justify: 'center',
    },
  }),
  ResizeTrigger: cva({
    base: {
      rounded: 'full',
      outline: '0',
      background: 'border',

      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',

      _horizontal: {
        minWidth: '1.5',
        margin: 'min(1rem, 20%) 0',
      },
      _vertical: {
        minHeight: '1.5',
        margin: '0 min(1rem, 20%)',
      },
    },
  }),
})
