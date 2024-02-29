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
        '& svg': { h: '4', w: '4' },
        h: '8',
        w: '8',
      },
      md: {
        p: '2',
        gap: '2',
        fontSize: 'sm',
        '& svg': { h: '5', w: '5' },
        h: '10',
        w: '10',
      },
      lg: {
        p: '3',
        gap: '3',
        fontSize: 'md',
        '& svg': { h: '6', w: '6' },
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
