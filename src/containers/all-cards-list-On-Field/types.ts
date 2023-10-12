type HistoryCard = {
  id: string
  title: string
  description: string
  year: number
  bc: boolean // before christ. indicates if the inventiona was created before christ
}

type CardsPropsType = {
  playerOneCards: HistoryCard[]
  playerTwoCards: HistoryCard[]
}

export type { HistoryCard, CardsPropsType }
