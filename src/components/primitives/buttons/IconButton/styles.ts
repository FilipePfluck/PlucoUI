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
        ...ghostButtonBaseStyles,
      },
      link: {
        ...linkButtonBaseStyles,
      },
    },

    size: {
      sm: {
        p: '1',
        gap: '1',
        fontSize: 'xs',
        iconSize: '16px',
        h: '8',
        w: '8',
      },
      md: {
        p: '2',
        gap: '2',
        fontSize: 'sm',
        iconSize: '20px',
        h: '10',
        w: '10',
      },
      lg: {
        p: '3',
        gap: '3',
        fontSize: 'md',
        iconSize: '24px',
        h: '12',
        w: '12',
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
