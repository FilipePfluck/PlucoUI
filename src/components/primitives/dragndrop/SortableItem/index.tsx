import { UniqueIdentifier } from '@dnd-kit/core'
import {
  AnimateLayoutChanges,
  NewIndexGetter,
  useSortable,
} from '@dnd-kit/sortable'

import { Item } from '../Item'

interface SortableItemProps {
  animateLayoutChanges?: AnimateLayoutChanges
  disabled?: boolean
  getNewIndex?: NewIndexGetter
  id: UniqueIdentifier
  useDragOverlay?: boolean
  onRemove?(id: UniqueIdentifier): void
}

export const SortableItem = ({
  id,
  animateLayoutChanges,
  disabled,
  getNewIndex,
  useDragOverlay,
}: SortableItemProps) => {
  const { isDragging, listeners, setNodeRef, transform, transition } =
    useSortable({
      id,
      animateLayoutChanges,
      disabled,
      getNewIndex,
    })

  return (
    <Item
      id={id}
      isDragging={isDragging}
      listeners={listeners}
      setNodeRef={setNodeRef}
      transform={transform}
      transition={transition}
      dragOverlay={!useDragOverlay && isDragging}
    />
  )
}
