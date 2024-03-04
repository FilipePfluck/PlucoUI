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
      _invalidWithin: 'border.invalid',
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
    h: '10',
    bg: 'transparent',
    color: 'fg',
    fontSize: 'sm',
    outline: 'none',
    _placeholder: {
      color: 'fg.unimportant',
      fontSize: 'sm',
    },
    _disabled: {
      cursor: 'not-allowed',
      color: 'fg.muted',

      '&::placeholder': {
        color: 'fg.muted',
      },
    },

    // the code below is to prevent the autofill
    // from changing the background of the input
    // the reason I am setting borders is because
    // otherwise the boxShadow would cover the container borders

    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.card) inset',
      WebkitTextFillColor: 'token(colors.fg)',
      caretColor: 'fg',
    },
    transition: 'border-color 0.2s',
    borderStyle: 'solid',
    borderYWidth: '1px',
    borderYColor: {
      base: 'border',
      _ariaInvalid: 'border.invalid',
      _disabled: 'border.disabled',
    },

    // the reason I am checking for focus-within the label
    // instead of focus on the input
    // is because if there is focus inside a button inside the label
    // the label would have a purple border and the input not

    'label:focus-within &': {
      borderYColor: 'border.focused !important',
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
    '& svg': {
      transition: '0.2s',
    },
    '.group:has(:disabled) & svg': {
      stroke: 'fg.muted',
    },
    '.group:has([aria-invalid="true"]) & svg': {
      stroke: 'border.invalid',
    },
    '.group:has(:focus-within) & svg': {
      stroke: 'border.focused',
    },
  },
})
