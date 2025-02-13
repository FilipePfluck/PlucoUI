import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'
import { Avatar } from '@ark-ui/react'
import { Group } from '../../layout/Group'

export default Pluco(Avatar, {
  Root: cva({
    base: {
      borderRadius: 'full',
      borderStyle: 'solid',
      shadow: 'md',
      display: 'flex',
      center: 'flex',
      position: 'relative',
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
  }),
  Fallback: cva({
    base: {
      align: 'center',
      borderRadius: 'full',
      background: 'bg.surface',
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
          fontSize: '12px',
          iconSize: '16px',
        },
        sm: {
          fontSize: '14px',
          iconSize: '20px',
        },
        md: {
          fontSize: '16px',
          iconSize: '24px',
        },
        lg: {
          fontSize: '24px',
          iconSize: '32px',
        },
        xl: {
          fontSize: '36px',
          iconSize: '48px',
        },
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }),
  Image: cva({
    base: {
      objectFit: 'cover',
      borderRadius: 'full',
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
  }),
})

export const AvatarGroup = styled(Group, {
  base: {
    display: 'flex',
    flexDir: 'row',
    gap: '0',

    '& > [data-group-item]:not(:first-child)': {
      ml: '-12px',
    },
  },
})
