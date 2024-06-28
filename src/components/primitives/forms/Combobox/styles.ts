import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
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
      position: 'relative',
    },
  }),
  Input: cva({
    base: {
      display: 'inline-flex',
      justify: 'space-between',
      align: 'center',
      gap: '4',
      minH: '10',

      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: { base: 'border', _focus: 'border.brand' },
      borderRadius: 'md',
      cursor: 'pointer',

      bg: 'bg.surface',
      boxShadow: 'sm',

      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'background, box-shadow, border-color',
      transitionTimingFunction: 'default',
      color: 'fg',
      width: 'full',
      _placeholder: {
        color: 'fg',
      },
      '& :where(svg)': {
        color: 'fg',
      },
    },
    variants: {
      width: {
        auto: {},
        sm: {
          w: '24',
          p: '1',
        },
        md: {
          w: '40',
          px: '2',
          py: '1',
        },
        lg: {
          w: '64',
          px: '4',
          py: '2',
        },
        full: {
          w: 'full',
          px: '4',
          py: '2',
        },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
  Trigger: cva({
    base: {
      bottom: '0',
      color: 'fg',
      position: 'absolute',
      // TODO - improve this later
      right: '2',
      top: '0',
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
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',

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
