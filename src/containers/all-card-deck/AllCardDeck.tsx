import { type AllCardDeck as AllCardDeckProps } from "./types"
import { useState } from "react"
import styles from "./styles.module.scss"

const AllCardDeck = ({ id, title }: AllCardDeckProps) => {
  const [counterNumber, setCounter] = useState(25)
  return (
    <div className={styles.AllCardDeck}>
      <div className={styles.AllCardDeckExtend_layer_behind_first}></div>
      <div className={styles.AllCardDeckExtend_layer_behind_second}></div>
      <div className={styles.AllCardDeckExtend_layer_behind_third}></div>
      <div className={styles.textCenter}>{counterNumber}</div>
    </div>
  )
}

const AllCardDeckMap: AllCardDeckProps[] = [
  {
    id: "1",
    title: "Добор",
    counter: 0,
  },
]

// display a card-deck
const AllCardDeckDisplay = () => {
  return (
    <div>
      {AllCardDeckMap.map((deckCards) => (
        <AllCardDeck key={deckCards.id} {...deckCards} />
      ))}
    </div>
  )
}

export { AllCardDeckDisplay }

export default {
  AllCardDeckDisplay,
}
