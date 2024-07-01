import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Editable } from '@ark-ui/react'

export default Pluco(Editable, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '1.5',
      align: 'center',
    },
    variants: {
      width: {
        auto: {},
        sm: {
          w: '176px',
        },
        md: {
          w: '240px',
        },
        lg: {
          w: '350px',
        },
        full: {
          w: 'full',
        },
      },
    },
    defaultVariants: {
      width: 'md',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      gap: '2',
      ml: 'auto',
    },
  }),
  Input: cva({
    base: {
      maxW: 'full',
      h: '10',
      bg: 'bg.surface',
      boxShadow: 'sm',
      rounded: 'md',
      transition: '0.2s',

      display: 'flex',
      align: 'center',
      px: '2',

      borderWidth: '1px',
      borderColor: {
        base: 'border',
        _focus: 'border.brand',
        _invalid: 'border.danger',
      },
      outline: 'none',
    },
    variants: {
      width: {
        auto: {},
        sm: {
          w: '24',
        },
        md: {
          w: '40',
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
      width: 'md',
    },
  }),
  Preview: cva({
    base: {
      w: '100%',
      display: 'flex',
      flex: '1',
      px: '2',
      borderWidth: '1px',
      borderColor: 'transparent',
      borderStyle: 'solid',
    },
    variants: {
      width: {
        auto: {},
        sm: {
          w: '24',
        },
        md: {
          w: '40',
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
      width: 'md',
    },
  }),
})
