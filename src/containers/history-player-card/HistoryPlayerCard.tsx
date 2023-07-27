import { type HistoryCard as HistoryPlayerCardProps } from './types'
import styles from './styles.module.scss'

const HistoryPlayerCard = ({ id, year, title, description }: HistoryPlayerCardProps) => {
  return (
    <div className={styles.historyPlayerCard}>
      {/* img */}
      <h3>{title}</h3>      
      {year}
      {description}     
    </div>
  )
}

export type {
  HistoryPlayerCardProps
}

export {
  HistoryPlayerCard
}
