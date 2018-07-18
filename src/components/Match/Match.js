import React from 'react'
import ReactFlag from 'react-world-flags'
import { format } from 'date-fns'
import styled from 'styled-components'
import { withMedia } from 'react-media-query-hoc'

const Match = ({
  className,
  large,
  date,
  group,
  media,
  teamACode,
  teamAName,
  teamBCode,
  teamBName,
  resultA,
  resultB,
  resultPenaltyA,
  resultPenaltyB
}) => (
  <div className={className}>
    <MatchDate>{format(new Date(date), 'DD-MM')}</MatchDate>

    <MatchDetails>
      <Team left>
        <Flag code={teamACode} fallback={teamACode} large={media.desktop} left />

        <TeamName>{teamAName}</TeamName>
      </Team>

      <ResultDetails>
        <Result>
          {resultA} : {resultB}{' '}
          {resultPenaltyA &&
            resultPenaltyB &&
            `(${resultPenaltyA} : ${resultPenaltyB})`}
        </Result>

        <Group>Grupa {group}</Group>
      </ResultDetails>

      <Team right>
        <TeamName>{teamBName}</TeamName>

        <Flag code={teamBCode} fallback={teamBCode} large={media.desktop} right />
      </Team>
    </MatchDetails>
  </div>
)

const Team = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: ${props => props.left && 'flex-start'};
  justify-content: ${props => props.right && 'flex-end'};
`

const Flag = styled(({ className, code, large }) => (
  <div className={className}>
    <ReactFlag code={code} fallback={code} height={large ? 64 : 32} />
  </div>
))`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: ${props => (props.large ? '96px' : '38px')};
  box-shadow: ${props => props.left && '1px 0px 1px #c0c0c0'};
  box-shadow: ${props => props.right && '-1px 0px 1px #c0c0c0'};
`

const MatchDate = styled.div`
  opacity: 0.5;
  margin-right: 44px;
  font-size: 14px;
`

const MatchDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 auto;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  overflow: hidden;
`

const TeamName = styled.div`
  font-size: 18px;
  margin: 0 30px;
`

const ResultDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Result = styled.div`
  font-weight: 700;
  font-size: 28px;
`

const Group = styled.div`
  position: absolute;
  margin-top: 3px;
  top: 100%;
  font-size: 10px;
  opacity: 0.3;
`

export default styled(withMedia(Match))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`
