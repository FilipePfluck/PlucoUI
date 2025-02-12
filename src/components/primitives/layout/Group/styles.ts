import { styled } from '@/styled-system/jsx'

export const StyledGroup = styled('div', {
  base: {
    isolation: 'isolate',
    position: 'relative',
  },

  variants: {
    stacking: {
      'first-on-top': {
        '& > [data-group-item]': {
          zIndex: 'calc(var(--group-count) - var(--group-index))',
        },
      },
      'last-on-top': {
        '& > [data-group-item]': {
          zIndex: 'var(--group-index)',
        },
      },
    },
  },

  defaultVariants: {
    stacking: 'last-on-top',
  },
})
