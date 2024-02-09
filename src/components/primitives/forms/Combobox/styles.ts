import { styled } from '@/styled-system/jsx'
import { Combobox } from '@ark-ui/react'

export const Root = styled(Combobox.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3',
  },
})

export const Label = styled(Combobox.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
  },
})

export const Control = styled(Combobox.Control, {
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
    minH: '10',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: { base: 'border', _focus: 'border.focused' },
    borderRadius: 'md',
    cursor: 'pointer',

    bg: 'bg.card',
    boxShadow: 'sm',

    outline: 0,
    position: 'relative',
    transitionDuration: 'normal',
    transitionProperty: 'background, box-shadow, border-color',
    transitionTimingFunction: 'default',
    color: 'fg',
    width: 'full',
    _placeholder: {
      color: 'fg',
    },
    '& :where(svg)': {
      color: 'fg',
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

export const Trigger = styled(Combobox.Trigger, {
  base: {
    bottom: '0',
    color: 'fg',
    position: 'absolute',
    // TODO - improve this later
    right: '2',
    top: '0',
  },
})

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
    w: 'full',

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
})

export const ItemGroup = styled(Combobox.ItemGroup, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '0.5',
  },
})

export const ItemGroupLabel = styled(Combobox.ItemGroupLabel, {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
    mb: 1,
    px: 1,
    pt: 1,
  },
  variants: {
    showIndicator: {
      true: {
        pl: '8',
      },
      false: {},
    },
  },
  defaultVariants: {
    showIndicator: false,
  },
})

export const Item = styled(Combobox.Item, {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    px: 1,
    py: '0.5',
    position: 'relative',

    borderRadius: 'sm',
    cursor: 'pointer',

    transitionDuration: 'fast',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',

    _selected: {
      color: 'fg.important',
    },
    _hover: {
      background: 'bg.brand.solid',
      color: 'white',
    },
    _highlighted: {
      background: 'bg.brand.solid',
      color: 'white',
    },
    _disabled: {
      bg: 'transparent',
      color: 'fg.muted',
      cursor: 'not-allowed',
      _hover: {
        background: 'transparent',
        color: 'fg.muted',
      },
    },
  },
  variants: {
    showIndicator: {
      true: {
        pl: '8',
      },
      false: {},
    },
  },
  defaultVariants: {
    showIndicator: false,
  },
})

export const ItemText = styled(Combobox.ItemText, {
  base: {
    color: 'inherit',
  },
})

export const ItemIndicator = styled(Combobox.ItemIndicator, {})
