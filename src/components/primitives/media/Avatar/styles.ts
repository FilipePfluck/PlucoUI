import { styled } from '@/styled-system/jsx'
import { Avatar } from '@ark-ui/react'

export const Root = styled(Avatar.Root, {
  base: {
    borderRadius: 'full',
    borderWidth: '1px',
    borderColor: 'border',
    borderStyle: 'solid',
    shadow: 'md',
    display: 'flex',
    center: 'flex',
  },
  variants: {
    size: {
      xs: {
        h: '8',
        w: '8',
      },
      sm: {
        h: '10',
        w: '10',
      },
      md: {
        h: '12',
        w: '12',
      },
      lg: {
        h: '16',
        w: '16',
      },
      xl: {
        h: '24',
        w: '24',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Fallback = styled(Avatar.Fallback, {
  base: {
    align: 'center',
    background: 'bg.card',
    display: 'flex',
    fontWeight: 'semibold',
    justifyContent: 'center',
    height: 'full',
    width: 'full',
    _hidden: {
      display: 'none',
    },
  },
  variants: {
    size: {
      xs: {
        textStyle: 'textXs',
        '& svg': {
          w: '4',
          h: '4',
        },
      },
      sm: {
        textStyle: 'textSm',
        '& svg': {
          w: '5',
          h: '5',
        },
      },
      md: {
        textStyle: 'textMd',
        '& svg': {
          w: '6',
          h: '6',
        },
      },
      lg: {
        textStyle: 'textMd',
        '& svg': {
          w: '8',
          h: '8',
        },
      },
      xl: {
        textStyle: 'textLg',
        '& svg': {
          w: '12',
          h: '12',
        },
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export const Image = styled(Avatar.Image, {
  base: {
    objectFit: 'cover',
  },
  variants: {
    size: {
      xs: {
        h: '8',
        w: '8',
      },
      sm: {
        h: '10',
        w: '10',
      },
      md: {
        h: '12',
        w: '12',
      },
      lg: {
        h: '16',
        w: '16',
      },
      xl: {
        h: '24',
        w: '24',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})
