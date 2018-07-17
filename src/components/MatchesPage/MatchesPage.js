import React from 'react'

import PageTitle from '../PageTitle'
import Match from '../Match'

const MatchesPage = () => (
  <PageTitle title="Mecze">
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
  </PageTitle>
)

export default MatchesPage
