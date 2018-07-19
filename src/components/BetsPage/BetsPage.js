import React from 'react'
import styled from 'styled-components'
import { StickyTable, Row, Cell as StickyTableCell } from 'react-sticky-table'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import Match from '../Match'
import TotalResult from '../TotalResult'
import BetWithScore from '../BetWithScore'

const BetsPage = () => (
  <PageTitle title="Zakłady">
    <PageContent fullWidth>
      <StickyTable>
        <Row>
          <HeadCell first />
          <HeadCell>
            <PlayerName>Kosa</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Michał K.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Arek G.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Kalbar</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Wujek Gaweł</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Konrad K.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Kosa</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Michał K.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Arek G.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Kalbar</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Wujek Gaweł</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Konrad K.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Kosa</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Michał K.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Arek G.</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Kalbar</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
          <HeadCell>
            <PlayerName>Wujek Gaweł</PlayerName>
            <TotalResult place={12} score={34} />
          </HeadCell>
        </Row>
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
          <Cell>
            <BetWithScore resultA={2} resultB={1} score={4} />
          </Cell>
          <Cell>
            <BetWithScore resultA={2} resultB={2} penaltyWinner="RUS" score={4} />
          </Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
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
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
          <Cell>cell 1</Cell>
          <Cell>cell 2</Cell>
          <Cell>cell 3</Cell>
          <Cell>cell 4</Cell>
          <Cell>cell 5</Cell>
          <Cell>cell 6</Cell>
        </Row>
      </StickyTable>
    </PageContent>
  </PageTitle>
)

const Cell = styled(StickyTableCell)`
  text-align: center;
  padding-left: 20px;
  padding-right: ${props => (props.first ? '135px' : '20px')};
  border-right: 1px solid #979797;
`

const HeadCell = styled(Cell)`
  padding-top: 40px;
  padding-bottom: 30px;
`

const PlayerName = styled.div`
  font-size: 20px;
  margin-bottom: 13px;
`

export default BetsPage
