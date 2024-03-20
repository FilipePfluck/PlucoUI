import { styled } from '@/styled-system/jsx'

export const Root = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1',
    maxW: 'full',
  },
})

export const MessageContainer = styled('div', {
  base: {
    display: 'flex',
    h: '18px',
  },
})

export const HelperMessage = styled('p', {
  base: {
    color: 'fg',
    textStyle: 'bodySm',
  },
})

export const ErrorMessage = styled('p', {
  base: {
    color: 'fg.danger',
    textStyle: 'bodySm',
  },
})
