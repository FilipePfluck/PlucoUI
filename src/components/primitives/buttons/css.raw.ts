import { css } from '@/styled-system/css'

export const buttonBaseStyles = css.raw({
  display: 'flex',
  center: 'flex',
  rounded: 'md',
  textStyle: 'buttonMd',

  transition: 'background, border-color 0.2s',
  cursor: 'pointer',

  borderWidth: '1px',
  borderStyle: 'solid',
})

export const primaryButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.brand.solid',
    _hover: 'bg.brand.solid.hovered',
  },
  color: 'white',
  borderColor: {
    base: 'bg.brand.solid',
    _hover: 'bg.brand.solid.hovered',
  },

  _disabled: {
    bg: {
      base: 'bg.disabled',
      _hover: 'bg.disabled',
    },
    color: 'fg.muted',
    borderColor: {
      base: 'border.disabled',
      _hover: 'border.disabled',
    },
    cursor: 'not-allowed',
  },
})

export const secondaryButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.card',
    _hover: 'bg.card.hovered',
  },
  borderColor: 'border',
  color: 'fg',

  _disabled: {
    bg: {
      base: 'transparent',
      _hover: 'transparent',
    },
    color: 'fg.muted',
    borderColor: {
      base: 'border.disabled',
      _hover: 'border.disabled',
    },
    cursor: 'not-allowed',
  },
})

export const tertiaryButtonBaseStyles = css.raw({
  bg: {
    base: 'transparent',
    _hover: 'bg.card.hovered',
  },
  borderColor: 'border',
  color: 'fg',

  _disabled: {
    bg: {
      base: 'transparent',
      _hover: 'transparent',
    },
    color: 'fg.muted',
    borderColor: {
      base: 'border.disabled',
      _hover: 'border.disabled',
    },
    cursor: 'not-allowed',
  },
})

export const dangerButtonBaseStyles = css.raw({
  bg: {
    base: 'bg.danger.solid',
    _hover: 'bg.danger.solid.hovered',
  },
  borderColor: {
    base: 'bg.danger.solid',
    _hover: 'bg.danger.solid.hovered',
  },
  color: 'white',

  _disabled: {
    bg: {
      base: 'bg.disabled',
      _hover: 'bg.disabled',
    },
    color: 'fg.muted',
    borderColor: {
      base: 'border.disabled',
      _hover: 'border.disabled',
    },
    cursor: 'not-allowed',
  },
})

export const ghostButtonBaseStyles = css.raw({
  bg: {
    base: 'transparent',
    _hover: 'bg.card.hovered',
  },
  borderColor: 'transparent',
  color: 'fg',
  _disabled: {
    bg: { base: 'transparent', _hover: 'transparent' },
    color: 'fg.muted',
    borderColor: 'transparent',
  },
})
