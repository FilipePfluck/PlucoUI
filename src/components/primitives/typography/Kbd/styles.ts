import { styled } from '@/styled-system/jsx'

export const Container = styled('kbd', {
  base: {
    display: 'inline-flex',
    align: 'center',
    px: '1',
    bg: 'bg.card',
    color: 'fg',
    borderRadius: 'sm',
    boxShadow:
      '0 -2px 0 0 inset var(--colors-border), 0 0 0 1px inset var(--colors-border)',
  },
})
