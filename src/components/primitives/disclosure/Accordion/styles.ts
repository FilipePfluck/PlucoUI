import { Accordion } from '@ark-ui/react'
import { styled } from '@/styled-system/jsx'

export const Root = styled(Accordion.Root, {
  base: {
    rounded: 'md',
    width: '80',
    bg: 'border',
    boxShadow: 'lg',
  },
})

export const Item = styled(Accordion.Item, {
  base: {
    display: 'flex',
    flexDir: 'column',
    overflow: 'hidden',
    position: 'relative',
    mt: '1px',
    _first: {
      roundedTop: 'md',
      mt: '0px',
    },
    _last: {
      roundedBottom: 'md',
    },
    _focusVisibleWithin: {
      zIndex: '5',
      outline: '2px solid token(colors.border.ring)',
    },
  },
})

export const Trigger = styled(Accordion.ItemTrigger, {
  base: {
    cursor: 'pointer',
    bg: 'bg.card',
    p: '4',
    w: 'full',
    h: '10',
    flex: 1,
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    color: 'fg.important',
    textStyle: 'headingXS',
    boxShadow: 'md',
    zIndex: '2',
    outline: 'none',

    _disabled: {
      color: 'fg.muted',
      cursor: 'not-allowed',
    },
  },
})

export const Content = styled(Accordion.ItemContent, {
  base: {
    color: 'fg',
    bg: 'bg.card.hovered',
    overflow: 'hidden',
    p: '4',

    transitionProperty: 'height, padding',

    _dataOpen: {
      animation: 'accordionSlideDown',
    },

    _dataClosed: {
      animation: 'accordionSlideUp',
    },
  },
})
