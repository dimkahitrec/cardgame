import { useMemo } from "react"
import { HistoryCard, HistoryCard as HistoryPlayerCardProps } from "./types"
import { CardsPropsType } from "./types"

function sorting(arr: HistoryCard[]) {
  return arr.sort((a, b) => {
    // both BC
    if (a.bc && b.bc) {
      return -b.year - -a.year
    }

    // one date of BC
    if (a.bc || b.bc) {
      if (a.bc) {
        return 1
      }
      return -1
    }

    // both dates AD
    return b.year - a.year
  })
}

const CardsList = (props: CardsPropsType) => {
  const { playerOneCards, playerTwoCards } = props

  const sortedArray = useMemo(() => {
    return sorting([...playerOneCards, ...playerTwoCards])
  }, [props.playerOneCards, props.playerTwoCards])

  return (
    <div>
      {sortedArray.map((card: HistoryPlayerCardProps) => {
        return (
          <div>
            <h1 key={card.id}>{card.title}</h1>
            <h2 key={card.id}>{card.year}</h2>
            <h3 key={card.id}>{card.description}</h3>
            <h4 key={card.id}>{card.bc.toString()}</h4>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export { CardsList }
