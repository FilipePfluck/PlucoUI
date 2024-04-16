import { styled } from '@/styled-system/jsx'
import { Clipboard } from '@ark-ui/react'

export const Root = styled(Clipboard.Root, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '1.5',
  },
})

export const Control = styled(Clipboard.Control, {
  base: {
    display: 'flex',
    gap: '1.5',
  },
})

export const Input = styled(Clipboard.Input, {
  base: {},
})

export const Trigger = styled(Clipboard.Trigger, {
  base: {},
})

export const Indicator = styled(Clipboard.Indicator, {
  base: {},
})
