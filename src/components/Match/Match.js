import React from 'react'
import Flag from 'react-flags'
import { Flex, Box } from 'reflexbox'
import { format } from 'date-fns'
import styled from 'styled-components'

const Match = ({
  className,
  large,
  date,
  group,
  teamACode,
  teamAName,
  teamBCode,
  teamBName,
  resultA,
  resultB,
  resultPenaltyA,
  resultPenaltyB
}) => (
  <Flex className={className}>
    <Box>{format(new Date(date), 'DD-MM')}</Box>
    <Flex justify="center">
      <Box>
        <Flex align="center">
          <Flag
            name={teamACode}
            alt={teamAName}
            format="png"
            pngSize={large ? 64 : 32}
            basePath="/flags"
          />

          <TeamName>{teamAName}</TeamName>
        </Flex>
      </Box>

      <Box>
        <Result>
          {resultA} - {resultB}
        </Result>

        <Group>{group}</Group>
      </Box>

      <Box>
        <Flex align="center">
          <Flag
            name={teamBCode}
            alt={teamBName}
            format="png"
            pngSize={large ? 64 : 32}
            basePath="/flags"
          />

          <TeamName>{teamBName}</TeamName>
        </Flex>
      </Box>
    </Flex>
  </Flex>
)

const TeamName = styled.div`
  font-size: 18px;
  opacity: 0.3;
`

const Result = styled.div`
  font-weight: 700;
  font-size: 28px;
`

const Group = styled.div`
  font-size: 10px;
  opacity: 0.3;
`

export default styled(Match)`
  margin-bottom: 30px;
  border: 1px solid #d7d7d7;
`
