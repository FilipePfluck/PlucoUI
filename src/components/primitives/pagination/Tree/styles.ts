import { Pluco } from '@/pluco'
import { cva } from '@/styled-system/css'
import { TreeView } from '@ark-ui/react'

export default Pluco(TreeView, {
  Root: cva({
    base: {
      w: '80',
      bg: 'bg.surface',
      p: '4',
      rounded: 'md',
      shadow: 'md',
    },
  }),
  Tree: cva({
    base: {
      display: 'flex',
      flexDir: 'column',
      gap: '3',
    },
  }),
  Item: cva({
    base: {
      display: 'flex',
      gap: '2',
      rounded: 'md',
      color: 'fg',
      cursor: 'pointer',
      position: 'relative',
      ps: 'calc(((var(--depth) - 1) * 22px + 12px))',
      py: '1.5',
      textStyle: 'sm',
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      "&[data-depth='1']": {
        color: 'fg.important',
      },
      _hover: {
        bg: 'bg.card.hovered',
        color: 'fg.important',
      },
      _selected: {
        bg: 'bg.brand.subtle',
        color: 'fg.brand',
        _hover: {
          bg: 'bg.brand.subtle',
          color: 'fg.brand',
        },
      },
    },
  }),
  Branch: cva({
    base: {
      position: 'relative',
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
  BranchControl: cva({
    base: {
      align: 'center',
      rounded: 'md',
      color: 'fg',
      display: 'flex',
      fontWeight: 'medium',
      gap: '1.5',
      ps: 'calc((var(--depth) - 1) * 22px + 12px)',
      py: '1.5',
      textStyle: 'bodySm',
      transitionDuration: 'normal',
      transitionProperty: 'background, color',
      transitionTimingFunction: 'default',
      "&[data-depth='1']": {
        ps: '12px',
      },
      "&[data-depth='1'] > [data-part='branch-text'] ": {
        fontWeight: 'semibold',
        color: 'fg.important',
      },
      _hover: {
        background: 'bg.card.hovered',
        color: 'fg.important',
      },
    },
  }),
  BranchIndicator: cva({
    base: {
      color: 'fg',
      transformOrigin: 'center',
      transitionDuration: 'normal',
      transitionProperty: 'transform',
      transitionTimingFunction: 'default',
      iconSize: '16px',
      _open: {
        transform: 'rotate(90deg)',
      },
    },
  }),
  BranchContent: cva({
    base: {
      position: 'relative',
      display: 'flex',
      flexDir: 'column',
      gap: '2',
    },
  }),
})
