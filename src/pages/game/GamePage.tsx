import { PlayerCardList } from '../../containers/player-card-list'
import { AllCardDeckDisplay } from '../../containers/all-card-deck'

const GamePage = () => {
  return (
    <>
      {/* cards that players put on the field */}
      <PlayerCardList />
      <AllCardDeckDisplay/>
    </>
  )
}

export {
  GamePage
}
