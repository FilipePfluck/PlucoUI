import { css } from '@/styled-system/css'

export const tabsListBaseStyles = css.raw({
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
})

export const tabsListItemBaseStyles = css.raw({
  display: 'flex',
  center: 'flex',
  cursor: 'pointer',
  color: 'fg',
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
    color: 'fg.important',
  },

  _disabled: {
    color: 'fg.disabled',
    cursor: 'not-allowed',
    _hover: {
      color: 'fg.disabled',
    },
  },

  _selected: {
    color: 'fg.brand',
    _hover: {
      color: 'fg.brand',
    },
  },

  _vertical: {
    justify: 'space-between',
    w: 'full',
  },

  _horizontal: {
    pb: '2',
  },
})

export const tabsIndicatorBaseStyles = {
  bg: 'border.brand',

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
}
