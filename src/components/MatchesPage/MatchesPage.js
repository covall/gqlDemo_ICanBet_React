import React from 'react'
import styled from 'styled-components'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import MatchElement from './MatchElement'

const MatchesPage = ({ data }) => (
  <PageTitle title="Mecze">
    <PageContent>
      <MatchesContainer>
        {data.map(element => (
          <MatchElement data={element} key={`match-${element.id}`} />
        ))}
      </MatchesContainer>
    </PageContent>
  </PageTitle>
)

const MatchesContainer = styled.div`
  padding: 80px 0;
`

export default MatchesPage
