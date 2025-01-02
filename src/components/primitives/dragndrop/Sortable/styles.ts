import { cva } from '@/styled-system/css'
import { styled } from '@/styled-system/jsx'

export const Wrapper = styled(
  'div',
  cva({
    base: {
      display: 'flex',
      w: 'max-content',
      p: '5',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
  }),
)

export const Container = styled(
  'ul',
  cva({
    base: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '3',
      p: '5',
    },
  }),
)
