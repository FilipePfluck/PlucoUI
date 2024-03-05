import { styled } from '@/styled-system/jsx'

export const Root = styled('div', {
  base: {
    display: 'flex',
    center: 'flex',

    minW: '28px',
    p: '1',
    rounded: 'md',
    shadow: 'sm',
    borderWidth: '1px',
    borderStyle: 'solid',
    textStyle: 'bodyXs',
  },
  variants: {
    intent: {
      primary: {
        bg: 'bg.brand.subtle',
        borderColor: 'bg.brand.solid',
        color: 'fg.brand',
      },
      secondary: {
        bg: 'bg.card',
        borderColor: 'border',
        color: 'fg',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'border.danger',
        color: 'fg.danger',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})
