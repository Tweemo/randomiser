import styles from '../styles/Home.module.css'

export default function Pairs(pair: any) {

  return (
    <div className={styles.pairs}>
      <h2>
        {pair.pair[0]} - {pair.pair[1]}
      </h2>
    </div>
  )
}
