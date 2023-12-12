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
    // TODO - remove those importants once ark removes default styles
    _horizontal: {
      height: '2px !important',
      bottom: '0 !important',
      top: 'auto !important',
    },
    _vertical: {
      width: '2px !important',
      right: '0 !important',
      left: 'auto !important',
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
    gap: '2',
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
