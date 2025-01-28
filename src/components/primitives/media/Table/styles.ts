import { styled } from '@/styled-system/jsx'

export const Root = styled('table', {
  base: {
    w: 'full',
    borderCollapse: 'collapse',
    textAlign: 'start',
    verticalAlign: 'top',

    rounded: 'md',
    overflow: 'hidden',
    bg: 'bg.surface',
    boxShadow: '0 0 0 1px {colors.border}',
  },
})

export const TableHeader = styled('thead', {})

export const TableRow = styled('tr', {
  base: {
    '&:not(:last-of-type)': {
      borderBottomWidth: '1px',
      borderBottomColor: 'border',
    },
  },
})

export const ColumnHeader = styled('th', {
  base: {
    textStyle: 'bodySm',
    textAlign: 'start',
    color: 'fg',
    p: '3',
    bg: 'bg.surface.hovered',

    borderBottomWidth: '1px',
    borderBottomColor: 'border',

    _firstOfType: {
      ps: '4',
    },

    _lastOfType: {
      pe: '4',
    },
  },
})

export const TableBody = styled('tbody', {})

export const TableCell = styled('td', {
  base: {
    p: '3',

    _firstOfType: {
      ps: '4',
    },

    _lastOfType: {
      pe: '4',
    },
  },
})
