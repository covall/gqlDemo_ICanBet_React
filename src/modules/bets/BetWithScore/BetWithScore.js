import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'reflexbox'

import { Score as ScoreComponent } from '../../../components'
import BetResult from '../BetResult'

const BetWithScore = ({ bet, game }) => (
  <Flex justify="space-between" align="center">
    <Box>
      <BetResult game={game} bet={bet} />
    </Box>
    {bet && bet.points !== null && <Score>{bet.points}</Score>}
  </Flex>
)

const Score = styled(ScoreComponent)`
  margin-left: 20px;
`

export default BetWithScore
