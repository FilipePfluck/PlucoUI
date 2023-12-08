import { css } from '@/styled-system/css'

export const buttonBaseStyles = css.raw({
  display: 'flex',
  center: 'flex',
  rounded: 'md',
  transition: 'background, border-color 0.2s',
  cursor: 'pointer',
  borderWidth: '1px',
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
  textStyle: 'buttonMd',
})

export const primaryButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.brand',
    _hover: 'bg.brand.hovered',
  },
  color: 'white',
  borderColor: {
    base: 'bg.brand',
    _hover: 'bg.brand.hovered',
  },
})

export const secondaryButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.card',
    _hover: 'bg.card.hovered',
  },
  borderColor: 'border',
  color: 'fg.subtle',
})

export const tertiaryButtonBaseStyles = css.raw({
  bg: {
    base: 'transparent',
    _hover: 'bg.card.hovered',
  },
  borderColor: 'border',
  color: 'fg.subtle',
})

export const dangerButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.danger',
    _hover: 'bg.danger.hovered',
  },
  borderColor: {
    base: 'bg.danger',
    _hover: 'bg.danger.hovered',
  },
  color: 'white',
})
