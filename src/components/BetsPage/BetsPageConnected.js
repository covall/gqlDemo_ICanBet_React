import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import BetsPage from './BetsPage'

const BetsPageConnectedToGQL = () => (
  <Query
    query={gql`
      {
        gamblers {
          id
          name
          bets {
            game {
              id
              date
              teamA {
                code
                name
              }
              teamB {
                code
                name
              }
            }
            betNumbers {
              a
              b
              winInPenalties
            }
            points
          }
          points
          place
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładuję</div>
      if (error) return <div>Error :(</div>

      return <BetsPage gamblers={data.gamblers || []} />
    }}
  </Query>
)

export default BetsPageConnectedToGQL
