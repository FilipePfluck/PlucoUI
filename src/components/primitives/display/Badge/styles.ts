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
        borderColor: 'border.brand.subtle',
        color: 'fg.brand',
      },
      secondary: {
        bg: 'bg.subtle',
        borderColor: 'border.subtle',
        color: 'fg',
      },
      danger: {
        bg: 'bg.danger.subtle',
        borderColor: 'border.danger.subtle',
        color: 'fg.danger',
      },
      success: {
        bg: 'bg.success.subtle',
        borderColor: 'border.success.subtle',
        color: 'fg.success',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})
