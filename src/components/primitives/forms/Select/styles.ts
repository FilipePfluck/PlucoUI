import { styled } from '@/styled-system/jsx'
import { Select } from '@ark-ui/react'

export const Root = styled(Select.Root, {
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3',
  },
})

export const Label = styled(Select.Label, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
  },
})

export const Control = styled(Select.Control, {
  base: {
    position: 'relative',
  },
})

export const Trigger = styled(Select.Trigger, {
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
        '& + button': {
          '--select-clear-trigger-right': '0px',
        },
      },
      md: {
        w: '40',
        px: '2',
        py: '1',
        '& + button': {
          '--select-clear-trigger-right': '4px',
        },
      },
      lg: {
        w: '64',
        px: '4',
        py: '2',
        '& + button': {
          '--select-clear-trigger-right': '12px',
        },
      },
      full: {
        w: 'full',
        px: '4',
        py: '2',
        '& + button': {
          '--select-clear-trigger-right': '12px',
        },
      },
    },
  },
  defaultVariants: {
    width: 'md',
  },
})

export const ClearTrigger = styled(Select.ClearTrigger, {
  base: {
    p: '1',
    position: 'absolute',
    right: 'var(--select-clear-trigger-right) !important',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const ValueText = styled(Select.ValueText, {})

export const Indicator = styled(Select.Indicator, {
  base: {
    visibility: 'visible',
    // when the trigger is clearable and the placeholder is not shown (i.e there is a selected item)
    // the indicator will be hidden to create space to show the clear button
    '[data-clearable]:not([data-placeholder-shown]) &': {
      visibility: 'hidden',
    },
  },
})

export const Positioner = styled(Select.Positioner, {})

export const Content = styled(Select.Content, {
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

export const ItemGroup = styled(Select.ItemGroup, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: 1,
  },
})

export const ItemGroupLabel = styled(Select.ItemGroupLabel, {
  base: {
    textStyle: 'headingXs',
    color: 'fg',
    mb: 1,
    px: 1,
    pt: 1,
  },
})

export const Item = styled(Select.Item, {
  base: {
    display: 'flex',
    align: 'center',
    justify: 'space-between',
    px: 1,

    borderRadius: 'sm',
    cursor: 'pointer',

    transitionDuration: 'fast',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',

    _hover: {
      background: 'bg.brand',
      color: 'white',
    },
    _highlighted: {
      background: 'bg.brand',
      color: 'white',
    },
    _selected: {
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
})

export const ItemText = styled(Select.ItemText, {
  base: {
    color: 'inherit',
  },
})

export const ItemIndicator = styled(Select.ItemIndicator, {
  base: {
    color: 'brand',
  },
})

export const Separator = styled('div', {
  base: {
    w: 'full',
    h: '1px',
    bg: 'border',
  },
})
