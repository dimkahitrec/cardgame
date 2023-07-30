import classnames from 'classnames'
import { type GameCard } from '../../types'
import { SortableCard, type SortableCardProps } from '../sortable'
import styles from './styles.module.scss'

type HistoryFieldCardProps = GameCard & SortableCardProps

const HistoryFieldCard = ({ title, id, year, disabled }: HistoryFieldCardProps) => {
  return (
    <SortableCard id={id} disabled={disabled} className={classnames(styles.historyFieldCardWrap, disabled && 'disabled')}>
      <div className={styles.historyFieldCard}>
        <span>{title}</span>
        <span>{year}</span>
      </div>
    </SortableCard>
  )
}

export {
  HistoryFieldCard
}
