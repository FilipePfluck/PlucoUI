import { styled } from '@/styled-system/jsx'
import { ToggleGroup } from '@ark-ui/react'

export const Root = styled(ToggleGroup.Root, {
  base: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    gap: '1',
    _vertical: {
      flexDirection: 'column',
    },
  },
})

export const Toggle = styled(ToggleGroup.Toggle, {
  base: {
    alignItems: 'center',
    appearance: 'none',
    bg: 'bg.card',
    cursor: 'pointer',
    color: 'fg.subtle',
    display: 'flex',
    fontWeight: 'semibold',
    justifyContent: 'center',
    outline: 'none',
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',
    userSelect: 'none',
    ring: '2px',
    p: '2',
    rounded: 'sm',

    _hover: {
      color: 'fg',
      bg: 'bg.card.hovered',
    },
    _checked: {
      bg: { base: 'bg.brand.subtle', _hover: 'bg.brand.subtle' },
      color: 'fg.brand',
    },
    _pressed: {
      bg: { base: 'bg.brand.subtle', _hover: 'bg.brand.subtle' },
      color: 'fg.brand',
    },
  },
})
