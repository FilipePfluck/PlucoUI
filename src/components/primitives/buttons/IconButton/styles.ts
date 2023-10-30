import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

import {
  buttonBaseStyles,
  dangerButtonBaseStyles,
  primaryButtonBaseStyles,
  secondaryButtonBaseStyles,
} from '../css.raw'

const iconButtonStyles = cva({
  base: {
    ...buttonBaseStyles,
  },
  variants: {
    intent: {
      primary: {
        ...primaryButtonBaseStyles,
      },
      secondary: {
        ...secondaryButtonBaseStyles,
      },
      danger: {
        ...dangerButtonBaseStyles,
      },
      ghost: {
        bg: {
          base: 'transparent',
          _hover: 'bg.card.hovered',
        },
        borderColor: 'transparent',
        color: 'fg.subtle',
      },
    },

    size: {
      sm: {
        p: '1',
        gap: '1',
        fontSize: 'xs',
      },
      md: {
        p: '2',
        gap: '2',
        fontSize: 'sm',
      },
      lg: {
        p: '3',
        gap: '3',
        fontSize: 'md',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
    size: 'md',
  },
})

export type IconButtonVariants = RecipeVariantProps<typeof iconButtonStyles>

export const IconButtonContainer = styled('button', iconButtonStyles)
