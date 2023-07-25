import { type HistoryCard as HistoryPlayerCardProps } from './types'
import styles from './styles.module.scss'

const HistoryPlayerCard = ({ id, year, title, description }: HistoryPlayerCardProps) => {
  return (
    <div className={styles.historyPlayerCard}>
      <h3>{title}</h3>
      {
        /* code goes here
          card should display all props
      */
      }
    </div>
  )
}

export type {
  HistoryPlayerCardProps
}

export {
  HistoryPlayerCard
}
