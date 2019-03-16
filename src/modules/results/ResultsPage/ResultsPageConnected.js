import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { ErrorBox } from '../../../components'
import ResultsPage from './ResultsPage'

const ResultsPageConnectedToGQL = () => (
  <Query
    query={gql`
      query results {
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
      if (error) return <ErrorBox />

      return <ResultsPage data={data} />
    }}
  </Query>
)

export default ResultsPageConnectedToGQL
