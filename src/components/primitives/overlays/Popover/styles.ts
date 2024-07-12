import { Popover } from '@ark-ui/react'

import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'
import { Pluco } from '@/pluco'

const contentStyles = cva({
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gap: '4',
    p: '6',
    maxH: '85vh',

    ...menuContentBaseStyles,
    ...slideAnimation,

    '&[hidden]': {
      opacity: 0,
      visibility: 'hidden',
    },

    transition: '0.2s',
  },
  variants: {
    width: {
      auto: {},
      sm: { w: '32' },
      md: { w: '64' },
      lg: { w: '80' },
      full: { w: 'full' },
    },
  },
  defaultVariants: {
    width: 'md',
  },
})

export type ContentVariants = RecipeVariantProps<typeof contentStyles>

export default Pluco(Popover, {
  Content: contentStyles,
  Arrow: cva({
    base: {
      '--arrow-background': 'colors.bg.surface',
      '--arrow-size': '10px',
    },
  }),
  CloseTrigger: cva({
    base: {
      position: 'absolute',
      top: '16px',
      right: '16px',
    },
  }),
  Title: cva({
    base: {
      textStyle: 'headingSm',
      color: 'fg.important',
    },
  }),
  Description: cva({
    base: {
      textStyle: 'bodyMd',
      color: 'fg',
    },
  }),
})

export const Header = styled('header', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})
