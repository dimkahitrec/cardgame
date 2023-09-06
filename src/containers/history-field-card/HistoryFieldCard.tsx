import { lastNewCard } from "../player-card-list"
import { HistoryPlayerCard } from "../history-player-card"
import styles from './styles.module.scss'

const HistoryFieldCard = () => {
  return (
    <div className={styles.playerCardList}>
      <div className={styles.backGroundColorandSize}>
      Last played by player:
      </div>

      <HistoryPlayerCard key={lastNewCard.id} {...lastNewCard} />
    </div>
  )
}

export default HistoryFieldCard
