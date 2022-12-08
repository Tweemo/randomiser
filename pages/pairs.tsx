import { Box } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'

export default function Pairs(pair: any) {
  return (
    <Box className={styles.pairs} p='4rem' >
      {pair.pair[0]} - {pair.pair[1]}
    </Box>
  )
}
