import { styled } from '@/styled-system/jsx'
import { DatePicker } from '@ark-ui/react'

import { menuContentBaseStyles, slideAnimation } from '@/panda/utils'

export const Root = styled(DatePicker.Root, {})

export const Label = styled(DatePicker.Label, {})

export const Control = styled(DatePicker.Control, {
  base: {
    display: 'flex',
    gap: '2',
  },
})

export const Input = styled(DatePicker.Input, {
  base: {
    maxW: 'full',
    bg: 'bg.card',
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
      bg: 'bg.component.hovered',
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
})

export const Trigger = styled(DatePicker.Trigger, {})

export const ClearTrigger = styled(DatePicker.ClearTrigger, {})

export const Positioner = styled(DatePicker.Positioner, {})

export const Content = styled(DatePicker.Content, {
  base: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    gap: '4',
    p: '6',
    maxH: '85vh',
    // TODO - fix this
    w: '306px',

    ...menuContentBaseStyles,
    ...slideAnimation,

    '&[hidden]': {
      opacity: 0,
      visibility: 'hidden',
    },

    transition: '0.2s',
  },
})

export const YearSelect = styled(DatePicker.YearSelect, {})

export const MonthSelect = styled(DatePicker.MonthSelect, {})

export const View = styled(DatePicker.View, {})

export const ViewControl = styled(DatePicker.ViewControl, {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    w: 'full',
    mb: '4',
  },
})

export const PrevTrigger = styled(DatePicker.PrevTrigger, {})

export const ViewTrigger = styled(DatePicker.ViewTrigger, {})

export const RangeText = styled(DatePicker.RangeText, {})

export const NextTrigger = styled(DatePicker.NextTrigger, {})

export const Table = styled(DatePicker.Table, {
  base: {
    w: 'full',
  },
})

export const TableRow = styled(DatePicker.TableRow, {
  base: {
    w: 'full',
    display: 'grid',
    gridColumns: 'repeat(7, 1fr)',
    gap: '1',
  },
})

export const TableHead = styled(DatePicker.TableHead, {
  base: {
    w: 'full',
    mb: '2',
  },
})

export const TableHeader = styled(DatePicker.TableHeader, {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'center',
    textStyle: 'headingXs',
    color: 'fg',

    pb: '3',
  },
})

export const TableBody = styled(DatePicker.TableBody, {})

export const TableCell = styled(DatePicker.TableCell, {})

export const TableCellTrigger = styled(DatePicker.TableCellTrigger, {
  base: {
    display: 'flex',
    center: 'flex',
    w: 'full',
    p: '1',
    rounded: 'sm',
    _hover: {
      bg: 'bg.card.hovered',
    },
    '&[data-selected]': {
      bg: 'bg.brand',
      _hover: {
        bg: 'bg.brand.hovered',
      },
    },
    transition: 'background 0.2s',
  },
})
