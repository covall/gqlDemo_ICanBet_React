import React from 'react'
import styled from 'styled-components'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import Match from '../Match'

const MatchesPage = () => (
  <PageTitle title="Mecze">
    <PageContent>
      <MatchesContainer>
        <Match
          large
          date="2018-07-17T00:00:00.000Z"
          group="A"
          teamACode="RUS"
          teamAName="Rosja"
          teamBCode="SAU"
          teamBName="Arabia Saudyjska"
          resultA={5}
          resultB={0}
        />

        <Match
          large
          date="2018-07-17T00:00:00.000Z"
          group="A"
          teamACode="POL"
          teamAName="Polska"
          teamBCode="COL"
          teamBName="Kolumbia"
          resultA={5}
          resultB={0}
        />

        <Match
          large
          date="2018-07-17T00:00:00.000Z"
          group="A"
          teamACode="RUS"
          teamAName="Rosja"
          teamBCode="SAU"
          teamBName="Arabia Saudyjska"
          resultA={5}
          resultB={0}
        />

        <Match
          large
          date="2018-07-17T00:00:00.000Z"
          group="A"
          teamACode="RUS"
          teamAName="Rosja"
          teamBCode="SAU"
          teamBName="Arabia Saudyjska"
          resultA={0}
          resultB={0}
          resultPenaltyA={4}
          resultPenaltyB={3}
        />
      </MatchesContainer>
    </PageContent>
  </PageTitle>
)

const MatchesContainer = styled.div`
  padding: 80px 0;
`

export default MatchesPage
