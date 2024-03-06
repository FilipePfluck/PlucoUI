import { styled } from '@/styled-system/jsx'
import { ToggleGroup } from '@ark-ui/react'

export const Root = styled(ToggleGroup.Root, {
  base: {
    display: 'flex',
    position: 'relative',
    gap: '1',
    _vertical: {
      flexDirection: 'column',
    },
  },
})

export const Toggle = styled(ToggleGroup.Item, {
  base: {
    alignItems: 'center',
    appearance: 'none',
    bg: 'bg.card',
    cursor: 'pointer',
    color: 'fg',
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
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'border',

    _hover: {
      color: 'fg',
      bg: 'bg.card.hovered',
    },
    _dataOn: {
      bg: {
        base: 'bg.brand.subtle.hovered',
        _hover: 'bg.brand.subtle.hovered',
      },
      color: 'fg.brand',
      iconColor: 'fg.brand',
      borderColor: 'border.brand',
    },
    _focusVisible: {
      zIndex: 20,
      outline: '2px solid token(colors.border.ring)',
    },
    _disabled: {
      bg: { base: 'bg.disabled', _hover: 'bg.disabled' },
      color: 'fg.muted',
      iconColor: 'fg.muted',
      borderColor: 'border.disabled',
      cursor: 'not-allowed',
    },
  },
})
