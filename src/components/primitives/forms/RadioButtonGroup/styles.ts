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
    w: '10',
    h: '10',
    rounded: 'md',
    boxShadow: 'sm',
    ring: '2px',
    cursor: 'pointer',

    display: 'flex',
    center: 'flex',
    position: 'relative',

    bg: {
      base: 'transparent',
      _hover: 'bg.card.hovered',
      _checked: { base: 'bg.brand.solid', _hover: 'bg.brand.solid.hovered' },
      _disabled: {
        base: 'bg.disabled',
        _hover: 'bg.disabled',
      },
    },

    borderColor: {
      base: 'border',
      _checked: { base: 'bg.brand', _hover: 'bg.brand.hovered' },
      _disabled: 'border.disabled',
    },
    borderStyle: 'solid',
    borderWidth: '1px',

    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',

    _siblingFocusVisible: {
      outline: '2px solid token(colors.border.ring)',
    },

    _disabled: {
      cursor: 'not-allowed',
    },
  },
})

export const Text = styled(RadioGroup.ItemText, {
  base: {
    textStyle: 'textMd',
    color: { base: 'fg', _checked: 'white', _disabled: 'fg.muted' },
    transitionDuration: 'normal',
    transitionProperty: 'color',
  },
})
