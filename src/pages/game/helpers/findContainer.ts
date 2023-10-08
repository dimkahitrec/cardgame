import { type UniqueIdentifier } from '@dnd-kit/core'
import { type GameListTypes, type GameListMap } from '../../../types'

const findContainer = (id: UniqueIdentifier, items: GameListMap): keyof GameListMap | undefined => {
  if (id in items) {
    return id as GameListTypes
  }

  // todo: fix types
  // eslint-disable-next-line @typescript-eslint/prefer-ts-expect-error, @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return Object.keys(items).find((key) => items[key].map(({ id }) => id).includes(id))
}

export {
  findContainer
}
