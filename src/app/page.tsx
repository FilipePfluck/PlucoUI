'use client'

import { css } from '@/styled-system/css'

export default function Home() {
  return (
    <div
      className={css({
        position: 'absolute',
        center: 'absolute',
        p: '4',
        rounded: 'md',
        borderWidth: '1px',
        borderColor: 'border',

        focusRing: 'outside',
      })}
    >
      Hello
    </div>
  )
}
