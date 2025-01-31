import { styled } from '@/styled-system/jsx'

export const A = styled('a', {
  base: {
    color: 'fg.important',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    textDecorationColor: 'currentColor/20',

    cursor: 'pointer',
    focusRing: 'inside',
    display: 'inline-flex',
    align: 'center',
  },
})
