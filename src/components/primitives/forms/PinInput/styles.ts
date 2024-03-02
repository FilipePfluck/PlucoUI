import { styled } from '@/styled-system/jsx'
import { PinInput } from '@ark-ui/react'

export const Root = styled(PinInput.Root, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '3',
  },
})

export const Label = styled(PinInput.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
  },
})

export const Control = styled(PinInput.Control, {
  base: {
    display: 'flex',
    gap: '2',
  },
})

export const Input = styled(PinInput.Input, {
  base: {
    h: '10',
    w: '9',
    p: '3',
    bg: 'bg.card',
    boxShadow: 'sm',
    rounded: 'md',
    transition: '0.2s',
    color: 'fg',

    display: 'flex',
    align: 'center',
    gap: '2',

    _placeholder: {
      color: 'fg.unimportant',
      fontSize: 'sm',
    },

    outline: 'none',
    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focus: 'border.focused',
    },
    '[aria-invalid]  &': { borderColor: 'border.danger' },
    _disabled: {
      bg: 'bg.disabled',
      borderColor: 'border.disabled',
      cursor: 'not-allowed',
      color: 'fg.muted',

      _placeholder: {
        color: 'fg.muted',
      },
    },
  },
})
