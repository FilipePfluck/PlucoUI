import { styled } from '@/styled-system/jsx'

export const TextareaContainer = styled('textarea', {
  base: {
    maxW: 'full',
    bg: 'bg.card',
    boxShadow: 'sm',
    transition: '0.2s',

    display: 'flex',
    align: 'center',
    gap: '2',
    rounded: 'md',

    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focus: 'border.focused',
    },
    '&[aria-invalid]': { borderColor: 'border.danger' },

    color: 'fg',
    fontSize: 'sm',
    outline: 'none',
    _placeholder: {
      color: {
        base: 'fg.unimportant',
      },
      fontSize: 'sm',
    },
    _autofill: {
      boxShadow: '0 0 0px 1000px token(colors.bg.card) inset',
      WebkitTextFillColor: 'token(colors.fg.important)',
      caretColor: 'fg',
    },
    _disabled: {
      bg: 'bg.disabled',
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
