import {
  DndContext,
  useSensors,
  type UniqueIdentifier,
  useSensor,
  MouseSensor,
  MeasuringStrategy,
} from "@dnd-kit/core"
import { FieldCardList } from "../../containers/field-card-list"
import { PlayerCardList, playerCards } from "../../containers/player-card-list"
import { MockFieldCards, MockPlayerCards } from "../../mock"
import { useCallback, useEffect, useRef, useState } from "react"
import { type GameListMap, GameListTypes } from "../../types"
import { useCollisionDetectionStrategy } from "./hooks/use-collision-detection-strategy"
import { findContainer } from "./helpers/findContainer"
import { arrayMove } from "@dnd-kit/sortable"
import styles from "./styles.module.scss"
import HistoryFieldCard from "../../containers/history-field-card/HistoryFieldCard"
import { AllCardDeckDisplay } from "../../containers/all-card-deck"
import { CardsList } from "../../containers/all-cards-list-On-Field/AllCardListOnField"

// init state
// todo: use cards from backend and shuffle them
const gameListMap: GameListMap = {
  [GameListTypes.Player]: MockPlayerCards,
  [GameListTypes.Field]: MockFieldCards,
}

const GamePage = () => {
  const recentlyMovedToNewContainer = useRef(false)
  const [items, setItems] = useState(gameListMap)
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null)
  const lastOverId = useRef<UniqueIdentifier | null>(null)

  const sensors = useSensors(useSensor(MouseSensor))

  const collisionDetectionStrategy = useCollisionDetectionStrategy({
    items,
    activeId,
    recentlyMovedToNewContainer,
    lastOverId,
    onLastOverIdChange: (v) => {
      lastOverId.current = v
    },
  })

  const findContainerId = useCallback(
    (id: UniqueIdentifier) => findContainer(id, items),
    [items]
  )

  useEffect(() => {
    requestAnimationFrame(() => {
      recentlyMovedToNewContainer.current = false
    })
  }, [items])

  return (
    <DndContext
      sensors={sensors}
      measuring={{
        droppable: {
          strategy: MeasuringStrategy.Always,
        },
      }}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={({ active }) => {
        if (!active) {
          return
        }

        setActiveId(active.id)
      }}
      onDragOver={({ active, over }) => {
        const overId = over?.id

        if (overId == null || active.id in items) {
          return
        }

        const overContainer = findContainerId(overId)
        const activeContainer = findContainerId(active.id)

        if (
          !overContainer ||
          !activeContainer ||
          overContainer === activeContainer
        ) {
          return
        }

        setItems((items) => {
          const activeItems = items[activeContainer]
          const overItems = items[overContainer]
          const overIndex = overItems.findIndex((item) => item.id === overId)
          const activeIndex = activeItems.findIndex(
            (item) => item.id === active.id
          )

          let newIndex: number

          if (overId in items) {
            newIndex = overItems.length + 1
          } else {
            const isBelowOverItem =
              over &&
              active.rect.current.translated &&
              active.rect.current.translated.top >
                over.rect.top + over.rect.height

            const modifier = isBelowOverItem ? 1 : 0

            newIndex =
              overIndex >= 0 ? overIndex + modifier : overItems.length + 1
          }

          recentlyMovedToNewContainer.current = true

          return {
            ...items,
            [activeContainer]: items[activeContainer].filter(
              (item) => item.id !== active.id
            ),
            [overContainer]: [
              ...items[overContainer].slice(0, newIndex),
              items[activeContainer][activeIndex],
              ...items[overContainer].slice(
                newIndex,
                items[overContainer].length
              ),
            ],
          }
        })
      }}
      onDragEnd={({ active, over }) => {
        const activeContainer = findContainerId(active.id)

        if (!activeContainer) {
          setActiveId(null)
          return
        }

        const overId = over?.id

        if (overId == null) {
          setActiveId(null)
          return
        }

        const overContainer = findContainerId(overId)

        if (overContainer) {
          const activeIndex = items[activeContainer].findIndex(
            (item) => item.id === active.id
          )
          const overIndex = items[overContainer].findIndex(
            (item) => item.id === overId
          )

          if (activeIndex !== overIndex) {
            setItems((items) => ({
              ...items,
              [overContainer]: arrayMove(
                items[overContainer],
                activeIndex,
                overIndex
              ),
            }))
          }
        }

        setActiveId(null)
      }}
      onDragCancel={() => {
        setActiveId(null)
      }}
    >
      <div className={styles.gameScreen}>
        <div className={styles.fieldListWrap}>
          <FieldCardList
            id="field-card-list"
            items={items[GameListTypes.Field]}
          />
        </div>
        <div className={styles.playerListWrap}>
          <PlayerCardList
            id="player-card-list"
            items={items[GameListTypes.Player]}
          />
        </div>
        <>
          {/* cards that players put on the field */}
          <PlayerCardList />
          <HistoryFieldCard />
          <AllCardDeckDisplay />
          <CardsList player1Cards={playerCards} player2Cards={playerCards} />
        </>
      </div>
    </DndContext>
  )
}

export { GamePage }
