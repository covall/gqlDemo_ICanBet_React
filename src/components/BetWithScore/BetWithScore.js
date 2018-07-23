import React from 'react'
import { Flex, Box } from 'reflexbox'

import BetResult from './BetResult'
import Score from '../Score'

const BetWithScore = ({ game, resultA, resultB, penaltyWinner, score }) => (
  <Flex justify="space-between" align="center">
    <Box>
      <BetResult game={game}>
        {resultA} : {resultB}
        {penaltyWinner && ` (${penaltyWinner})`}
      </BetResult>
    </Box>
    {score && <Score>{score}</Score>}
  </Flex>
)

export default BetWithScore
