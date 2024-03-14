import { styled } from '@/styled-system/jsx'
import { TreeView } from '@ark-ui/react'

export const Root = styled(TreeView.Root, {
  base: {
    w: 'full',
  },
})

export const Tree = styled(TreeView.Tree, {})

export const Item = styled(TreeView.Item, {})

export const ItemText = styled(TreeView.ItemText, {})

export const ItemIndicator = styled(TreeView.ItemIndicator, {})

export const Branch = styled(TreeView.Branch, {
  base: {
    "&[data-depth='1'] > [data-part='branch-content']": {
      _before: {
        bg: 'border.default',
        content: '""',
        height: 'full',
        left: '3',
        position: 'absolute',
        width: '1px',
        zIndex: '1',
      },
    },
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

export const BranchIndicator = styled(TreeView.BranchIndicator, {})

export const BranchContent = styled(TreeView.BranchContent, {
  base: {
    position: 'relative',
  },
})
