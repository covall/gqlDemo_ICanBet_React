import React from 'react'
import styled from 'styled-components'
import { StickyTable, Row, Cell as StickyTableCell } from 'react-sticky-table'
import slugify from '../../utils/slugify'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import Match from '../Match'
import TotalResult from '../TotalResult'
import BetWithScore from '../BetWithScore'

const BetsPage = ({ gamblers }) => (
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

        {/* BETS */}
        {Array(30).fill(null).map(() => (
          <Row>
            <Cell first>
              <Match
                date="2018-07-17T00:00:00.000Z"
                group="A"
                teamACode="RUS"
                teamAName="Rosja"
                teamBCode="SAU"
                teamBName="Arabia Saudyjska"
                resultA={5}
                resultB={0}
              />
            </Cell>
            {gamblers.map(() => (
              <Cell>
                <BetWithScore resultA={2} resultB={1} score={4} />
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
