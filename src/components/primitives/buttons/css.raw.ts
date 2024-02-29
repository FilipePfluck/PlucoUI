import { css } from '@/styled-system/css'

export const buttonBaseStyles = css.raw({
  display: 'flex',
  center: 'flex',
  rounded: 'md',
  h: 'min-content',

  textStyle: 'buttonMd',
  transition: 'background, border-color 0.2s',
  cursor: 'pointer',

  borderWidth: '1px',
  borderStyle: 'solid',

  // variant dependent below

  bg: {
    base: 'var(--btn-bg)',
    _hover: 'var(--btn-bg-hover)',
  },

  color: 'var(--btn-color)',
  '& svg': { stroke: 'var(--btn-color)' },

  borderColor: {
    base: 'var(--btn-border)',
    _hover: 'var(--btn-border-hover)',
  },

  _disabled: {
    bg: {
      base: 'var(--btn-bg-disabled)',
      _hover: 'var(--btn-bg-disabled)',
    },

    color: 'var(--btn-color-muted)',
    '& svg': { stroke: 'var(--btn-color-muted)' },

    borderColor: {
      base: 'var(--btn-border-disabled)',
      _hover: 'var(--btn-border-disabled)',
    },
    cursor: 'not-allowed',
  },
})

export const primaryButtonBaseStyles = css.raw({
  '--btn-bg': 'colors.bg.brand.solid',
  '--btn-bg-hover': 'colors.bg.brand.solid.hovered',
  '--btn-bg-disabled': 'colors.bg.disabled',

  '--btn-color': 'white',
  '--btn-color-muted': 'colors.fg.muted',

  '--btn-border': 'colors.bg.brand.solid',
  '--btn-border-hover': 'colors.bg.brand.solid.hovered',
  '--btn-border-disabled': 'colors.bg.disabled',
})

export const secondaryButtonBaseStyles = css.raw({
  '--btn-bg': 'colors.bg.card',
  '--btn-bg-hover': 'colors.bg.card.hovered',
  '--btn-bg-disabled': 'transparent',

  '--btn-color': 'colors.fg',
  '--btn-color-muted': 'colors.fg.muted',

  '--btn-border': 'colors.border',
  '--btn-border-hover': 'colors.border',
  '--btn-border-disabled': 'colors.border.disabled',
})

export const dangerButtonBaseStyles = css.raw({
  '--btn-bg': 'colors.bg.danger.solid',
  '--btn-bg-hover': 'colors.bg.danger.solid.hovered',
  '--btn-bg-disabled': 'colors.bg.disabled',

  '--btn-color': 'white',
  '--btn-color-muted': 'colors.fg.muted',

  '--btn-border': 'colors.bg.danger.solid',
  '--btn-border-hover': 'colors.bg.danger.solid.hovered',
  '--btn-border-disabled': 'colors.bg.disabled',
})

export const ghostButtonBaseStyles = css.raw({
  '--btn-bg': 'transparent',
  '--btn-bg-hover': 'colors.bg.card.hovered',
  '--btn-bg-disabled': 'transparent',

  '--btn-color': 'colors.fg',
  '--btn-color-muted': 'colors.fg.muted',

  '--btn-border': 'transparent',
  '--btn-border-hover': 'colors.bg.card.hovered',
  '--btn-border-disabled': 'transparent',
})

export const linkButtonBaseStyles = css.raw({
  '--btn-bg': 'transparent',
  '--btn-bg-hover': 'transparent',
  '--btn-bg-disabled': 'transparent',

  '--btn-color': 'colors.fg',
  '--btn-color-muted': 'colors.fg.muted',

  '--btn-border': 'transparent',
  '--btn-border-hover': 'transparent',
  '--btn-border-disabled': 'transparent',
})
