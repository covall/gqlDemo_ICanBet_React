import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'reflexbox'

import Score from '../Score'

const BetWithScore = ({ resultA, resultB, penaltyWinner, score }) => (
  <Flex justify="space-between" align="center">
    <Result>
      {resultA} : {resultB}
      {penaltyWinner && ` (${penaltyWinner})`}
    </Result>
    {score && <Score>{score}</Score>}
  </Flex>
)

const Result = styled(Box)`
  font-size: 16px;
`

export default BetWithScore
