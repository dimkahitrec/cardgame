import { useEffect, useState } from "react"

function sorting(arr: any) {
  const sortedArray = arr.sort((a: any, b: any) => {
    return b.year - a.year
  })
  return sortedArray
}

const CardsList = (props: any) => {
  const { player1Cards, player2Cards } = props

  const setMergeArrays = [...player1Cards, ...player2Cards]

  const [sortedArrays, setSortedArrays] = useState<any[]>([])

  useEffect(() => {
    return () => {
      setSortedArrays(sorting(setMergeArrays))
    }
  }, [props])

  console.log(sortedArrays)

  return (
    <div>
      {sortedArrays.map((arr) => {
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
