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

const lastNewCard = {
    id: "4",
    title: "Stone Age Tool",
    description: "These prehistoric Stone Age tools were handmade by early nomadic settlers in Denmark over 7,000 years ago. They were crafted using a technique known as flintknapping, the process of shaping stone into tools or weapons by striking it with another hard object. This process creates a unique finish as each strike would remove a small flake of stone, leading to a scalloped and intricately patterned surface",
    year: 5000,
    bc: true,
  }

playerCards.push(lastNewCard)

// display a list of player cards
const PlayerCardList = () => {
  return (
    <div className={styles.playerCardList}>
      <div className={styles.backGroundColorandSize}>
        Player: {""}
        <br />
        Total amount of cards: {playerCards.length}
      </div>
      {playerCards.map((playerCard) => (
        <HistoryPlayerCard key={playerCard.id} {...playerCard} />
      ))}
    </div>
  )
}

export { PlayerCardList, playerCards, lastNewCard }
