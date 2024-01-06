import { styled } from '@/styled-system/jsx'

export const InputContainer = styled('label', {
  base: {
    maxW: 'full',
    bg: 'bg.card',
    boxShadow: 'sm',
    transition: '0.2s',

    display: 'flex',
    align: 'center',
    gap: '2',

    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focusWithin: 'border.brand',
      _invalidWithin: 'border.danger',
    },
    '&:has(:disabled)': {
      bg: 'bg.component.hovered',
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
    _placeholder: {
      color: {
        base: 'fg.subtle',
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

// ts is complaining about the arbitrary selectors
// but they are valid and working
// this is a known issue: https://github.com/chakra-ui/panda/issues/1186
// @ts-ignore
export const InputIcon = styled('div', {
  base: {
    fontSize: 'md',
    transition: '0.2s',
    color: 'fg.subtle' /* {
      base: 'border.brand',
      '.group:has(:disabled) &': 'fg.muted',
      '.group:has([aria-invalid="true"]) &': 'border.danger',
      '.group:has(:focus-within) &': 'border.brand',
    } */,
  },
})
