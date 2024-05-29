import { styled } from '@/styled-system/jsx'
import { Splitter } from '@ark-ui/react'

export const Root = styled(Splitter.Root, {
  base: {
    display: 'flex',
    gap: '2',
  },
})

export const Panel = styled(Splitter.Panel, {
  base: {
    borderWidth: '1px',
    borderColor: 'border',
    bg: 'bg.surface',
    rounded: 'md',
    color: 'fg',
    display: 'flex',
    align: 'center',
    justify: 'center',
  },
})

export const ResizeTrigger = styled(Splitter.ResizeTrigger, {
  base: {
    rounded: 'full',
    outline: '0',
    background: 'border',

    transitionDuration: 'normal',
    transitionProperty: 'background',
    transitionTimingFunction: 'default',

    _horizontal: {
      minWidth: '1.5',
      margin: 'min(1rem, 20%) 0',
    },
    _vertical: {
      minHeight: '1.5',
      margin: '0 min(1rem, 20%)',
    },
  },
})
