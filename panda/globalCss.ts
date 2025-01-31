import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  button: {
    cursor: 'pointer',
    focusRing: 'inside',
  },
  '*': {
    color: 'fg',
    textStyle: 'bodyMd',
  },
  '*::selection': {
    color: 'fg.brand.important',
    bg: 'bg.brand.userSelect',
  },
})
