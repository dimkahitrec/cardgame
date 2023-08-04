import { type AllCardDeck as AllCardDeckProps } from './types'
// import styles from '../all-card-deck/';
import styles from '../history-player-card/styles.module.scss'

const AllCardDeck = ({ id, title, counter }: AllCardDeckProps) => {
    return (
        <div className={styles.historyPlayerCard}>
            {title}
            {counter}
        </div>
    )
}

export type {
    AllCardDeckProps
}

export default {
    AllCardDeck
}

