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
      success: {
        bg: 'bg.success.subtle',
        borderColor: 'bg.success',
      },
      info: {
        bg: 'bg.info.subtle',
        borderColor: 'bg.info',
      },
      warning: {
        bg: 'bg.warning.subtle',
        borderColor: 'bg.warning',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'bg.danger',
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
      success: {
        color: 'fg.success',
      },
      info: {
        color: 'fg.info',
      },
      warning: {
        color: 'fg.warning',
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
    color: 'fg.subtle',
    textStyle: 'textMd',
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
        color: 'fg.brand',
      },
      secondary: {
        color: 'fg',
      },
      success: {
        color: 'fg.success',
      },
      info: {
        color: 'fg.info',
      },
      warning: {
        color: 'fg.warning',
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
