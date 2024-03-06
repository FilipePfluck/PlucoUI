import { Collapsible } from '@ark-ui/react'

import { styled } from '@/styled-system/jsx'

export const FruitGrid = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: {
      base: '1fr',
      sm: '1fr 1fr',
      lg: 'repeat(4, 1fr)',
    },
    gap: '4',
  },
})

export const FruitCard = styled('div', {
  base: {
    fontSize: '72px',
    p: '8',
    rounded: 'xl',
    bg: 'bg.card',
    boxShadow: 'lg',
    minH: '32',
    display: 'flex',
    center: 'flex',

    opacity: 0,
    animationFillMode: 'forwards',
    animationName: 'fadeInAndScale',
    animationDuration: '0.25s',
    animationDelay: {
      base: 'var(--delay-base)',
      md: 'var(--delay-md)',
      lg: 'var(--delay-lg)',
    },
  },
})

export const Divider = styled('div', {
  base: {
    h: '2px',
    w: 'full',
    bg: 'border',
  },
})

export const Root = styled(Collapsible.Root, {})

export const Trigger = styled(Collapsible.Trigger, {})

export const Content = styled(Collapsible.Content, {
  base: {
    pb: '2',
    overflow: 'hidden',
    "&[data-state='open']": {
      animation: 'expand',
    },
    "&[data-state='closed']": {
      animation: 'collapse',
    },
  },
})
