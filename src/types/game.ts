enum GameListTypes {
  Player = 'player',
  Field = 'field'
}

type GameListMap = Record<GameListTypes, GameCard[]>

type GameCard = {
  id: string
  title: string
  description: string
  year: number
  bc: boolean // before christ. indicates if the inventiona was created before christ
}

export type {
  GameListMap,
  GameCard
}

export {
  GameListTypes
}
