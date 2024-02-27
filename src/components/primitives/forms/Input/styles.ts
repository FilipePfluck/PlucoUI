import { styled } from '@/styled-system/jsx'

export const InputContainer = styled('label', {
  base: {
    maxW: 'full',
    h: '10',
    bg: 'bg.card',
    boxShadow: 'sm',
    transition: '0.2s',

    display: 'flex',
    align: 'center',
    gap: '2',

    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focusWithin: 'border.focused',
      _invalidWithin: 'border.danger',
    },
    '&:has(:disabled)': {
      // bg: 'transparent',
      borderColor: 'border.disabled',
      cursor: 'not-allowed',
    },
  },

  variants: {
    size: {
      sm: {
        px: '2',
      },
      md: {
        px: '4',
      },
    },

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

    roundedCorners: {
      none: {},
      right: {
        borderRightRadius: 'md',
      },
      left: {
        borderLeftRadius: 'md',
      },
      all: {
        rounded: 'md',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    width: 'auto',
    roundedCorners: 'all',
  },
})

export const Input = styled('input', {
  base: {
    maxW: 'full',
    bg: 'transparent',
    color: 'fg',
    fontSize: 'sm',
    outline: 'none',
    '&::placeholder': {
      color: {
        _disabled: 'fg.muted !important',
        base: 'fg.unimportant',
      },
      fontSize: 'sm',
    },
    _disabled: {
      cursor: 'not-allowed',
      color: 'fg.muted',
    },
    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.component) inset',
      WebkitTextFillColor: 'token(colors.fg)',
      caretColor: 'fg',
    },
  },

  variants: {
    size: {
      sm: {
        py: '1',
      },
      md: {
        py: '2',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

// @ts-ignore
export const InputIcon = styled('div', {
  base: {
    fontSize: 'md',
    transition: '0.2s',
    color: 'fg',
    '.group:has(:disabled) & svg': {
      stroke: 'fg.muted',
    },
    '.group:has([aria-invalid="true"]) & svg': {
      stroke: 'border.danger',
    },
    '.group:has(:focus-within) & svg': {
      stroke: 'border.brand',
    },
  },
})
