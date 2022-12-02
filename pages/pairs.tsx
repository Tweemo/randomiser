import styles from '../styles/Home.module.css'

export default function Pairs(pair: any) {

  return (
        <div className={styles.pairCards}>
          {pair.pair[0]} - {pair.pair[1]}
        </div>
  )
}

