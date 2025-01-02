import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Container = styled(
  'div',
  cva({
    base: {
      p: '12',
      w: '60',
      h: '80',
      rounded: 'lg',
      bg: 'gray.100',
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    variants: {
      isOver: {
        true: {
          border: '2px solid token(colors.green.500)',
        },
        false: {
          border: '2px solid token(colors.gray.400)',
        },
      },
    },
  }),
)

export const DropText = styled(
  'p',
  cva({
    base: {},
    variants: {
      containsDraggable: {
        true: {
          fontSize: '16px',
          color: 'gray.600',
          mt: 'auto',
        },
        false: {
          fontSize: '24px',
          color: 'gray.800',
        },
      },
    },
  }),
)
