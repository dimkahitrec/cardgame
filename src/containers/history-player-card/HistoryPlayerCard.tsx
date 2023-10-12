<<<<<<< HEAD
import styles from "./styles.module.scss"
import { SortableCard, type SortableCardProps } from "../sortable"
import { type GameCard } from "../../types"

type HistoryPlayerCardProps = GameCard & SortableCardProps

=======
import { type HistoryCard as HistoryPlayerCardProps } from "./types"
import styles from "./styles.module.scss"

>>>>>>> d5d5da2d168ed0d53a9306936453d6355358169e
const HistoryPlayerCard = ({
  id,
  year,
  title,
  description,
}: HistoryPlayerCardProps) => {
  return (
<<<<<<< HEAD
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
=======
    <div className={styles.historyPlayerCard}>
      <div className={styles.photo}></div>
      <div className={styles.wrapTitleYear}>
        <h5>{title}</h5>
        <h5>{year}</h5>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
>>>>>>> d5d5da2d168ed0d53a9306936453d6355358169e
  )
}

export type { HistoryPlayerCardProps }

export { HistoryPlayerCard }
