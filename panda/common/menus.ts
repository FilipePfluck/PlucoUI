import { css } from '@/styled-system/css'

export const slideAnimation = css.raw({
  _open: {
    _top: { animation: 'slideDownAndFadeIn' },
    _right: { animation: 'slideLeftAndFadeIn' },
    _bottom: { animation: 'slideUpAndFadeIn' },
    _left: { animation: 'slideRightAndFadeIn' },
  },
  _closed: {
    _top: { animation: 'slideDownAndFadeOut' },
    _right: { animation: 'slideLeftAndFadeOut' },
    _bottom: { animation: 'slideUpAndFadeOut' },
    _left: { animation: 'slideRightAndFadeOut' },
  },
})

export const menuContentBaseStyles = css.raw({
  bg: 'bg.surface',
  rounded: 'md',
  boxShadow: 'lg',
})
