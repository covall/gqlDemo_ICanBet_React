import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ResultsPage from './ResultsPage'

const ResultsPageConnectedToGQL = () => (
  <Query
    query={gql`
      query RESULTS {
        games {
          id
        }
        gamblers {
          id
          place
          points
          bets {
            game {
              id
            }
            points
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (error) return <div>Error :(</div>

      return <ResultsPage data={data} />
    }}
  </Query>
)

export default ResultsPageConnectedToGQL
