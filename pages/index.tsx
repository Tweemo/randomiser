import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Pairs from './pairs'
import { shuffle, splitArray } from '../utils/utils'
import { Button, SimpleGrid, VStack } from '@chakra-ui/react'

export default function Home() {
  
  const staff = [ 'Craig', 'Tim L', 'Tim P', 'Zaid', 'Mike', 'Jai', 'Andrew', 'Emily', 'Lance', 'Tariq', 'Phil']
  const [pairs, setPairs] = useState<any>()
  
  useEffect(() => {
    setPairs(splitArray(shuffle(staff)))
  }, [])

  return (
      <VStack bg='bisque' h='100vh'>
        <Button className={styles.resetButton} size='lg' colorScheme='teal' onClick={() => {
          setPairs(splitArray(shuffle(staff)))
          console.log([pairs])
        }}>
          Mix&apos;em
        </Button>
        <SimpleGrid columns={3} gap={'4rem'}>
          {pairs?.map((pair: any, index: number) => (
              <Pairs key={index} pair={pair} />
            ))}
        </SimpleGrid>
      </VStack>
  )
}