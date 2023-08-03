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
        {
          <div className={styles.fixedphoto}>
            <img
              src={"../../photoOfCards/" + title + ".jpg"}
              className={styles.fixedPhotoBorder}
              width={245}
              height={180}
            />
          </div>
        }
        <div className={styles.groupTitleYear}>
          <div className={styles.titleOfCard}>{title}</div>
          <div className={styles.yearOfCard}>{year}</div>
        </div>
        <div className={styles.description}>{description}</div>
      </div>
    </SortableCard>
  )
}

export type { HistoryPlayerCardProps }

export { HistoryPlayerCard }
