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
    color: 'fg',
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
    h: '12',
    w: '10',
    p: '14px',
    bg: 'bg.card',
    boxShadow: 'sm',
    rounded: 'md',
    transition: '0.2s',
    color: 'fg',

    display: 'flex',
    align: 'center',
    gap: '2',

    _placeholder: {
      color: {
        base: 'fg.subtle',
      },
      fontSize: 'sm',
    },

    outline: 'none',
    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focus: 'border.brand',
      _invalid: 'border.danger',
    },
    _disabled: {
      bg: 'bg.component.hovered',
      cursor: 'not-allowed',
      color: 'fg.muted',
    },
  },
})
