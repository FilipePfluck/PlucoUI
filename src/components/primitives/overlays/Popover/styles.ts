import { Popover } from '@ark-ui/react'

import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'

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

export const Content = styled(Popover.Content, contentStyles)

export type ContentVariants = RecipeVariantProps<typeof contentStyles>

export const Arrow = styled(Popover.Arrow, {
  base: {
    '--arrow-background': 'colors.bg.surface',
    '--arrow-size': '10px',
  },
})

export const CloseButton = styled(Popover.CloseTrigger, {
  base: {
    position: 'absolute',
    top: '16px',
    right: '16px',
  },
})

export const Header = styled('header', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})

export const Title = styled(Popover.Title, {
  base: {
    textStyle: 'headingSm',
    color: 'fg.important',
  },
})

export const Description = styled(Popover.Description, {
  base: {
    textStyle: 'bodyMd',
    color: 'fg',
  },
})
