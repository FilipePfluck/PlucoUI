import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { SegmentGroup } from '@ark-ui/react'

import { tabsListBaseStyles, tabsListItemBaseStyles } from '@/panda/common/tabs'

export default Pluco(SegmentGroup, {
  Root: cva({
    base: {
      ...tabsListBaseStyles,
    },
  }),
  Indicator: cva({
    base: {
      bg: 'border.brand',

      _horizontal: {
        height: '2px',
        width: 'var(--width)',
        bottom: '0',
      },
      _vertical: {
        width: '2px',
        height: 'var(--height)',
        right: '0',
      },
    },
  }),
  Item: cva({
    base: {
      ...tabsListItemBaseStyles,
    },
  }),
})
