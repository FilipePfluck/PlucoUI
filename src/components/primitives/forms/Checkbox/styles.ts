import { styled } from '@/styled-system/jsx'
import { Checkbox } from '@ark-ui/react'

export const Root = styled(Checkbox.Root, {
  base: {
    display: 'flex',
    alignItems: 'center',
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

    _ariaInvalid: {
      borderColor: 'border.danger',
    },

    _siblingFocusVisible: {
      outline: '2px solid token(colors.border.ring)',
    },
  },
})

export const Label = styled(Checkbox.Label, {
  base: {
    color: 'fg.important',
    textStyle: 'textSm',
    cursor: { base: 'pointer', _disabled: 'not-allowed' },
  },
})
