import { Tooltip } from '@ark-ui/react'

import { styled } from '@/styled-system/jsx'
import { slideAnimation } from '@/panda/utils'

export const Content = styled(Tooltip.Content, {
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
})

export const Arrow = styled(Tooltip.Arrow, {
  base: {
    '--arrow-background': 'colors.bg.surface',
    '--arrow-size': '10px',
  },
})
