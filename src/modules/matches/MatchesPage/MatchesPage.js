import React from 'react'
import styled from 'styled-components'
import loader from 'hoc-react-loader'

import { PageContent, PageTitle, Spinner } from '../../../components'
import MatchElement from '../MatchElement'

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

export default loader({
  LoadingIndicator: Spinner,
  print: props => props.data.length,
  delay: 200
})(MatchesPage)
