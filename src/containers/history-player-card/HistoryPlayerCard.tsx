import { type HistoryCard as HistoryPlayerCardProps } from "./types"
import styles from "./styles.module.scss"

const HistoryPlayerCard = ({
  id,
  year,
  title,
  description,
}: HistoryPlayerCardProps) => {
  return (
    <div className={styles.historyPlayerCard}>
      <div className={styles.photo}></div>
      <div className={styles.wrapTitleYear}>
        <h5>{title}</h5>
        <h5>{year}</h5>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export type { HistoryPlayerCardProps }

export { HistoryPlayerCard }
