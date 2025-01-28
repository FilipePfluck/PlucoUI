import { Pluco } from '@/pluco'
import { css, cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Menu } from '@ark-ui/react'

const menuItemBaseStyles = css.raw({
  py: '1',
  px: '8',
  rounded: 'sm',
  cursor: 'pointer',
  _highlighted: {
    bg: 'bg.brand',
    color: 'white',
    iconColor: 'white',
  },
  '&[aria-expanded="true"]': {
    bg: 'bg.surface.hovered',
    color: 'fg.important',
  },
  _hover: {
    bg: 'bg.brand',
    color: 'white',
    iconColor: 'white',
  },
  transition: '0.12s',
  position: 'relative',

  display: 'flex',
  align: 'center',
  justify: 'space-between',
  gap: '2',
})

export default Pluco(Menu, {
  Content: cva({
    base: {
      bg: 'bg.surface',
      px: '2',
      py: '4',
      rounded: 'md',
      shadow: 'md',
      outline: 'none',

      display: 'flex',
      '&[hidden]': { display: 'none' },
      flexDir: 'column',
      gap: '2',

      _open: {
        _top: { animation: 'slideDownAndFadeIn' },
        _right: { animation: 'slideLeftAndFadeIn' },
        _bottom: { animation: 'slideUpAndFadeIn' },
        _left: { animation: 'slideRightAndFadeIn' },
      },
      _closed: {
        _top: { animation: 'slideDownAndFadeOut' },
        _right: { animation: 'slideLeftAndFadeOut' },
        _bottom: { animation: 'slideUpAndFadeOut' },
        _left: { animation: 'slideRightAndFadeOut' },
      },
    },
  }),
  ItemGroupLabel: cva({
    base: {
      textStyle: 'headingXs',
      color: 'fg.important',
      pl: '8',
      mb: '1',
    },
  }),
  Item: cva({
    base: {
      ...menuItemBaseStyles,
    },
  }),
  TriggerItem: cva({
    base: {
      ...menuItemBaseStyles,
    },
  }),
  CheckboxItem: cva({
    base: {
      ...menuItemBaseStyles,
    },
  }),
  RadioItem: cva({
    base: {
      ...menuItemBaseStyles,
    },
  }),
  ItemIndicator: cva({
    base: {
      position: 'absolute',
      left: '2',
      top: '50%',
      transform: 'translateY(-50%)',
    },
  }),
  Arrow: cva({
    base: {
      '--arrow-background': 'colors.bg.surface',
      '--arrow-size': '10px',
    },
  }),
  ArrowTip: cva({
    base: {
      rounded: 'xs',
    },
  }),
  Separator: cva({
    base: {
      borderColor: 'border',
    },
  }),
})

// TODO - fix icon color when highlighted
export const OptionIndicator = styled('div', {
  base: {
    position: 'absolute',
    left: '2',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const RightSlot = styled('div', {
  base: {
    position: 'absolute',
    right: '2',
    top: '50%',
    transform: 'translateY(-50%)',
    textStyle: 'bodySm',
    color: 'fg',
  },
})
