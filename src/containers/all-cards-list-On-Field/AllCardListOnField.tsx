import { useEffect, useState } from "react"
import { HistoryCard as HistoryPlayerCardProps } from "./types"

function sorting(arr: any) {
  const sortedArray = arr.sort((a: any, b: any) => {
    if (a.bc === true && b.bc === true) {
      return -b.year > -a.year
    }

    if (a.bc === true) {
      return true
    }
    if (b.bc === true) {
      return false
    }

    return b.year - a.year
  })
  return sortedArray
}

// const CardsList = (props) => {
//   const { player1Cards, player2Cards } = props

const CardsList = ({
  player1Cards,
  player2Cards,
}: {
  player1Cards: HistoryPlayerCardProps
  player2Cards: HistoryPlayerCardProps
}) => {
  const setMergeArrays = [...[player1Cards], ...[player2Cards]]

  const [sortedArrays, setSortedArrays] = useState([])

  useEffect(() => {
    return () => {
      setSortedArrays(sorting(setMergeArrays))
    }
  }, [setMergeArrays]) // props

  return (
    <div>
      {sortedArrays.map((arr: HistoryPlayerCardProps) => {
        return (
          <div>
            <h1 key={arr.id}>{arr.title}</h1>
            <h2 key={arr.id}>{arr.year}</h2>
            <h3 key={arr.id}>{arr.description}</h3>
          </div>
        )
      })}
    </div>
  )
}

export { CardsList }
