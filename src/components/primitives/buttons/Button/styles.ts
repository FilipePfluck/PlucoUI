import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

const buttonStyles = cva({
  base: {
    display: 'flex',
    center: 'flex',
    rounded: 'md',
    transition: 'background border-color 0.2s',
    cursor: 'pointer',
    borderWidth: '2px',
    borderStyle: 'solid',
    _disabled: {
      bg: {
        base: 'bg.disabled',
        _hover: 'bg.disabled',
      },
      color: 'white',
      borderColor: {
        base: 'bg.disabled',
        _hover: 'bg.disabled',
      },
      cursor: 'not-allowed',
    },
  },
  variants: {
    intent: {
      primary: {
        bg: {
          base: 'bg.brand',
          _hover: 'bg.brand.hovered',
        },
        color: 'white',
        borderColor: {
          base: 'bg.brand',
          _hover: 'bg.brand.hovered',
        },
      },
      secondary: {
        bg: {
          base: 'transparent',
          _hover: 'bg.card.hovered',
        },
        borderColor: 'border',
        color: 'fg.subtle',
      },
      danger: {
        bg: {
          base: 'bg.danger',
          _hover: 'bg.danger.hovered',
        },
        borderColor: {
          base: 'bg.danger',
          _hover: 'bg.danger.hovered',
        },
        color: 'white',
      },
    },

    size: {
      sm: {
        p: '2',
        gap: '2',
        fontSize: 'sm',
      },
      md: {
        p: '3',
        gap: '3',
        fontSize: 'md',
      },
      lg: {
        p: '4',
        gap: '4',
        fontSize: 'lg',
      },
    },

    full: {
      true: {
        w: 'full',
      },
      false: {
        w: 'max-content',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
    full: false,
  },
})

export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>

export const ButtonContainer = styled('button', buttonStyles)
