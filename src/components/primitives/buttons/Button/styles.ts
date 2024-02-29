import { RecipeVariantProps, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

import {
  buttonBaseStyles,
  dangerButtonBaseStyles,
  primaryButtonBaseStyles,
  secondaryButtonBaseStyles,
  ghostButtonBaseStyles,
  linkButtonBaseStyles,
} from '../css.raw'

const buttonStyles = cva({
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
        ...ghostButtonBaseStyles,
      },
      link: {
        ...linkButtonBaseStyles,
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
