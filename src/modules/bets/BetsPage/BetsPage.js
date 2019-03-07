import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import loader from 'hoc-react-loader'

import slugify from '../../../utils/slugify'
import { Match, PageContent, PageTitle, Spinner } from '../../../components'
import TotalResult from '../TotalResult'
import BetWithScore from '../BetWithScore'

const propTypes = {
  gamblers: PropTypes.array,
  games: PropTypes.array
}

const BetsPage = ({ gamblers = [], games = [] }) => (
  <PageTitle title="Zakłady">
    <PageContent fullWidth>
      <TableWrapper>
        <table>
          <thead>
            <tr>
              <HeadCell first />
              {gamblers.map(gambler => (
                <HeadCell key={`gambler-${slugify(gambler.id)}`}>
                  <GamblerName>{gambler.name}</GamblerName>
                  <TotalResult place={gambler.place} score={gambler.points} />
                </HeadCell>
              ))}
            </tr>
          </thead>

          <tbody>
            {games.map(game => (
              <tr key={`game-${game.id}`}>
                <Cell first>
                  <Match
                    date={game.date}
                    phase={game.phase}
                    group={game.teamA.group}
                    teamACode={game.teamA.code}
                    teamAName={game.teamA.name}
                    teamBCode={game.teamB.code}
                    teamBName={game.teamB.name}
                    resultA={game.result.a}
                    resultB={game.result.b}
                    resultPenaltyA={game.result.aPenalties}
                    resultPenaltyB={game.result.bPenalties}
                  />
                </Cell>

                {gamblers.map((gambler, index) => {
                  const bet = game.bets[index]

                  return (
                    <Cell key={`bet-${gambler.id}-${game.id}`}>
                      <BetWithScore game={game} bet={bet} />
                    </Cell>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrapper>
    </PageContent>
  </PageTitle>
)

BetsPage.propTypes = propTypes

const TableWrapper = styled.div`
  position: relative;
  white-space: nowrap;
`

const Cell = styled.td`
  padding-right: ${props => (props.first ? '135px' : '20px')};
  position: ${props => props.first && 'sticky'};
  left: ${props => props.first && '20px'};
  text-align: center;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-right: 1px solid #979797;
  vertical-align: middle;
  background-color: #fff;
`

const HeadCell = styled.th`
  position: sticky;
  top: 0;
  left: ${props => props.first && '20px'};
  z-index: ${props => (props.first ? 20 : 10)};
  padding-top: 40px;
  padding-bottom: 30px;
  text-align: center;
  border-right: 1px solid #979797;
  background-color: #fff;
`

const GamblerName = styled.div`
  font-size: 20px;
  margin-bottom: 13px;
`

export default loader({
  LoadingIndicator: Spinner,
  print: props => props.gamblers && props.gamblers.length,
  delay: 200
})(BetsPage)
