import { type HistoryCard as HistoryPlayerCardProps } from './types'
import styles from './styles.module.scss'

const HistoryPlayerCard = ({ id, year, title, description }: HistoryPlayerCardProps) => {
  return (
    <div className={styles.historyPlayerCard}>
      {
        <div className={styles.fixedphoto}>
        <img src={'../../photoOfCards/' + title + '.jpg'} className={styles.fixedPhotoBorder} width={245} height={180}/>
        </div>
      }
      <div className={styles.groupTitleYear}>
        <div className={styles.titleOfCard}>
          {title}
        </div>
        <div className={styles.yearOfCard}>
          {year}
        </div>
      </div>
      <div className={styles.description}>   
        {description}
      </div>
    </div>
  )
}

export type {
  HistoryPlayerCardProps
}

export {
  HistoryPlayerCard
}
