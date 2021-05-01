import React from 'react'
import { format } from 'date-fns'
import styled from 'styled-components'
import { withMedia } from 'react-media-query-hoc'

import Flag from '../Flag'

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
    phase,
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
            <FlagStyled
              code={teamACode}
              teamName={teamAName}
              large={sizeLarge}
              left
            />

            {sizeLarge && <TeamName left>{teamAName}</TeamName>}
          </Team>

          <ResultDetails large={sizeLarge}>
            <Result large={sizeLarge}>
              <ResultPoint>{resultA}</ResultPoint> :{' '}
              <ResultPoint>{resultB}</ResultPoint>
            </Result>

            {resultPenaltyA != null && resultPenaltyB != null && (
              <ResultPenalties>
                (<ResultPoint>{resultPenaltyA}</ResultPoint> :{' '}
                <ResultPoint>{resultPenaltyB}</ResultPoint>)
              </ResultPenalties>
            )}

            <Phase large={sizeLarge}>
              {phase} {phase === 'Grupa' && group}
            </Phase>
          </ResultDetails>

          <Team large={sizeLarge} right>
            {sizeLarge && <TeamName right>{teamBName}</TeamName>}

            <FlagStyled
              code={teamBCode}
              teamName={teamBName}
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
  width: ${props => (props.large ? '250px' : 'auto')};
  justify-content: ${props => props.left && 'flex-start'};
  justify-content: ${props => props.right && 'flex-end'};
  line-height: 1.3;
`

const FlagStyled = styled(({ className, code, large, teamName }) => (
  <Flag
    className={className}
    code={code}
    title={teamName}
    height={large ? 64 : 32}
  />
))`
  box-shadow: ${props => props.left && '1px 0px 1px #c0c0c0'};
  box-shadow: ${props => props.right && '-1px 0px 1px #c0c0c0'};
  border-top-left-radius: ${props => props.left && '5px'};
  border-bottom-left-radius: ${props => props.left && '5px'};
  border-top-right-radius: ${props => props.right && '5px'};
  border-bottom-right-radius: ${props => props.right && '5px'};
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
  border-radius: 5px;
`

const TeamName = styled.div`
  font-size: 18px;
  margin-left: ${props => (props.left ? 30 : 0)}px;
  margin-right: ${props => (props.right ? 30 : 0)}px;
  text-align: ${props => props.left && 'left'};
  text-align: ${props => props.right && 'right'};
`

const ResultDetails = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 ${props => (props.large ? 30 : 20)}px;
`

const Result = styled.div`
  font-weight: 700;
  font-size: ${props => (props.large ? '28px' : '14px')};
`

const ResultPoint = styled.div`
  display: inline-flex;
  max-width: 60px;
`

const ResultPenalties = styled.div`
  margin-top: 5px;
  font-weight: 700;
  font-size: ${props => (props.large ? '28px' : '14px')};
`

const Phase = styled.div`
  position: absolute;
  margin-top: 10px;
  top: 100%;
  font-size: 10px;
  opacity: 0.3;
  white-space: nowrap;
`

const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export default Match
