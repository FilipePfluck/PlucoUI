import { styled } from '@/styled-system/jsx'
import { Editable } from '@ark-ui/react'

export const Root = styled(Editable.Root, {
  base: {
    display: 'flex',
    gap: '1.5',
    align: 'center',
  },
  variants: {
    width: {
      auto: {},
      sm: {
        w: '176px',
      },
      md: {
        w: '240px',
      },
      lg: {
        w: '350px',
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

export const Control = styled(Editable.Control, {
  base: {
    display: 'flex',
    gap: '2',
    ml: 'auto',
  },
})

export const Area = styled(Editable.Area, {
  base: {},
})

export const Input = styled(Editable.Input, {
  base: {
    maxW: 'full',
    h: '10',
    bg: 'bg.card',
    boxShadow: 'sm',
    rounded: 'md',
    transition: '0.2s',

    display: 'flex',
    align: 'center',
    px: '2',

    borderWidth: '1px',
    borderColor: {
      base: 'border',
      _focus: 'border.focused',
      _invalid: 'border.invalid',
    },
    outline: 'none',
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

export const Preview = styled(Editable.Preview, {
  base: {
    w: '100%',
    display: 'flex',
    flex: '1',
    px: '2',
    borderWidth: '1px',
    borderColor: 'transparent',
    borderStyle: 'solid',
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

export const CancelTrigger = styled(Editable.CancelTrigger, {
  base: {},
})

export const SubmitTrigger = styled(Editable.SubmitTrigger, {
  base: {},
})

export const EditTrigger = styled(Editable.EditTrigger, {
  base: {},
})
