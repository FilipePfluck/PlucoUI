import { styled } from '@/styled-system/jsx'

export const Root = styled('div', {
  base: {
    w: 'full',
    display: 'flex',
    align: 'center',
    // justify: 'space-between',
    gap: '1',
  },
})

export const Label = styled('label', {
  base: {
    textStyle: 'headingXs',
    color: 'fg.important',
  },
})

export const RequiredIndicator = styled('span', {
  base: {
    color: 'fg.danger',
    textStyle: 'bodySm',
  },
})
