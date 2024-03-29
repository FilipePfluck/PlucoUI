import { styled } from '@/styled-system/jsx'
import { Checkbox } from '@ark-ui/react'

export const Root = styled(Checkbox.Root, {
  base: {
    display: 'flex',
    align: 'center',
    gap: '2',
  },
})

export const Control = styled(Checkbox.Control, {
  base: {
    cursor: 'pointer',
    bg: 'bg.card',
    h: '6',
    w: '6',
    rounded: 'md',
    display: 'flex',
    center: 'flex',
    boxShadow: 'sm',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    transition: '0.2s border-color',
    position: 'relative',

    _after: {
      content: '""',
      h: '4',
      w: '4',
      rounded: 'sm',
      bg: 'border.focused',
      transition: '0.2s',
      position: 'absolute',
      center: 'absolute',

      opacity: 0,
      transform: 'translate(-50%, -50%) scale(50%)',
    },

    _checked: {
      borderColor: 'border.focused',

      _after: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(100%)',
      },
    },

    '[aria-invalid="true"] &': {
      borderColor: 'border.invalid',

      _after: {
        bg: 'bg.danger.solid',
      },
    },

    _disabled: {
      bg: 'bg.disabled',
      borderColor: 'border.disabled',
      cursor: 'not-allowed',

      _after: {
        bg: 'border.disabled',
      },
    },

    _siblingFocusVisible: {
      outline: '2px solid token(colors.border.ring)',
    },
  },
})

export const Label = styled(Checkbox.Label, {
  base: {
    color: { base: 'fg.important', _disabled: 'fg.muted' },
    textStyle: 'bodySm',
    cursor: { base: 'pointer', _disabled: 'not-allowed' },
  },
})
