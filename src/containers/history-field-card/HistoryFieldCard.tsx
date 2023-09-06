import classnames from "classnames"
import { type GameCard } from "../../types"
import { SortableCard, type SortableCardProps } from "../sortable"
import styles from "./styles.module.scss"
import { lastNewCard } from "../player-card-list"
import { HistoryPlayerCard } from "../history-player-card"

type HistoryFieldCardProps = GameCard & SortableCardProps

const HistoryFieldCard = ({
  title,
  id,
  year,
  disabled,
}: HistoryFieldCardProps) => {
  return (
    <SortableCard
      id={id}
      disabled={disabled}
      className={classnames(
        styles.historyFieldCardWrap,
        disabled && "disabled"
      )}
    >
      <div className={styles.historyFieldCard}>
        <span>{title}</span>
        <span>{year}</span>
      </div>

      <div className={styles.playerCardList}>
        <div className={styles.backGroundColorandSize}>
          Last played by player:
        </div>

        <HistoryPlayerCard key={lastNewCard.id} {...lastNewCard} />
      </div>
    </SortableCard>
  )
}

export { HistoryFieldCard }
