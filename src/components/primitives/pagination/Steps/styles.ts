import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Steps } from '@ark-ui/react'

export default Pluco(Steps, {
  Root: cva({
    base: {
      display: 'flex',
      w: 'full',
      flexDir: 'column',
      gap: '8',
    },
  }),
  List: cva({
    base: {
      display: 'flex',
      gap: '8',
      w: 'full',
    },
  }),
  Item: cva({
    base: {
      position: 'relative',
      display: 'flex',
      flex: '1 0 0',
      '&:last-of-type': {
        flex: 'initial',
        '& [data-part=separator]': {
          display: 'none',
        },
      },
      gap: '4',
      align: 'center',
    },
  }),
  Trigger: cva({
    base: {
      display: 'flex',
      gap: '2',
      align: 'center',
    },
  }),
  Indicator: cva({
    base: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: '0',
      borderRadius: 'full',
      fontWeight: 'medium',
      width: '10',
      height: '10',
      borderWidth: '1px',
      transition: '0.2s',

      _incomplete: {
        bg: 'bg.surface',
        borderColor: 'border',
      },
      _current: {
        bg: 'bg.brand.subtle',
        borderColor: 'border.brand.subtle',
        color: 'fg',
      },
      _complete: {
        bg: 'bg.brand',
        color: 'white',
        borderColor: 'border.brand',
      },
    },
  }),
  Separator: cva({
    base: {
      bg: 'border',
      flex: '1',
      h: '0.5',
      transition: '0.2s',

      _complete: {
        bg: 'border.brand',
      },
    },
  }),
  Content: cva({
    base: {
      display: 'flex',
    },
  }),
  CompletedContent: cva({}),
})
