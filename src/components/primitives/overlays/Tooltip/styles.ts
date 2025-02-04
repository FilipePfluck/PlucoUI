import { Tooltip } from '@ark-ui/react'

import { slideAnimation } from '@/panda/common/menus'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

export default Pluco(Tooltip, {
  Content: cva({
    base: {
      rounded: 'md',
      px: '4',
      py: '2',
      fontSize: 'sm',
      color: 'fg',
      bg: 'bg.surface',
      boxShadow: 'sm',
      userSelect: 'none',

      ...slideAnimation,
    },
  }),
  Arrow: cva({
    base: {
      '--arrow-background': 'colors.bg.surface',
      '--arrow-size': '10px',
    },
  }),
})
