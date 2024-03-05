import { styled } from '@/styled-system/jsx'
import { ark } from '@ark-ui/react'

export const Root = styled('div', {
  base: {
    display: 'flex',
    align: 'center',
    gap: '3',
    p: '4',
    rounded: 'md',
    shadow: 'md',
    borderWidth: '1px',
  },
  variants: {
    intent: {
      primary: {
        bg: 'bg.brand.subtle',
        borderColor: 'border.brand',
      },
      secondary: {
        bg: 'bg.card',
        borderColor: 'border',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'border.danger',
      },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})

export const Content = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1',
  },
})

export const Title = styled('h4', {
  base: {
    color: 'fg',
    textStyle: 'headingXs',
  },

  variants: {
    intent: {
      primary: {
        color: 'fg.brand',
      },
      secondary: {
        color: 'fg',
      },
      danger: {
        color: 'fg.danger',
      },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})

export const Description = styled('p', {
  base: {
    color: 'fg',
    textStyle: 'bodyMd',
  },
})

export const Icon = styled(ark.div, {
  base: {
    color: 'fg',
    w: '6',
    h: '6',
  },
  variants: {
    intent: {
      primary: {
        '& svg': {
          stroke: 'fg.brand',
        },
      },
      secondary: {
        '& svg': {
          stroke: 'fg',
        },
      },
      danger: {
        '& svg': {
          stroke: 'fg.danger',
        },
      },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})
