import { type UniqueIdentifier } from '@dnd-kit/core'
import { HistoryPlayerCard, type HistoryPlayerCardProps } from '../history-player-card'
import styles from './styles.module.scss'
import { SortableContainer } from '../sortable'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

type PlayerCardListProps = { id: UniqueIdentifier, items: HistoryPlayerCardProps[] }

// display a list of player cards
const PlayerCardList = ({ id, items }: PlayerCardListProps) => {
  return (
    <SortableContainer id={id} items={items} className={styles.playerCardList}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        {items.map((playerCard) => (
          <HistoryPlayerCard key={playerCard.id} {...playerCard} />
        ))}
      </SortableContext>
    </SortableContainer>
  )
}

export {
  PlayerCardList
}
