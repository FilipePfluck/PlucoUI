import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Steps } from '@ark-ui/react'

export default Pluco(Steps, {
  Root: cva({
    base: {
      display: 'flex',
      w: 'full',
      flexDir: 'column',
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
    },
  }),
  Separator: cva({
    base: {
      bg: 'border',
      flex: '1',
      h: '0.5',
    },
  }),
  Content: cva({}),
  CompletedContent: cva({}),
})
