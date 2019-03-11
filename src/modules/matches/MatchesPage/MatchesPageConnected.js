import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import MatchesPage from './MatchesPage'

const MATCHES_QUERY = gql`
  query MATCHES_QUERY {
    games {
      id
      phase
      date
      teamA {
        code
        name
        group
      }
      teamB {
        code
        name
      }
      result {
        a
        b
        aPenalties
        bPenalties
      }
    }
  }
`

const MatchesPageConnectedToGQL = () => (
  <Query query={MATCHES_QUERY}>
    {({ loading, error, data }) => {
      if (error) return <div>Error :(</div>

      return <MatchesPage data={data.games} />
    }}
  </Query>
)

export default MatchesPageConnectedToGQL
export { MATCHES_QUERY }
