import React from 'react'
import { Flex, Box } from 'reflexbox'

import BetResult from './BetResult'
import Score from '../Score'

const BetWithScore = ({ bet, game }) => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <BetResult game={game} bet={bet} />
      </Box>
      {bet.points !== null && <Score>{bet.points}</Score>}
    </Flex>
  )
}

export default BetWithScore
