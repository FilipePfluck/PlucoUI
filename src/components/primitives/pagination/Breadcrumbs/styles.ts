import { styled } from '@/styled-system/jsx'

export const List = styled('li', {
  base: {
    display: 'flex',
    align: 'center',
    wordBreak: 'break-word',
    color: 'fg.unimportant',
  },
})

export const Link = styled('a', {
  base: {
    textDecoration: 'none',
    display: 'inline-flex',
    align: 'center',
    gap: '2',
    transition: '0.2s',
    transitionProperty: 'color',
    ring: '2px',
    color: 'fg.unimportant',

    _hover: {
      color: 'fg.important',
    },
  },
})

export const CurrentLink = styled('p', {
  base: {
    color: 'fg.important',
    display: 'inline-flex',
    align: 'center',
    gap: '2',
  },
})
