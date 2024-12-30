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
        base: 'bg.surface',
        _hover: 'bg.surface.hovered',
        _checked: { base: 'bg.brand', _hover: 'bg.brand.hovered' },
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

      _focusVisibleWithin: {
        outline: '2px solid token(colors.border.ring)',
      },

      _disabled: {
        cursor: 'not-allowed',
      },
    },
  }),
  ItemText: cva({
    base: {
      textStyle: 'bodyMd',
      color: { base: 'fg', _checked: 'white', _disabled: 'fg.disabled' },
      transitionDuration: 'normal',
      transitionProperty: 'color',
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
