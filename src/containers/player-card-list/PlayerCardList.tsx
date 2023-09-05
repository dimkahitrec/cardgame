import { type UniqueIdentifier } from "@dnd-kit/core"
import {
  HistoryPlayerCard,
  type HistoryPlayerCardProps,
} from "../history-player-card"
import styles from "./styles.module.scss"
import { SortableContainer } from "../sortable"
import {
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"

type PlayerCardListProps = {
  id: UniqueIdentifier
  items: HistoryPlayerCardProps[]
}

// mock player cards
const playerCards: HistoryPlayerCardProps[] = [
  {
    id: "1",
    title: "Pot",
    description: "Pot to boil water",
    year: 1800,
    bc: false,
  },
  {
    id: "2",
    title: "Wheel",
    description: "really helps to drive",
    year: 1300,
    bc: false,
  },
  {
    id: "3",
    title: "Sugar",
    description: "makes tea tasty",
    year: 1200,
    bc: false,
  },
]

// display a list of player cards
const PlayerCardList = ({ id, items }: PlayerCardListProps) => {
  return (
    <SortableContainer id={id} items={items} className={styles.playerCardList}>
      <SortableContext items={items} strategy={horizontalListSortingStrategy}>
        <div className={styles.backGroundColorandSize}>
          Player: {""}
          <br />
          Total amount of cards: {playerCards.length}
        </div>
        {items.map((playerCard) => (
          <HistoryPlayerCard key={playerCard.id} {...playerCard} />
        ))}
      </SortableContext>
    </SortableContainer>
  )
}

export { PlayerCardList, playerCards }
