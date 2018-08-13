import React from 'react'
import { Flex, Box } from 'reflexbox'

import { Score } from '../../../components'
import BetResult from '../BetResult'

const BetWithScore = ({ bet, game }) => (
  <Flex justify="space-between" align="center">
    <Box>
      <BetResult game={game} bet={bet} />
    </Box>
    {bet.points !== null && <Score>{bet.points}</Score>}
  </Flex>
)

export default BetWithScore
