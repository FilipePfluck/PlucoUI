import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { ark } from '@ark-ui/react'
import { RecipeVariantProps } from '@pandacss/types'

const rootStyles = cva({
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
        bg: 'bg.subtle',
        borderColor: 'border.subtle',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'border.danger.subtle',
      },
      success: {
        bg: 'bg.success.subtle',
        borderColor: 'border.success.subtle',
      },
    },
  },
  defaultVariants: {
    intent: 'secondary',
  },
})

export const Root = styled('div', rootStyles)

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

export type AlertVariants = RecipeVariantProps<typeof rootStyles>
