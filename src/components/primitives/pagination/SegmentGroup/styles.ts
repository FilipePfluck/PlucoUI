import { styled } from '@/styled-system/jsx'
import { SegmentGroup } from '@ark-ui/react'

// TODO - unify styles with tab component

export const Root = styled(SegmentGroup.Root, {
  base: {
    display: 'flex',
    justify: 'center',
    flexShrink: '0',
    _horizontal: {
      flexDirection: 'row',
      boxShadow: '0 -1px 0 0 inset token(colors.border)',
      gap: '4',
      px: '4',
      pt: '4',
    },
    _vertical: {
      flexDirection: 'column',
      boxShadow: '-1px 0 0 0 inset token(colors.border)',
      gap: '1',
      py: '4',
      pl: '4',
    },
    overflow: 'auto',
    position: 'relative',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    zIndex: '3',
  },
})

export const Indicator = styled(SegmentGroup.Indicator, {
  base: {
    bg: 'brand',
    _horizontal: {
      height: '2px',
      width: 'var(--width)',
      bottom: '0',
    },
    _vertical: {
      width: '2px',
      height: 'var(--height)',
      right: '0',
    },
  },
})

export const Item = styled(SegmentGroup.Item, {
  base: {
    display: 'flex',
    center: 'flex',
    cursor: 'pointer',
    color: 'fg.subtle',
    textStyle: 'bodyLg',
    flexShrink: '0',
    px: '2',
    outlineColor: 'brand',

    transitionDuration: 'normal',
    transitionProperty: 'color, background, border-color',
    transitionTimingFunction: 'default',
    whiteSpace: 'nowrap',

    _hover: {
      color: 'fg',
    },

    _disabled: {
      color: 'fg.muted',
      cursor: 'not-allowed',
      _hover: {
        color: 'fg.muted',
      },
    },

    _selected: {
      color: 'brand.fg',
      _hover: {
        color: 'brand.fg',
      },
    },

    _vertical: {
      justify: 'space-between',
      w: 'full',
    },

    _horizontal: {
      pb: '2',
    },
  },
})

export const ItemText = styled(SegmentGroup.ItemText, {})

export const ItemControl = styled(SegmentGroup.ItemControl, {})
