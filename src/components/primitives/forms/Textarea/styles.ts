import { styled } from '@/styled-system/jsx'

export const TextareaContainer = styled('textarea', {
  base: {
    maxW: 'full',
    bg: 'bg.component',
    boxShadow: 'sm',
    transition: '0.2s',

    display: 'flex',
    align: 'center',
    gap: '2',
    rounded: 'md',

    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focus: 'border.brand',
    },
    '&[aria-invalid]': { borderColor: 'border.danger' },

    color: 'fg',
    fontSize: 'sm',
    outline: 'none',
    _placeholder: {
      color: {
        base: 'fg.muted',
      },
      fontSize: 'sm',
    },
    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.component) inset',
      WebkitTextFillColor: 'token(colors.fg)',
      caretColor: 'fg',
    },
    _disabled: {
      bg: 'bg.component.hovered',
      cursor: 'not-allowed',
      color: 'fg.muted',
    },
  },

  variants: {
    size: {
      sm: {
        p: '2',
      },
      md: {
        p: '4',
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
  },

  defaultVariants: {
    size: 'md',
    width: 'auto',
  },
})
