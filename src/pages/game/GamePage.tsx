import { PlayerCardList, playerCards } from "../../containers/player-card-list"
import { AllCardDeckDisplay } from "../../containers/all-card-deck"
import { CardsList } from "../../containers/all-cards-list-On-Field/AllCardListOnField"

const GamePage = () => {
  return (
    <>
      {/* cards that players put on the field */}
      <PlayerCardList />
      <AllCardDeckDisplay />
      <CardsList player1Cards={playerCards} player2Cards={playerCards} />
    </>
  )
}

export { GamePage }
