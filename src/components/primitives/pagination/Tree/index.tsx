import {
  TreeViewNodeProviderProps,
  type TreeViewRootProps,
} from '@ark-ui/react/tree-view'

import S from './styles'
import { ChevronRightIcon, FileIcon, FolderIcon } from 'lucide-react'
import { TreeCollection } from '@ark-ui/react/collection'

interface Child {
  id: string
  name: string
  children?: Child[]
}

interface Node {
  id: string
  name: string
  children?: Node[]
}

export interface TreeViewData {
  label: string
  children: Child[]
}

// TODO - update tree componente to new ark version

export interface TreeViewProps extends TreeViewRootProps<Node> {
  data: TreeCollection<Node>
}

export const Tree = ({ data }: TreeViewProps) => {
  return (
    <S.Root collection={data as TreeCollection<unknown>}>
      <S.Tree>
        {data.rootNode.children?.map((node, index) => (
          <TreeNode key={node.id} node={node} indexPath={[index]} />
        ))}
      </S.Tree>
    </S.Root>
  )
}

const TreeNode = (props: TreeViewNodeProviderProps<Node>) => {
  const { node, indexPath } = props
  return (
    <S.NodeProvider key={node.id} node={node} indexPath={indexPath}>
      {node.children ? (
        <S.Branch>
          <S.BranchControl>
            <FolderIcon />
            <S.BranchText>{node.name}</S.BranchText>
            <S.BranchIndicator>
              <ChevronRightIcon />
            </S.BranchIndicator>
          </S.BranchControl>
          <S.BranchContent>
            <S.BranchIndentGuide />
            {node.children.map((child, index) => (
              <TreeNode
                key={child.id}
                node={child}
                indexPath={[...indexPath, index]}
              />
            ))}
          </S.BranchContent>
        </S.Branch>
      ) : (
        <S.Item>
          <FileIcon />
          <S.ItemText>{node.name}</S.ItemText>
        </S.Item>
      )}
    </S.NodeProvider>
  )
}
