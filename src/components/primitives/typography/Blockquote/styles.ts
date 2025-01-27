import { styled } from '@/styled-system/jsx'

export const Root = styled('div', {
  base: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: '2',

    align: 'flex-start',
    textAlign: 'start',

    paddingX: '5',
    borderStartWidth: '4px',
    borderStartColor: 'border.disabled',
  },

  variants: {
    variant: {
      primary: {
        borderStartColor: 'border.brand.subtle',
      },
      secondary: {
        borderStartColor: 'border.disabled',
      },
    },
  },

  defaultVariants: {
    variant: 'secondary',
  },
})

export const Caption = styled('p', {
  base: {
    textStyle: 'bodySm',
    color: 'fg.unimportant',
  },
})
