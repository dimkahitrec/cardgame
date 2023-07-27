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
        {/* img */}
        <h3>{title}</h3>
        {year}
        {description}
      </div>
    </SortableCard>
  )
}

export type { HistoryPlayerCardProps }

export { HistoryPlayerCard }
