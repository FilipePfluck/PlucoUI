import { styled } from '@/styled-system/jsx'
import { Toast } from '@ark-ui/react'

export const Root = styled(Toast.Root, {
  base: {
    bg: 'bg.card',
    rounded: 'md',
    shadow: 'xl',
    minW: '60',
    p: '4',
    position: 'relative',

    _open: {
      animation: 'slideInToast',
    },

    _closed: {
      animation: 'slideOutToast',
    },
  },
})

export const Title = styled(Toast.Title, {
  base: {
    color: 'fg',
    textStyle: 'headingXs',
  },
})

export const Description = styled(Toast.Description, {
  base: {
    color: 'fg.subtle',
    textStyle: 'textSm',
  },
})

export const CloseTrigger = styled(Toast.CloseTrigger, {
  base: {
    position: 'absolute',
    top: '3',
    right: '3',
  },
})
