import React from 'react'
import styled from 'styled-components'
import { Flex } from 'reflexbox'

import { Score } from '../../../components'

const TotalResult = ({ place, score }) => (
  <Flex justify="center">
    <Flex column>
      <Label>Miejsce</Label>
      <Score large white label="Punkty" left>
        {place}
      </Score>
    </Flex>
    <Flex column>
      <Label>Punkty</Label>
      <Score large label="Punkty" right>
        {score}
      </Score>
    </Flex>
  </Flex>
)

const Label = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  font-size: 10px;
  font-weight: 400;
  opacity: 0.4;
`

export default TotalResult
