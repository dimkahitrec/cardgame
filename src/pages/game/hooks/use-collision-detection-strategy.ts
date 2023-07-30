import { closestCenter, type UniqueIdentifier, type CollisionDetection, pointerWithin, getFirstCollision, rectIntersection } from '@dnd-kit/core'
import { type RefObject, useCallback } from 'react'

/**
     * Custom collision detection strategy optimized for multiple containers
     *
     * - First, find any droppable containers intersecting with the pointer.
     * - If there are none, find intersecting containers with the active draggable.
     * - If there are no intersecting containers, return the last matched intersection
     *
     */

type UseCollisionDetectionStrategyArgs = {
  items: Record<string, any[]>
  activeId: UniqueIdentifier | null
  recentlyMovedToNewContainer: RefObject<boolean>
  lastOverId: RefObject<UniqueIdentifier | null>
  onLastOverIdChange: (id: UniqueIdentifier | null) => void
}

const useCollisionDetectionStrategy = ({ items, activeId, recentlyMovedToNewContainer, lastOverId, onLastOverIdChange }: UseCollisionDetectionStrategyArgs): CollisionDetection => {
  return useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items
          )
        })
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args)
      // If there are droppables intersecting with the pointer, return those
      const intersections = pointerIntersections.length > 0 ? pointerIntersections : rectIntersection(args)
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
                  containerItems.map(({ id }) => id).includes(container.id)
              )
            })[0]?.id
          }
        }

        // lastOverId.current = overId
        onLastOverIdChange(overId)

        return [{ id: overId }]
      }

      // When a draggable item moves to a new container, the layout may shift
      // and the `overId` may become `null`. We manually set the cached `lastOverId`
      // to the id of the draggable item that was moved to the new container, otherwise
      // the previous `overId` will be returned which can cause items to incorrectly shift positions
      if (recentlyMovedToNewContainer.current) {
        // lastOverId.current = activeId
        onLastOverIdChange(activeId)
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : []
    },
    [activeId, items]
  )
}

export {
  useCollisionDetectionStrategy
}
