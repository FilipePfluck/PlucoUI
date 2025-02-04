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
    bg: 'bg.surface',
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
    focusRing: 'mixed',
    p: '2',
    rounded: 'sm',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'border',

    _hover: {
      color: 'fg',
      bg: 'bg.surface.hovered',
    },
    _on: {
      bg: {
        base: 'bg.brand.subtle',
        _hover: 'bg.brand.subtle',
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
      bg: { base: 'bg.surface.disabled', _hover: 'bg.surface.disabled' },
      color: 'fg.disabled',
      iconColor: 'fg.disabled',
      borderColor: 'border.disabled',
      cursor: 'not-allowed',
    },
  },
})
