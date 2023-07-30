import { type UniqueIdentifier } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { type PropsWithChildren } from 'react'
import { CSS } from '@dnd-kit/utilities'

type SortableContainerProps = PropsWithChildren<{ id: UniqueIdentifier, items: any[], style?: React.CSSProperties, className?: string }>

const SortableContainer = ({ children, id, items, style, className }: SortableContainerProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transition,
    transform
  } = useSortable({
    id,
    data: {
      type: 'container',
      children: items
    }
  })

  const styles = {
    ...style,
    transition,
    transform: CSS.Translate.toString(transform)
  }

  return (
    <div ref={setNodeRef} style={styles} className={className} {...attributes} {...listeners}>
      {children}
    </div>
  )
}

export {
  SortableContainer
}
