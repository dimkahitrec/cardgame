import {
  HistoryPlayerCard,
  type HistoryPlayerCardProps,
} from "../history-player-card"
import styles from "./styles.module.scss"

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
const PlayerCardList = () => {
  return (
    <div className={styles.playerCardList}>
      {playerCards.map((playerCard) => (
        <HistoryPlayerCard key={playerCard.id} {...playerCard} />
      ))}
    </div>
  )
}

export { PlayerCardList, playerCards }
