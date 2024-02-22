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
        borderColor: 'border.success',
      },
      info: {
        bg: 'bg.info.subtle',
        borderColor: 'border.info',
      },
      warning: {
        bg: 'bg.warning.subtle',
        borderColor: 'border.warning',
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
    color: 'fg',
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
        '& svg': {
          stroke: 'fg.brand',
        },
      },
      secondary: {
        '& svg': {
          stroke: 'fg',
        },
      },
      success: {
        '& svg': {
          stroke: 'fg.success',
        },
      },
      info: {
        '& svg': {
          stroke: 'fg.info',
        },
      },
      warning: {
        '& svg': {
          stroke: 'fg.warning',
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
