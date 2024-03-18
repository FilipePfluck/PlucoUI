import { type TreeViewRootProps } from '@ark-ui/react/tree-view'

import * as S from './styles'
import { forwardRef } from 'react'
import { ChevronRightIcon } from 'lucide-react'

interface Child {
  id: string
  name: string
  children?: Child[]
}

export interface TreeViewData {
  label: string
  children: Child[]
}

export interface TreeViewProps extends TreeViewRootProps {
  data: TreeViewData
}

export const TreeView = forwardRef<HTMLDivElement, TreeViewProps>(
  ({ data, ...props }, ref) => {
    const renderChild = (child: Child) => (
      <S.Branch key={child.id} id={child.id}>
        <S.BranchControl>
          <S.BranchIndicator>
            <ChevronRightIcon />
          </S.BranchIndicator>
          <S.BranchText>{child.name}</S.BranchText>
        </S.BranchControl>
        <S.BranchContent>
          {child.children?.map((child) =>
            child.children ? (
              renderChild(child)
            ) : (
              <S.Item key={child.id} id={child.id}>
                <S.ItemText>{child.name}</S.ItemText>
              </S.Item>
            ),
          )}
        </S.BranchContent>
      </S.Branch>
    )

    return (
      <S.Root ref={ref} aria-label={data.label} {...props}>
        <S.Tree>{data.children.map(renderChild)}</S.Tree>
      </S.Root>
    )
  },
)

TreeView.displayName = 'TreeView'
