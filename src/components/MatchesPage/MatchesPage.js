import React from 'react'
import styled from 'styled-components'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import Match from '../Match'

const MatchesPage = ({ data }) => (
  <PageTitle title="Mecze">
    <PageContent>
      <MatchesContainer>
        {data.map(element => (
          <MatchContainer>
            <Match
              key={`match-${element.id}`}
              date={element.date}
              phase={element.phase}
              group={element.teamA.group}
              teamACode={element.teamA.code}
              teamAName={element.teamA.name}
              teamBCode={element.teamB.code}
              teamBName={element.teamB.name}
              resultA={element.result.a}
              resultB={element.result.b}
              resultPenaltyA={element.result.aPenalties}
              resultPenaltyB={element.result.bPenalties}
              large
            />
          </MatchContainer>
        ))}
      </MatchesContainer>
    </PageContent>
  </PageTitle>
)

const MatchContainer = styled.div`
  margin-bottom: 30px;
`

const MatchesContainer = styled.div`
  padding: 80px 0;
`

export default MatchesPage
