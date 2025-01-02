import { UniqueIdentifier } from '@dnd-kit/core'
import {
  AnimateLayoutChanges,
  defaultAnimateLayoutChanges,
  useSortable,
} from '@dnd-kit/sortable'
import { ReactNode } from 'react'
import { Container } from '../Container'
import { CSS } from '@dnd-kit/utilities'

interface DroppableContainerProps {
  id: UniqueIdentifier
  items: UniqueIdentifier[]
  children: ReactNode
  label: string
}

const animateLayoutChanges: AnimateLayoutChanges = (args) =>
  defaultAnimateLayoutChanges({ ...args, wasDragging: true })

export const DroppableContainer = ({
  children,
  id,
  items,
  label,
}: DroppableContainerProps) => {
  const {
    active,
    attributes,
    isDragging,
    listeners,
    over,
    setNodeRef,
    transition,
    transform,
  } = useSortable({
    id,
    data: {
      type: 'container',
      children: items,
    },
    animateLayoutChanges,
  })

  const isOverContainer = over
    ? (id === over.id && active?.data.current?.type !== 'container') ||
      items.includes(over.id)
    : false

  return (
    <Container
      ref={setNodeRef}
      isOver={isOverContainer}
      style={{
        transition,
        transform: CSS.Translate.toString(transform),
        opacity: isDragging ? 0.6 : undefined,
      }}
      handleProps={{ ...attributes, ...listeners }}
      label={label}
    >
      {children}
    </Container>
  )
}
