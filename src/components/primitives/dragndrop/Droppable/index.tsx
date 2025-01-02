import { UniqueIdentifier, useDroppable } from '@dnd-kit/core'
import * as S from './styles'
import { ReactNode } from 'react'

interface DroppableProps {
  children: ReactNode
  id: UniqueIdentifier
  containsDraggable?: boolean
}

export const Droppable = ({
  children,
  id,
  containsDraggable,
}: DroppableProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  })

  return (
    <S.Container isOver={isOver} ref={setNodeRef}>
      {children}
      <S.DropText containsDraggable={containsDraggable}>Drop here</S.DropText>
    </S.Container>
  )
}
