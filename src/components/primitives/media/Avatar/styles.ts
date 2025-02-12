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

export const StatusBadge = styled('div', {
  base: {
    rounded: 'full',
    borderColor: 'bg.surface',
    position: 'absolute',
    bottom: '0',
    right: '0',
  },
  variants: {
    status: {
      doNotDisturb: {
        bg: 'bg.danger',
      },
      offline: {
        bg: 'border',
      },
    },
    size: {
      xs: {
        h: '3',
        w: '3',
        borderWidth: '2px',
      },
      sm: {
        h: '4',
        w: '4',
        borderWidth: '2px',
      },
      md: {
        h: '5',
        w: '5',
        borderWidth: '2px',
      },
      lg: {
        h: '6',
        w: '6',
        borderWidth: '3px',
      },
      xl: {
        h: '7',
        w: '7',
        borderWidth: '3px',
      },
    },
  },
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
