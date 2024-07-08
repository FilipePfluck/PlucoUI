import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { Clipboard } from '@ark-ui/react'

export default Pluco(Clipboard, {
  Root: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '1.5',
    },
  }),
  Control: cva({
    base: {
      display: 'flex',
      gap: '1.5',
    },
  }),
})
