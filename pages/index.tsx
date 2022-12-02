import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Pairs from './pairs'
import { sortStaff } from './utils/utils'

export default function Home() {
  
  const staff = [ 'Craig', 'Tim L', 'Tim P', 'Zaid', 'Thomas', 'Mike', 'Jai', 'Andrew', 'Emily', 'Lance', 'Tariq', 'Phil']
  
  const initialPairHistory: Array<Object> = []

  staff.map((member: any) => {
    const membersHistory = {member: member, history: []}
    initialPairHistory.push(membersHistory)
  })
  

  const [pairs, setPairs] = useState([])
  const [pairHistory, setPairHistory] = useState(initialPairHistory)
  const sortedStaff = sortStaff(staff, pairHistory)

  useEffect(() => {
    handleHistory()
    setPairs(sortedStaff)
  }, [])

  // Runs when the button is clicked
  function handleHistory () {
    pairHistory.map((member: any) => {
      pairs.map((pair: any) => {
        if (member.member === pair[0]) {
          member.history.push(pair[1])
        } else if (member.member === pair[1]) {
          member.history.push(pair[0])
        }
      })
    })
  }
  
  // Created function that sets the state of the pairs
  function setNewPairs(pairs: any, history: any) {
    // console.log(pairs)

    pairs.map((pair: any) => {
      history.map((member: any) => {
        if (pair[0] === member.member && member.history.includes(pair[1])) {
          // setNewPairs(sortStaff(staff))
          // console.log('pairing already exists')
          // pairs = sortStaff(staff)
          // console.log(member.history.includes(pair[1]))
        }
      })
    })
    // console.log(pairHistory)

    setPairs(pairs)
    handleHistory()
    }

  return (
    <div className={styles.container}>
      <div className={styles.nameButtonContainer}>
        <button className={styles.resetButton} onClick={() => setNewPairs(sortedStaff, pairHistory)}>
          Mix&apos;em
        </button>
        <div className={styles.pairs}>
          {pairs?.map((pair: any, index: number) => (
            <Pairs key={index} pair={pair} />
            ))}
        </div>
      </div>
    </div>
  )
}