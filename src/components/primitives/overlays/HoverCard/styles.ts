import { HoverCard } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/common/menus'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

export default Pluco(HoverCard, {
  Content: cva({
    base: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      gap: '4',
      p: '6',
      maxH: '85vh',
      w: '64',

      ...menuContentBaseStyles,
      ...slideAnimation,

      '&[hidden]': {
        opacity: 0,
        visibility: 'hidden',
      },

      transition: '0.2s',
    },
  }),
  Arrow: cva({
    base: {
      '--arrow-background': 'colors.bg.surface',
      '--arrow-size': '10px',
    },
  }),
})
