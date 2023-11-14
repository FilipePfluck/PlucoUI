import { styled } from '@/styled-system/jsx'
import { Select } from '@ark-ui/react'

export const Root = styled(Select.Root, {
  base: {
    display: 'flex',
    gap: '3',
  },
})

export const Label = styled(Select.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
  },
})

export const Control = styled(Select.Control, {})

export const Trigger = styled(Select.Trigger, {
  base: {
    display: 'inline-flex',
    justify: 'space-between',
    align: 'center',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: { base: 'border', _focus: 'brand' },
    borderRadius: 'md',
    cursor: 'pointer',

    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, box-shadow, border-color',
    transitionTimingFunction: 'default',
    width: 'full',
    _placeholder: {
      color: 'fg.subtle',
    },
    '& :where(svg)': {
      color: 'fg.subtle',
    },
  },
})

export const ClearTrigger = styled(Select.ClearTrigger, {})

export const ValueText = styled(Select.ValueText, {})

export const Indicator = styled(Select.Indicator, {})

export const Positioner = styled(Select.Positioner, {})

export const Content = styled(Select.Content, {
  base: {
    outline: 0,
    bg: 'bg.card',
    rounded: 'md',
    shadow: 'lg',
    display: 'flex',
    flexDirection: 'column',
    zIndex: '10',
    _hidden: {
      display: 'none',
    },
    _open: {
      animation: 'fadeIn',
    },
    _closed: {
      animation: 'fadeOut',
    },
  },
})

export const ItemGroup = styled(Select.ItemGroup, {})

export const ItemGroupLabel = styled(Select.ItemGroupLabel, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
  },
})

export const Item = styled(Select.Item, {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'space-between',

    borderRadius: 'sm',
    cursor: 'pointer',

    transitionDuration: 'fast',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',

    _hover: {
      background: 'bg.card.hovered',
      color: 'fg',
    },
    _highlighted: {
      background: 'bg.card.hovered',
      color: 'fg',
    },
    _selected: {
      color: 'fg',
    },
    _disabled: {
      color: 'fg.muted',
      cursor: 'not-allowed',
      _hover: {
        background: 'transparent',
        color: 'fg.muted',
      },
    },
  },
})

export const ItemText = styled(Select.ItemText, {
  base: {},
})

export const ItemIndicator = styled(Select.ItemIndicator, {
  base: {
    color: 'brand',
  },
})
