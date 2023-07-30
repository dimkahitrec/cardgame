import { type UniqueIdentifier } from '@dnd-kit/core'
import { type HistoryPlayerCardProps } from '../history-player-card'
import { SortableContainer } from '../sortable'
import { SortableContext, rectSwappingStrategy } from '@dnd-kit/sortable'
import styles from './styles.module.scss'
import { HistoryFieldCard } from '../history-field-card'

type FieldListProps = { id: UniqueIdentifier, items: HistoryPlayerCardProps[] }

const FieldCardList = ({ id, items }: FieldListProps) => {
  return (
    <SortableContainer id={id} items={items} className={styles.fieldCardList}>
      <SortableContext items={items} strategy={rectSwappingStrategy}>
        {items.map((fieldCard) => (<HistoryFieldCard key={fieldCard.id} {...fieldCard} />))}
      </SortableContext>
    </SortableContainer>
  )
}

export {
  FieldCardList
}
