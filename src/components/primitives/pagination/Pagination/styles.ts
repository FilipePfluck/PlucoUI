import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Pagination } from '@ark-ui/react'

export default Pluco(Pagination, {
  Root: cva({
    base: {
      display: 'flex',
      gap: '2',
      align: 'center',
    },
  }),
  Item: cva({
    base: {
      display: 'flex',
      center: 'flex',

      p: '2',
      rounded: 'md',
      h: '10',
      w: '10',

      bg: {
        base: 'bg.surface',
        _hover: 'bg.surface.hovered',
      },
      _selected: {
        bg: {
          base: 'bg.brand',
          _hover: 'bg.brand.hovered',
        },
        color: 'white',
        borderColor: 'border.brand',
      },
      borderColor: 'border',
      borderWidth: '1px',
      borderStyle: 'solid',
      color: 'fg',
      transitionProperty: 'background, border-color',
      transitionDuration: 'fast',
    },
  }),
  Ellipsis: cva({
    base: {
      lineHeight: '10px',
      display: 'flex',
      align: 'center',
      // TODO - find a better way to center the ellipsis
      mt: '-8px',
    },
  }),
})
