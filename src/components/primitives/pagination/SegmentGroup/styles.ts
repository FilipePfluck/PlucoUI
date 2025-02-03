import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { SegmentGroup } from '@ark-ui/react'

import {
  tabsIndicatorBaseStyles,
  tabsListBaseStyles,
  tabsListItemBaseStyles,
} from '@/panda/common/tabs'

export default Pluco(SegmentGroup, {
  Root: cva({
    base: {
      ...tabsListBaseStyles,
    },
  }),
  Indicator: cva({
    base: {
      ...tabsIndicatorBaseStyles,
    },
  }),
  Item: cva({
    base: {
      ...tabsListItemBaseStyles,
    },
  }),
})
