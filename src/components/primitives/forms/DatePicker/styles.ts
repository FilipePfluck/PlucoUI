import { DatePicker } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/common/menus'
import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Input } from '../inputs/Input'

export default Pluco(DatePicker, {
  Control: cva({
    base: {
      display: 'flex',
      gap: '2',
    },
  }),

  Input: cva({}),

  Content: cva({
    base: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      gap: '4',
      p: '6',
      maxH: '85vh',
      // TODO - fix this
      w: '310px',

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
      focusRing: 'inside',
      focusRingWidth: '2px',
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

          w: '2',
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

export const CustomInput = styled(Input, {
  base: {
    '& input': {
      w: '105px',
    },
  },
  variants: {
    side: {
      start: {
        borderEndWidth: '0.5px',
        borderEndRadius: '0',
      },
      end: {
        borderStartWidth: '0.5px',
        borderStartRadius: '0',
      },
    },
  },
  defaultVariants: {
    side: 'start',
  },
})
