import { styled } from '@/styled-system/jsx'
import { RatingGroup } from '@ark-ui/react'

export const Root = styled(RatingGroup.Root, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})

export const Label = styled(RatingGroup.Label, {})

export const Control = styled(RatingGroup.Control, {
  base: {
    display: 'flex',
    gap: '1',
  },
})

export const Item = styled(RatingGroup.Item, {
  base: {
    transition: '0.2s',
    '&:not([data-readonly])': {
      cursor: 'pointer',
    },
    '&[data-highlighted="true"]': {
      color: 'bg.brand.solid',
    },
  },
})
