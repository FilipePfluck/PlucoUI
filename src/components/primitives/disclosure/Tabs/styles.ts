import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Tabs } from '@ark-ui/react'

import {
  tabsIndicatorBaseStyles,
  tabsListBaseStyles,
  tabsListItemBaseStyles,
} from '@/panda/common/tabs'

export default Pluco(Tabs, {
  Root: cva({
    base: {
      display: 'flex',
      position: 'relative',
      bg: 'bg.surface',
      boxShadow: 'lg',
      rounded: 'lg',
      w: 'full',
      maxW: 'max-content',
      _horizontal: {
        flexDirection: 'column',
      },
      _vertical: {
        flexDirection: 'row',
      },
    },
  }),
  List: cva({
    base: {
      ...tabsListBaseStyles,
    },
  }),
  Trigger: cva({
    base: {
      ...tabsListItemBaseStyles,
    },
  }),
  Indicator: cva({
    base: {
      ...tabsIndicatorBaseStyles,
    },
  }),
  Content: cva({
    base: {
      display: 'flex',
      center: 'flex',
      flexDir: 'column',
      fontSize: '96px',
      color: 'fg',
      opacity: 1,

      _horizontal: {
        px: '4',
        py: '8',
        minH: '60',
      },

      _vertical: {
        px: '8',
        py: '4',
      },

      transitionDuration: 'slow',

      _closed: {
        position: 'absolute',
        opacity: 0,
        visibility: 'hidden',

        _horizontal: {
          bottom: '0px',
          transform: 'translateX(var(--tab-hidden-distance-x))',
          w: 'full',
        },
        _vertical: {
          right: '0px',
          transform: 'translateY(var(--tab-hidden-distance-y))',
          h: 'full',
        },
      },
    },
  }),
})
