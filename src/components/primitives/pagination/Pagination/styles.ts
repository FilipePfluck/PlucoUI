import { styled } from '@/styled-system/jsx'
import { Pagination } from '@ark-ui/react'

export const Root = styled(Pagination.Root, {
  base: {
    display: 'flex',
    gap: '2',
    align: 'center',
  },
})

export const PrevTrigger = styled(Pagination.PrevTrigger, {})

export const NextTrigger = styled(Pagination.NextTrigger, {})

export const Item = styled(Pagination.Item, {
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
    _dataSelected: {
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
})

export const Ellipsis = styled(Pagination.Ellipsis, {
  base: {
    lineHeight: '10px',
    display: 'flex',
    align: 'center',
    // TODO - find a better way to center the ellipsis
    mt: '-8px',
  },
})
