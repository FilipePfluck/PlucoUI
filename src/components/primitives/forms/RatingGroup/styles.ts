import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { RatingGroup } from '@ark-ui/react'

export default Pluco(RatingGroup, {
  Root: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      gap: '1',
    },
  }),
  Item: cva({
    base: {
      outlineColor: 'border.ring',
      transition: '0.2s',
      '&:not([data-readonly])': {
        cursor: 'pointer',
      },
      '&[data-highlighted="true"]': {
        color: 'bg.brand',
        iconColor: 'bg.brand',
      },
    },
  }),
})
