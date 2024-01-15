import { styled } from '@/styled-system/jsx'
import { Combobox } from '@ark-ui/react'

export const Root = styled(Combobox.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3',
    position: 'relative',
  },
})

export const Label = styled(Combobox.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
  },
})

export const Control = styled(Combobox.Label, {
  base: {
    position: 'relative',
  },
})

export const Input = styled(Combobox.Input, {
  base: {
    display: 'inline-flex',
    justify: 'space-between',
    align: 'center',
    gap: '4',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: { base: 'border', _focus: 'brand' },
    borderRadius: 'md',
    cursor: 'pointer',

    bg: 'bg.card',
    boxShadow: 'sm',

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
  variants: {
    width: {
      auto: {},
      sm: {
        w: '24',
        p: '1',
      },
      md: {
        w: '40',
        px: '2',
        py: '1',
      },
      lg: {
        w: '64',
        px: '4',
        py: '2',
      },
      full: {
        w: 'full',
        px: '4',
        py: '2',
      },
    },
  },
  defaultVariants: {
    width: 'md',
  },
})

export const Trigger = styled(Combobox.Trigger, {})

export const ClearTrigger = styled(Combobox.ClearTrigger, {})

export const Positioner = styled(Combobox.Positioner, {})

export const Content = styled(Combobox.Content, {
  base: {
    outline: 0,
    bg: 'bg.card',
    rounded: 'md',
    shadow: 'lg',
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    p: 2,

    zIndex: '10',
    '&[hidden]': {
      display: 'none',
    },
    _open: {
      animation: 'fadeIn',
    },
    _closed: {
      animation: 'fadeOut',
    },
  },

  variants: {
    width: {
      auto: {},
      sm: {
        w: '24',
      },
      md: {
        w: '40',
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
    width: 'md',
  },
})

export const ItemGroup = styled(Combobox.ItemGroup, {})

export const ItemGroupLabel = styled(Combobox.ItemGroupLabel, {})

export const Item = styled(Combobox.Item, {})

export const ItemText = styled(Combobox.ItemText, {})

export const ItemIndicator = styled(Combobox.ItemIndicator, {})
