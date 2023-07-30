import { type UniqueIdentifier } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { type PropsWithChildren } from 'react'

type SortableCardProps = PropsWithChildren<{ id: UniqueIdentifier, disabled?: boolean, className?: string }>

const SortableCard = ({ children, disabled, id, className }: SortableCardProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id, disabled })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div ref={setNodeRef} style={style} className={className} {...attributes} {...listeners} >
      {children}
    </div>
  )
}

export type {
  SortableCardProps
}

export {
  SortableCard
}
