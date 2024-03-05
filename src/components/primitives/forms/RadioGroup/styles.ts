import { RadioGroup } from '@ark-ui/react'

import { styled } from '@/styled-system/jsx'

export const Root = styled(RadioGroup.Root, {
  base: {
    display: 'flex',
    gap: '3',
  },
  variants: {
    orientation: {
      horizontal: {
        align: 'center',
      },
      vertical: {
        flexDir: 'column',
        align: 'start',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

export const Label = styled(RadioGroup.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
  },
})

export const Group = styled('div', {
  base: {
    display: 'flex',
  },
  variants: {
    orientation: {
      horizontal: {
        align: 'center',
        gap: '2',
      },
      vertical: {
        flexDir: 'column',
        align: 'start',
        gap: '2',
      },
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
})

export const Item = styled(RadioGroup.Item, {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
  },
})

export const Control = styled(RadioGroup.ItemControl, {
  base: {
    display: 'flex',
    center: 'flex',
    bg: { base: 'bg.card', _disabled: 'bg.component.hovered' },
    cursor: { base: 'pointer', _disabled: 'not-allowed' },
    borderColor: { base: 'border', _checked: 'border.focused' },
    borderStyle: 'solid',
    borderWidth: '1px',
    transition: '0.2s border-color',
    w: '6',
    h: '6',
    rounded: 'full',
    boxShadow: 'sm',
    ring: '2px',
    position: 'relative',

    _after: {
      content: '""',
      h: '4',
      w: '4',
      rounded: 'full',
      bg: 'bg.brand.solid',
      transition: '0.2s',
      position: 'absolute',
      center: 'absolute',

      opacity: 0,
      transform: 'translate(-50%, -50%) scale(50%)',
    },

    _checked: {
      borderColor: 'border.brand',

      _after: {
        opacity: 1,
        transform: 'translate(-50%, -50%) scale(100%)',
      },
    },

    _siblingFocusVisible: {
      outline: '2px solid token(colors.border.ring)',
    },
  },
})

export const Text = styled(RadioGroup.ItemText, {
  base: {
    textStyle: 'bodyMd',
    color: { base: 'fg', _disabled: 'fg.muted' },
    cursor: { base: 'pointer', _disabled: 'not-allowed' },
  },
})
