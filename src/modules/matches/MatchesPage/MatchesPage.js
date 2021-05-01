import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import loader from 'hoc-react-loader'

import { PageContent, PageTitle, Spinner } from '../../../components'
import MatchElement from '../MatchElement'
import AddRandomMatch from '../AddRandomMatch'

const propTypes = {
  data: PropTypes.array
}

const MatchesPage = ({ data = [] }) => (
  <PageTitle title="Mecze">
    <PageContent>
      <MatchesContainer>
        <Actions>
          <AddRandomMatch />
        </Actions>

        {data.map(element => (
          <MatchElement data={element} key={`match-${element.id}`} />
        ))}
      </MatchesContainer>
    </PageContent>
  </PageTitle>
)

MatchesPage.propTypes = propTypes

const MatchesContainer = styled.div`
  position: relative;
  padding: 100px 40px 40px;
`

const Actions = styled.div`
  position: fixed;
  z-index: 10;
  top: 60px;
  right: 10px;
`

export default loader({
  LoadingIndicator: Spinner,
  print: props => props.data && props.data.length,
  delay: 200
})(MatchesPage)
