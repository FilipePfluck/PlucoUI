import { RadioGroup } from '@ark-ui/react'

import { styled } from '@/styled-system/jsx'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

export default Pluco(RadioGroup, {
  Root: cva({
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
  }),
  Label: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg.important',
    },
  }),
  Item: cva({
    base: {
      display: 'flex',
      alignItems: 'center',
      gap: '2',
    },
  }),
  ItemControl: cva({
    base: {
      display: 'flex',
      center: 'flex',
      bg: { base: 'bg.surface', _disabled: 'bg.component.hovered' },
      cursor: { base: 'pointer', _disabled: 'not-allowed' },
      borderColor: { base: 'border', _checked: 'border.brand' },
      borderStyle: 'solid',
      borderWidth: '1px',
      transition: '0.2s border-color',
      w: '6',
      h: '6',
      rounded: 'full',
      boxShadow: 'sm',
      focusRing: 'inside',
      position: 'relative',

      _after: {
        content: '""',
        h: '4',
        w: '4',
        rounded: 'full',
        bg: 'bg.brand',
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

      _focusVisibleWithin: {
        outline: '2px solid token(colors.border.ring)',
      },
    },
  }),
  ItemText: cva({
    base: {
      textStyle: 'bodyMd',
      color: { base: 'fg', _disabled: 'fg.disabled' },
      cursor: { base: 'pointer', _disabled: 'not-allowed' },
    },
  }),
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
