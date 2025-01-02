'use client'

import {
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  defaultDropAnimationSideEffects,
  getFirstCollision,
  pointerWithin,
  rectIntersection,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { useCallback, useEffect, useRef, useState } from 'react'

import { coordinateGetter } from '@/utils/multipleContainersKeyboardCoordinates'
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from '@dnd-kit/sortable'
import { Box } from '@/styled-system/jsx'
import { DroppableContainer } from '../DroppableContainer'
import { Container } from '../Container'
import { createPortal } from 'react-dom'
import { SortableItem } from '../SortableItem'
import { Item } from '../Item'

type Items = Record<UniqueIdentifier, UniqueIdentifier[]>

const dropAnimation: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.6',
      },
    },
  }),
}

export const MultipleContainers = () => {
  const [isInClient, setIsInClient] = useState(false)

  const [items, setItems] = useState<Items>({
    A: ['A1', 'A2', 'A3'],
    B: ['B1', 'B2', 'B3'],
    C: ['C1', 'C2', 'C3'],
  })
  const [clonedItems, setClonedItems] = useState<Items | null>(null)
  const [containers, setContainers] = useState(
    Object.keys(items) as UniqueIdentifier[],
  )

  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const lastOverId = useRef<UniqueIdentifier | null>(null)
  const recentlyMovedToNewContainer = useRef(false)

  // sensors are abstractions to detect different input methods, such as mouse and keyboard
  // https://docs.dndkit.com/api-documentation/sensors
  // here we're using default sensors for mouse and touch
  // and a custom one for keyboard, imported from '@/utils/multipleContainersKeyboardCoordinates'

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter,
    }),
  )

  useEffect(() => {
    setIsInClient(true)
  }, [])

  /*
   Custom collision detection strategy optimized for multiple containers
   - First, find any droppable containers intersecting with the pointer.
   - If there are none, find intersecting containers with the active draggable.
   - If there are no intersecting containers, return the last matched intersection
  */

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items,
          ),
        })
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args)
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args)
      let overId = getFirstCollision(intersections, 'id')

      if (overId != null) {
        if (overId in items) {
          const containerItems = items[overId]

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.includes(container.id),
              ),
            })[0]?.id
          }
        }

        lastOverId.current = overId

        return [{ id: overId }]
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        lastOverId.current = activeId
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    [activeId, items],
  )

  const findContainer = (id: UniqueIdentifier) => {
    if (id in items) {
      return id
    }

    return Object.keys(items).find((key) => items[key].includes(id))
  }

  const handleDragStart = ({ active }: DragStartEvent) => {
    setActiveId(active.id)
    setClonedItems(items)
  }

  const handleDragOver = ({ active, over }: DragOverEvent) => {
    const overId = over?.id

    // if it is over nothing, or over a container (they can be sorted too), do nothing
    if (overId == null || active.id in items) {
      return
    }

    const overContainer = findContainer(overId)
    const activeContainer = findContainer(active.id)

    if (!overContainer || !activeContainer) {
      return
    }

    if (activeContainer !== overContainer) {
      setItems((items) => {
        const activeItems = items[activeContainer]
        const overItems = items[overContainer]
        const overIndex = overItems.indexOf(overId)
        const activeIndex = activeItems.indexOf(active.id)

        let newIndex: number

        if (overId in items) {
          newIndex = overItems.length + 1
        } else {
          const isBelowOverItem =
            over &&
            active.rect.current.translated &&
            active.rect.current.translated.top >
              over.rect.top + over.rect.height

          const modifier = isBelowOverItem ? 1 : 0

          newIndex =
            overIndex >= 0 ? overIndex + modifier : overItems.length + 1
        }

        recentlyMovedToNewContainer.current = true

        return {
          ...items,
          [activeContainer]: items[activeContainer].filter(
            (item) => item !== active.id,
          ),
          [overContainer]: [
            ...items[overContainer].slice(0, newIndex),
            items[activeContainer][activeIndex],
            ...items[overContainer].slice(
              newIndex,
              items[overContainer].length,
            ),
          ],
        }
      })
    }
  }

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id in items && over?.id) {
      setContainers((containers) => {
        const activeIndex = containers.indexOf(active.id)
        const overIndex = containers.indexOf(over.id)

        return arrayMove(containers, activeIndex, overIndex)
      })
    }

    const activeContainer = findContainer(active.id)

    if (!activeContainer) {
      setActiveId(null)
      return
    }

    const overId = over?.id

    if (overId == null) {
      setActiveId(null)
      return
    }

    const overContainer = findContainer(overId)

    if (overContainer) {
      const activeIndex = items[activeContainer].indexOf(active.id)
      const overIndex = items[overContainer].indexOf(overId)

      if (activeIndex !== overIndex) {
        setItems((items) => ({
          ...items,
          [overContainer]: arrayMove(
            items[overContainer],
            activeIndex,
            overIndex,
          ),
        }))
      }
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    if (clonedItems) {
      // Reset items to their original state in case items have been
      // Dragged across containers
      setItems(clonedItems)
    }

    setActiveId(null)
    setClonedItems(null)
  }

  const renderSortableItemOverlay = (id: UniqueIdentifier) => {
    return <Item id={id} key={id} dragOverlay />
  }

  const renderContainerDragOverlay = (containerId: UniqueIdentifier) => {
    return (
      <Container
        label={`Column ${containerId}`}
        style={{ height: '100%', width: '100%' }}
        handleProps={{}}
      >
        {items[containerId].map((item) => (
          <Item id={item} key={item} />
        ))}
      </Container>
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <Box display="inline-grid" padding="5" gridAutoFlow="column">
        <SortableContext items={containers} strategy={rectSortingStrategy}>
          {containers.map((containerId) => (
            <DroppableContainer
              key={containerId}
              id={containerId}
              label={`Column ${containerId}`}
              items={items[containerId]}
            >
              <SortableContext
                items={items[containerId]}
                strategy={rectSortingStrategy}
              >
                {items[containerId].map((value) => (
                  <SortableItem id={value} key={value} useDragOverlay />
                ))}
              </SortableContext>
            </DroppableContainer>
          ))}
        </SortableContext>
      </Box>
      {isInClient &&
        createPortal(
          <DragOverlay adjustScale dropAnimation={dropAnimation}>
            {activeId
              ? containers.includes(activeId)
                ? renderContainerDragOverlay(activeId)
                : renderSortableItemOverlay(activeId)
              : null}
          </DragOverlay>,
          document.body,
        )}
    </DndContext>
  )
}
