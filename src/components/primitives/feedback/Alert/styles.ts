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
        borderColor: 'border.brand.subtle',
      },
      secondary: {
        bg: 'bg.surface',
        borderColor: 'border.subtle',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'border.danger.subtle',
        '& *::selection': {
          bg: 'bg.danger.selection !important',
          color: 'fg.danger.important',
        },
      },
      success: {
        bg: 'bg.success.subtle',
        borderColor: 'border.success.subtle',
        '& *::selection': {
          bg: 'bg.success.selection !important',
          color: 'fg.success.important',
        },
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
      success: {
        color: 'fg.success',
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
        iconColor: 'var(--colors-fg-brand)',
      },
      secondary: {
        iconColor: 'var(--colors-fg)',
      },
      danger: {
        iconColor: 'var(--colors-fg-danger)',
      },
      success: {
        iconColor: 'var(--colors-fg-success)',
      },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})
