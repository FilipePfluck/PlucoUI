import { styled } from '@/styled-system/jsx'
import { HoverCard } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'

export const Content = styled(HoverCard.Content, {
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
})

export const Arrow = styled(HoverCard.Arrow, {
  base: {
    '--arrow-background': 'colors.bg.card',
    '--arrow-size': '10px',
  },
})
