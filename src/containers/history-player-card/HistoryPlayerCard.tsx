import styles from "./styles.module.scss"
import { SortableCard, type SortableCardProps } from "../sortable"
import { type GameCard } from "../../types"

type HistoryPlayerCardProps = GameCard & SortableCardProps

const HistoryPlayerCard = ({
  id,
  year,
  title,
  description,
}: HistoryPlayerCardProps) => {
  return (
    <SortableCard id={id} disabled={false}>
      <div className={styles.historyPlayerCard}>
        <div className={styles.photo}></div>
        <div className={styles.wrapTitleYear}>
          <h5>{title}</h5>
          <h5>{year}</h5>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </SortableCard>
  )
}

export type { HistoryPlayerCardProps }

export { HistoryPlayerCard }
