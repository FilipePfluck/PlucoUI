import { styled } from '@/styled-system/jsx'
import { Collapsible } from '@ark-ui/react'

export const Root = styled('div', {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1',
    maxW: 'full',
  },
})

export const MessageContainer = styled(Collapsible.Content, {
  base: {
    display: 'flex',
    '--height': '22px !important',
    animationDuration: '0.15s',

    _open: {
      animation: 'expand',
      animationTimingFunction: 'ease-out',
    },
    _closed: {
      animation: 'collapse',
      animationTimingFunction: 'ease-in',
    },
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
    animation: 'fadeIn',
    opacity: 0,
    animationFillMode: 'forwards',
    animationDuration: '0.15s',
    animationTimingFunction: 'ease-in',
  },
})
