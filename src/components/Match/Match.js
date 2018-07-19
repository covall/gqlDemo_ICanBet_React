import React from 'react'
import ReactFlag from 'react-world-flags'
import { format } from 'date-fns'
import styled from 'styled-components'
import { withMedia } from 'react-media-query-hoc'

const Match = withMedia(
  ({
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
  }) => {
    const sizeLarge = !media.mobile && large

    return (
      <MatchContainer>
        <MatchDate large={sizeLarge}>
          {format(new Date(date), 'DD-MM')}
        </MatchDate>

        <MatchDetails>
          <Team large={sizeLarge} left>
            <Flag
              code={teamACode}
              teamName={teamAName}
              fallback={teamACode}
              large={sizeLarge}
              left
            />

            {sizeLarge && <TeamName left>{teamAName}</TeamName>}
          </Team>

          <ResultDetails>
            <Result large={sizeLarge}>
              {resultA} : {resultB}{' '}
              {resultPenaltyA &&
                resultPenaltyB &&
                `(${resultPenaltyA} : ${resultPenaltyB})`}
            </Result>

            {sizeLarge && <Group>Grupa {group}</Group>}
          </ResultDetails>

          <Team large={sizeLarge} right>
            {sizeLarge && <TeamName right>{teamBName}</TeamName>}

            <Flag
              code={teamBCode}
              teamName={teamBName}
              fallback={teamBCode}
              large={sizeLarge}
              right
            />
          </Team>
        </MatchDetails>
      </MatchContainer>
    )
  }
)

const Team = styled.div`
  display: flex;
  align-items: center;
  width: ${props => (props.large ? '300px' : 'auto')};
  justify-content: ${props => props.left && 'flex-start'};
  justify-content: ${props => props.right && 'flex-end'};
`

const Flag = styled(({ className, code, large, teamName }) => (
  <div className={className}>
    <ReactFlag
      code={code}
      fallback={code}
      title={teamName}
      height={large ? 64 : 32}
    />
  </div>
))`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: ${props => (props.large ? '96px' : '38px')};
  box-shadow: ${props => props.left && '1px 0px 1px #c0c0c0'};
  box-shadow: ${props => props.right && '-1px 0px 1px #c0c0c0'};
`

const MatchDate = styled.div`
  flex-shrink: 0;
  opacity: 0.5;
  margin-right: ${props => (props.large ? '44px' : '24px')};
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
  text-align: ${props => props.left && 'left'};
  text-align: ${props => props.right && 'right'};
`

const ResultDetails = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Result = styled.div`
  font-weight: 700;
  font-size: ${props => (props.large ? '28px' : '14px')};
`

const Group = styled.div`
  position: absolute;
  margin-top: 3px;
  top: 100%;
  font-size: 10px;
  opacity: 0.3;
`

const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;
`

export default Match
