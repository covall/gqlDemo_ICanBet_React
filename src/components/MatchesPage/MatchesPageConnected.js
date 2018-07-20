import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import MatchesPage from './MatchesPage'

const MatchesPageConnectedToGQL = () => (
  <Query
    query={gql`
      {
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
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładuję</div>
      if (error) return <div>Error :(</div>

      console.log('data', data)

      return <MatchesPage data={data.games || []} />
    }}
  </Query>
)

export default MatchesPageConnectedToGQL
