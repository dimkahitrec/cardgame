import WonLooseState from "../../containers/won-loose-state/WonLooseState"
import { PlayerCardList, playerCards } from "../../containers/player-card-list"
import HistoryFieldCard from "../../containers/history-field-card/HistoryFieldCard"
import { AllCardDeckDisplay } from "../../containers/all-card-deck"
import { CardsList } from "../../containers/all-cards-list-On-Field/AllCardListOnField"
import WaitingScreen from "../../containers/waiting-screen/WaitingScreen"

const GamePage = () => {
  return (
    <>
      {/* cards that players put on the field */}
      <WonLooseState />
      <PlayerCardList />
      <HistoryFieldCard />
      <AllCardDeckDisplay />
      <CardsList playerOneCards={playerCards} playerTwoCards={playerCards} />
      <WaitingScreen />
    </>
  )
}

export { GamePage }
