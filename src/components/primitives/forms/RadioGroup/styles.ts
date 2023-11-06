import { RadioGroup } from '@ark-ui/react'

import { styled } from '@/styled-system/jsx'

export const Root = styled(RadioGroup.Root, {
  base: {
    display: 'flex',
    gap: '4',
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
        gap: '4',
      },
      vertical: {
        flexDir: 'column',
        align: 'start',
        gap: '4',
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
    display: 'flex',
    center: 'flex',
    bg: { base: 'bg.component', _disabled: 'bg.card' },
    borderColor: { base: 'border', _checked: 'border.brand' },
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
      h: '3',
      w: '3',
      rounded: 'full',
      bg: 'border.brand',
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

    '.group[data-focus] &': {
      outline: '2px solid token(colors.border.ring)',
    },
  },
})

export const Text = styled(RadioGroup.RadioLabel, {
  base: {
    textStyle: 'textMd',
    color: { base: 'fg', _disabled: 'fg.muted' },
  },
})
