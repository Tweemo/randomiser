import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Pairs from './pairs'
import { shuffle, splitArray } from '../utils/utils'

export default function Home() {
  
  const staff = [ 'Craig', 'Tim L', 'Tim P', 'Zaid', 'Thomas', 'Mike', 'Jai', 'Andrew', 'Emily', 'Lance', 'Tariq', 'Phil']
  const [pairs, setPairs] = useState<any>()
  
  useEffect(() => {
    setPairs(splitArray(shuffle(staff)))
  }, [])

  return (
      <div className={styles.container}>
        <button className={styles.resetButton} onClick={() => {
          setPairs(splitArray(shuffle(staff)))
          console.log([pairs])
        }}>
          Mix&apos;em
        </button>
        <div className={styles.cardContainer}>
          {pairs?.map((pair: any, index: number) => (
            <Pairs key={index} pair={pair} />
            ))}
        </div>
      </div>
  )
}