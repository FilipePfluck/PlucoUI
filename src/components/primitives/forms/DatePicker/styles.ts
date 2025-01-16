import { DatePicker } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'

export default Pluco(DatePicker, {
  Control: cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),

  Input: cva({
    base: {
      maxW: 'full',
      bg: 'bg.surface',
      boxShadow: 'sm',
      transition: '0.2s',
      outline: 'none',
      rounded: 'md',

      display: 'flex',
      align: 'center',
      gap: '2',

      borderWidth: '1px',
      borderColor: {
        base: 'border',
        _focusWithin: 'border.brand',
        _invalidWithin: 'border.danger',
      },
      _disabled: {
        bg: 'bg.disabled',
        cursor: 'not-allowed',
      },
    },

    variants: {
      size: {
        sm: {
          px: '2',
        },
        md: {
          px: '4',
        },
      },

      width: {
        auto: {},
        sm: {
          w: '24',
        },
        md: {
          w: '48',
        },
        lg: {
          w: '64',
        },
        full: {
          w: 'full',
        },
      },
    },
    defaultVariants: {
      size: 'md',
      width: 'lg',
    },
  }),

  Content: cva({
    base: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      gap: '4',
      p: '6',
      maxH: '85vh',
      // TODO - fix this
      w: '304px',

      ...menuContentBaseStyles,
      ...slideAnimation,

      '&[hidden]': {
        opacity: 0,
        visibility: 'hidden',
      },

      transition: '0.2s',
    },
  }),

  ViewControl: cva({
    base: {
      display: 'flex',
      align: 'center',
      justify: 'space-between',
      w: 'full',
      mb: '4',
    },
  }),

  Table: cva({
    base: {
      w: 'full',
    },
  }),

  TableRow: cva({
    base: {
      w: 'full',
      display: 'grid',
      gridColumns: 'repeat(7, 1fr)',
      gap: '1',
    },
    variants: {
      fewerColumns: {
        true: {
          gridColumns: 'repeat(4, 1fr)',
        },
        false: {},
      },
    },
    defaultVariants: {
      fewerColumns: false,
    },
  }),

  TableHead: cva({
    base: {
      w: 'full',
      mb: '2',
    },
  }),

  TableHeader: cva({
    base: {
      display: 'flex',
      align: 'center',
      justify: 'center',
      textStyle: 'headingXs',
      color: 'fg.important',

      pb: '3',
    },
  }),

  TableBody: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '1',
    },
  }),

  TableCellTrigger: cva({
    base: {
      position: 'relative',
      display: 'flex',
      center: 'flex',
      w: 'full',
      p: '1',
      rounded: 'sm',
      cursor: 'pointer',
      _hover: {
        bg: 'bg.surface.hovered',
        boxShadow: 'sm',
      },
      '&[data-in-range]:not([data-selected])': {
        bg: 'bg.brand.subtle',
        color: 'fg.brand.important',
      },
      '&[data-today]': {
        _before: {
          content: '""',
          position: 'absolute',
          bottom: '1',
          left: '50%',
          transform: 'translateX(-50%)',
          rounded: 'full',

          // TODO - fix this
          w: '8.285px',
          h: '0.5',
          bg: 'fg',
        },
      },
      '&[data-selected]': {
        bg: 'bg.brand',
        color: 'white',
        _hover: {
          bg: 'bg.brand.hovered',
        },
        '&[data-today]': {
          _before: {
            bg: 'white',
          },
        },
      },
      _disabled: {
        color: 'fg.disabled',
        bg: 'transparent !important',
        cursor: 'not-allowed',

        _hover: {
          boxShadow: 'none',
        },
      },
      transition: 'background 0.2s',
    },
  }),
})
