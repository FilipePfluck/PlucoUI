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
    color: 'fg.important',
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
        py: '2',
        px: '2',
        '& + button': {
          '--select-clear-trigger-right': '6px',
        },
      },
      md: {
        w: '40',
        py: '2',
        px: '3',
        '& + button': {
          '--select-clear-trigger-right': '9px',
        },
      },
      lg: {
        w: '64',
        py: '2',
        px: '4',
        '& + button': {
          '--select-clear-trigger-right': '12px',
        },
      },
      full: {
        w: 'full',
        py: '2',
        px: '4',
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
    '[data-clearable="true"]:not([data-placeholder-shown]) &': {
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
    gap: '0.5',
  },
})

export const ItemGroupLabel = styled(Select.ItemGroupLabel, {
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

export const Item = styled(Select.Item, {
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
      iconColor: 'white',
    },
    _highlighted: {
      background: 'bg.brand.solid',
      color: 'white',
      iconColor: 'white',
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

export const ItemText = styled(Select.ItemText, {
  base: {
    color: 'inherit',
  },
})

export const ItemIndicator = styled(Select.ItemIndicator, {
  base: {
    position: 'absolute',
    left: '2',
    top: '50%',
    transform: 'translateY(-50%)',
  },
})

export const Separator = styled('div', {
  base: {
    w: 'full',
    h: '1px',
    bg: 'border',
  },
})
