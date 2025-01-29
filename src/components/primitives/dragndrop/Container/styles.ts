import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const StyledContainer = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gridAutoRows: 'max-content',
      overflow: 'hidden',
      appearance: 'none',
      outline: 'none',
      minW: '80',
      minH: '200px',
      m: '3',
      rounded: 'sm',
      transition: 'background-color 350ms ease',
      bg: 'bg.surface.hovered',
      border: '1px solid rgba(0, 0, 0, 0.05)',

      _focusVisible: {
        borderColor: 'transparent',
        boxShadow: '0 0 0 2px rgba(255, 255, 255, 0), 0 0px 0px 2px #4c9ffe',
      },
    },
    variants: {
      dragOver: {
        true: {
          bg: 'gray.400',
        },
        false: {},
      },
    },
  }),
)

export const Grid = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      gridGap: '3',
      gridTemplateColumns: '1fr 1fr',
      listStyle: 'none',
      p: '5',
      m: '0',
    },
  }),
)

export const Header = styled(
  'header',
  cva({
    base: {
      display: 'flex',
      px: '5',
      py: '2',
      pr: '2',
      alignItems: 'center',
      justifyContent: 'space-between',
      bg: 'bg.surface',
      borderTopRadius: '1',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
    },
  }),
)

export const Handle = styled(
  'button',
  cva({
    base: {
      bg: 'transparent',
      rounded: 'md',
      cursor: 'pointer',
      px: '2',
      py: '3',
      transition: '0.2s',
      _hover: {
        bg: 'bg.surface.hovered',
      },
    },
  }),
)
