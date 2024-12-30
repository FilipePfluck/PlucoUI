import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Combobox } from '@ark-ui/react'

export default Pluco(Combobox, {
  Root: cva({
    base: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3',
    },
  }),
  Label: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg.important',
    },
  }),
  Control: cva({
    base: {
      height: 'min-content',
    },
  }),
  Input: cva({
    base: {},
  }),
  Trigger: cva({
    base: {
      iconColor: 'fg!',
      zIndex: '10',
    },
  }),
  Content: cva({
    base: {
      outline: 0,
      bg: 'bg.surface',
      rounded: 'md',
      shadow: 'lg',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      p: 2,
      w: 'full',
      h: 'calc(14px + 32px * var(--n-of-results))',
      transition: '0.1s',

      zIndex: '10',
      '&[hidden]': {
        display: 'none',
      },
      _open: {
        animation: 'fadeIn',
      },
      _closed: {
        animation: 'fadeOut',
      },
    },
  }),
  ItemGroup: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '0.5',
    },
  }),
  ItemGroupLabel: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg.important',
      mb: 1,
      px: 1,
      pt: 1,
    },
    variants: {
      showIndicator: {
        true: {
          pl: '8',
        },
        false: {},
      },
    },
    defaultVariants: {
      showIndicator: false,
    },
  }),
  Item: cva({
    base: {
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      px: 1,
      py: '0.5',
      position: 'relative',

      borderRadius: 'sm',
      cursor: 'pointer',

      transitionDuration: 'fast',
      transitionProperty: 'background, color, height, padding',
      transitionTimingFunction: 'default',
      animation: 'comboboxItemAppear',

      _selected: {
        color: 'fg.important',
      },
      _hover: {
        background: 'bg.brand',
        color: 'white',
        iconColor: 'white',
      },
      _highlighted: {
        background: 'bg.brand',
        color: 'white',
        iconColor: 'white',
      },
      _disabled: {
        bg: 'transparent',
        color: 'fg.disabled',
        cursor: 'not-allowed',
        _hover: {
          background: 'transparent',
          color: 'fg.disabled',
        },
      },
    },
    variants: {
      showIndicator: {
        true: {
          pl: '8',
        },
        false: {},
      },
    },
    defaultVariants: {
      showIndicator: false,
    },
  }),
  ItemText: cva({
    base: {
      color: 'inherit',
    },
  }),
})

export const EmptyState = styled('div', {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    px: 1,
    py: '0.5',
    position: 'relative',

    borderRadius: 'sm',
    cursor: 'pointer',
  },
})
