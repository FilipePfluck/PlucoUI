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
    color: 'fg',
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

export const Item = styled(RadioGroup.Radio, {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
  },
})

export const Control = styled(RadioGroup.RadioControl, {
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
      _disabled: {
        _hover: 'transparent',
      },
      _checked: { base: 'bg.brand', _hover: 'bg.brand.hovered' },
    },

    borderColor: {
      base: 'border',
      _disabled: 'bg.component',
      _checked: { base: 'bg.brand', _hover: 'bg.brand.hovered' },
    },
    borderStyle: 'solid',
    borderWidth: '1px',

    transitionDuration: 'normal',
    transitionProperty: 'background, border-color, color, box-shadow',
    transitionTimingFunction: 'default',

    /* '.group[data-focus] &': {
      outline: '2px solid token(colors.border.ring)',
    }, */
  },
})

export const Text = styled(RadioGroup.RadioLabel, {
  base: {
    textStyle: 'textMd',
    color: { base: 'fg', _checked: 'white', _disabled: 'fg.muted' },
    transitionDuration: 'normal',
    transitionProperty: 'color',
  },
})
