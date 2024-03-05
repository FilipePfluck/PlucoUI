import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  button: {
    cursor: 'pointer',
    ring: '2px',
  },
  '*': {
    color: 'fg',
    textStyle: 'bodyMd',
  },
  '*::selection': {
    color: 'fg.brand.important',
    bg: 'bg.brand.subtle.hovered',
  },
})
