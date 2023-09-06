import { useEffect, useState } from "react"

function sorting(arr: any) {
  const sortedArray = arr.sort((a: any, b: any) => {
    if ((a.bc === true) && (b.bc === true)) {
      return (-b.year) > (-a.year)
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

const CardsList = (props: any) => {
  const { player1Cards, player2Cards } = props

  const setMergeArrays = [...player1Cards, ...player2Cards]

  const [sortedArrays, setSortedArrays] = useState<any[]>([])

  useEffect(() => {
    return () => {
      setSortedArrays(sorting(setMergeArrays))
    }
  }, [props])

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
