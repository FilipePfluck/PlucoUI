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
    textStyle: 'textXs',
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
      warning: {
        bg: 'bg.warning.subtle',
        borderColor: 'border.warning',
        color: 'fg.warning',
      },
      success: {
        bg: 'bg.success.subtle',
        borderColor: 'border.success',
        color: 'fg.success',
      },
      info: {
        bg: 'bg.info.subtle',
        borderColor: 'border.info',
        color: 'fg.info',
      },
    },
  },
  defaultVariants: {
    intent: 'primary',
  },
})
