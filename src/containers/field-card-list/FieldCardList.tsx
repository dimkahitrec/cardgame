import { DndContext, useSensors, type UniqueIdentifier, closestCenter, useSensor, MouseSensor } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'
// import {  } from '@dnd-kit/sortable'
type Card = {
  id: UniqueIdentifier
  number: number
}
const fieldList: Card[] = []

const playerList: Card[] = []

for (let i = 1; i < 10; i++) {
  fieldList.push({
    id: 'field' + i.toString(),
    number: i
  })
  playerList.push({
    id: i + 10,
    number: i + 10
  })
}

// card
const FieldCard = ({ number, id }: Card) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    margin: '20px',
    border: '1px solid #fff',
    padding: '10px'
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div>FieldCard {number}</div>
    </div>
  )
}

const FieldCardList = () => {
  const [items, setItems] = useState<Card[]>(fieldList)
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const getIndex = (id: UniqueIdentifier) => items.map(({ id }) => id).indexOf(id)

  const activeIndex = activeId ? getIndex(activeId) : -1

  const sensors = useSensors(useSensor(MouseSensor))

  useEffect(() => {
    console.log('activeId', activeId)
  }, [activeId])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={({ active }) => {
        if (!active) {
          return
        }

        setActiveId(active.id)
      }}

      onDragEnd={({ over }) => {
        setActiveId(null)

        if (over) {
          const overIndex = getIndex(over.id)
          if (activeIndex !== overIndex) {
            console.log('overIndex', overIndex, activeIndex, items)
            setItems((items) => arrayMove(items, activeIndex, overIndex))
          }
        }
      }}
      onDragCancel={() => { setActiveId(null) }}
    >
      <SortableContext items={items} strategy={rectSortingStrategy}>
        {items.map(({ id, number }) => (<FieldCard key={id} id={id} number={number} />))}
      </SortableContext>
    </DndContext>
  )
}

export {
  FieldCardList
}
