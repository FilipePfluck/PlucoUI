import { styled } from '@/styled-system/jsx'

export const InputContainer = styled('label', {
  base: {
    maxW: 'full',
    h: '10',
    bg: 'bg.surface',
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
      bg: 'bg.disabled',
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
    w: 'full',
    // h: '10',
    bg: 'transparent',
    color: 'fg',
    fontSize: 'sm',
    outline: 'none',
    _placeholder: {
      color: 'fg.unimportant',
      fontSize: 'sm',
      userSelect: 'none',
    },
    _disabled: {
      cursor: 'not-allowed',
      color: 'fg.disabled',

      '&::placeholder': {
        color: 'fg.disabled',
      },
    },

    // the code below is to prevent the autofill
    // from changing the background of the input
    // the reason I am setting borders is because
    // otherwise the boxShadow would cover the container borders

    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.surface) inset',
      WebkitTextFillColor: 'token(colors.fg)',
      caretColor: 'fg',
    },
    transition: 'border-color 0.2s',
  },
})

// @ts-ignore
export const InputIcon = styled('div', {
  base: {
    '& svg': {
      transition: '0.2s',
    },
    '.group:has(:disabled) &': {
      iconColor: 'fg.disabled',
    },
    '.group:has([aria-invalid="true"]) &': {
      iconColor: 'border.danger',
    },
    '.group:has(:focus-within) &': {
      iconColor: 'border.brand',
    },
  },
})
