import { styled } from '@/styled-system/jsx'

export const InputOuterContainer = styled('div', {
  base: {
    display: 'flex',
    align: 'center',
  },
})

export const InputContainer = styled('label', {
  base: {
    maxW: 'full',
    bg: 'bg.surface',
    boxShadow: 'sm',
    transition: '0.2s',
    cursor: 'text',

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
    rounded: 'md',

    // this checks if the input is inside an outer container
    // i.e. it has addons
    '.input-outer-container > &': {
      // this checks if it isn't the first child
      // i.e. there is a start addon
      '&:not(:first-child)': {
        borderStartRadius: '0px',
      },
      // this checks if it isn't the last child
      // i.e. there is an end addon
      '&:not(:last-child)': {
        borderEndRadius: '0px',
      },
    },
  },
  variants: {
    size: {
      xs: {
        px: '1',
        h: '8',
      },
      sm: {
        px: '2',
        h: '9',
      },
      md: {
        px: '3',
        h: '10',
      },
      lg: {
        px: '4',
        h: '11',
      },
    },
    full: {
      true: {
        w: 'full',
      },
      false: {
        w: 'max-content',
      },
    },
  },
  defaultVariants: {
    full: true,
    size: 'md',
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

    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.surface) inset',
      WebkitTextFillColor: 'token(colors.fg)',
      caretColor: 'fg',
    },
    transition: 'border-color 0.2s',
  },
})

export const InputAditionalElement = styled('div', {
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

export const InputAddon = styled('div', {
  base: {
    flex: '0 0 auto',
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    textStyle: 'bodySm',
    userSelect: 'none',
    color: 'fg.unimportant',
    bg: 'bg.surface.hovered',
    borderWidth: '1px',
    borderColor: 'border',
  },
  variants: {
    size: {
      xs: {
        px: '1',
        h: '8',
      },
      sm: {
        px: '2',
        h: '9',
      },
      md: {
        px: '3',
        h: '10',
      },
      lg: {
        px: '4',
        h: '11',
      },
    },
    side: {
      start: {
        borderStartRadius: 'md',
        borderEndWidth: '0px',
      },
      end: {
        borderEndRadius: 'md',
        borderStartWidth: '0px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    side: 'start',
  },
})
