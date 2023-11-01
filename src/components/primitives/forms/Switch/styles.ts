import { styled } from '@/styled-system/jsx'
import { Switch } from '@ark-ui/react'

export const Root = styled(Switch.Root, {
  base: {
    display: 'flex',
    gap: '4',
  },
})

export const Control = styled(Switch.Control, {
  base: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    width: '10',
    height: '6',
    rounded: 'full',
    boxShadow: 'sm',
    position: 'relative',
    bg: 'border',
    '&[data-state="checked"]': { bg: 'border.brand' },

    transitionDuration: 'normal',
    transitionProperty: 'background',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
    ring: '2px',
  },
})

export const Thumb = styled(Switch.Thumb, {
  base: {
    display: 'block',
    width: '5',
    height: '5',
    bg: 'bg.card',
    rounded: 'full',
    boxShadow: `sm`,

    transitionDuration: 'normal',
    transitionProperty: 'transform',
    transform: 'translateX(2px)',
    '&[data-state="checked"]': { transform: 'translateX(18px)' },
  },
})

export const Label = styled(Switch.Label, {
  base: {
    textStyle: 'textMd',
    color: { base: 'fg', _disabled: 'fg.muted' },
  },
})
