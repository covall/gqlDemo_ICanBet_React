import React from 'react'
import styled from 'styled-components'
import { StickyTable, Row, Cell as StickyTableCell } from 'react-sticky-table'
import slugify from '../../utils/slugify'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import Match from '../Match'
import TotalResult from '../TotalResult'
import BetWithScore from '../BetWithScore'

const BetsPage = ({ gamblers, games }) => (
  <PageTitle title="Zakłady">
    <PageContent fullWidth>
      <StickyTable>
        <Row>
          <HeadCell first />
          {gamblers.map(gambler => (
            <HeadCell key={`gambler-${slugify(gambler.id)}`}>
              <GamblerName>{gambler.name}</GamblerName>
              <TotalResult place={gambler.place} score={gambler.points} />
            </HeadCell>
          ))}
        </Row>

        {/* GAMES - bo wierszy jest DOKŁADNIE tyle ile gier a nie zakładów */}
        {games.map(game => (
          <Row key={`game-${game.id}`}>
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
            {gamblers.map((gambler, index) => (
              <Cell key={`bet-${index}`}>
                {/* dany BET dla game.id oraz gamblers[index].id - to anypattern by w każdej iteracji wyciągać dany rekord */}
                <BetWithScore resultA={2} resultB={1} score={4} game={game} />
              </Cell>
            ))}
          </Row>
        ))}
      </StickyTable>
    </PageContent>
  </PageTitle>
)

const Cell = styled(({ children, className }) => (
  <StickyTableCell className={className}>{children}</StickyTableCell>
))`
  text-align: center;
  padding-left: 20px;
  padding-right: ${props => (props.first ? '135px' : '20px')};
  border-right: 1px solid #979797;
`

const HeadCell = styled(Cell)`
  padding-top: 40px;
  padding-bottom: 30px;
`

const GamblerName = styled.div`
  font-size: 20px;
  margin-bottom: 13px;
`

export default BetsPage
