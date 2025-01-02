import { UniqueIdentifier } from '@dnd-kit/core'
import * as S from './styles'
import { Transform } from '@dnd-kit/utilities'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'

interface ItemProps {
  id: UniqueIdentifier
  useDragOverlay?: boolean
  dragOverlay?: boolean
  transform?: Transform | null
  setNodeRef?: (node: HTMLElement | null) => void
  isDragging?: boolean
  listeners?: SyntheticListenerMap | undefined
  transition?: string
}

export const Item = ({
  id,
  transform,
  setNodeRef,
  isDragging,
  listeners,
  dragOverlay,
  transition,
}: ItemProps) => {
  return (
    <S.Wrapper
      style={{
        transition,
        // eslint-disable-next-line
        // @ts-ignore
        '--translate-x': transform ? `${Math.round(transform.x)}px` : undefined,
        '--translate-y': transform ? `${Math.round(transform.y)}px` : undefined,
        '--scale-x': transform?.scaleX ? `${transform.scaleX}` : undefined,
        '--scale-y': transform?.scaleY ? `${transform.scaleY}` : undefined,
      }}
      ref={setNodeRef}
      overlay={dragOverlay}
    >
      <S.Item
        isDragging={isDragging}
        overlay={dragOverlay}
        tabIndex={0}
        {...listeners}
      >
        {id}
      </S.Item>
    </S.Wrapper>
  )
}
