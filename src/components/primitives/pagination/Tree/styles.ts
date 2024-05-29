import { styled } from '@/styled-system/jsx'
import { TreeView } from '@ark-ui/react'

export const Root = styled(TreeView.Root, {
  base: {
    w: '80',
    bg: 'bg.card',
    p: '3',
    rounded: 'md',
    shadow: 'md',
  },
})

export const Tree = styled(TreeView.Tree, {
  base: {
    display: 'flex',
    flexDir: 'column',
    gap: '3',
  },
})

export const Item = styled(TreeView.Item, {
  base: {
    rounded: 'md',
    color: 'fg',
    cursor: 'pointer',
    position: 'relative',
    ps: 'calc(((var(--depth) - 1) * 22px) + 22px)',
    py: '1.5',
    textStyle: 'sm',
    transitionDuration: 'normal',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',
    "&[data-depth='1']": {
      ps: '6',
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
})

export const ItemText = styled(TreeView.ItemText, {})

export const ItemIndicator = styled(TreeView.ItemIndicator, {})

export const Branch = styled(TreeView.Branch, {
  base: {
    position: 'relative',
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})

export const BranchControl = styled(TreeView.BranchControl, {
  base: {
    align: 'center',
    rounded: 'md',
    color: 'fg',
    display: 'flex',
    fontWeight: 'medium',
    gap: '1.5',
    ps: 'calc((var(--depth) - 1) * 22px)',
    py: '1.5',
    textStyle: 'bodySm',
    transitionDuration: 'normal',
    transitionProperty: 'background, color',
    transitionTimingFunction: 'default',
    "&[data-depth='1']": {
      ps: '1',
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
})

export const BranchText = styled(TreeView.BranchText, {})

export const BranchIndicator = styled(TreeView.BranchIndicator, {
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
})

export const BranchContent = styled(TreeView.BranchContent, {
  base: {
    position: 'relative',
    display: 'flex',
    flexDir: 'column',
    gap: '2',
  },
})
