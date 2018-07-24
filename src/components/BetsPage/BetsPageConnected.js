import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import BetsPage from './BetsPage'

const BetsPageConnectedToGQL = () => (
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
          bets {
            gambler {
              id
            }
            betNumbers {
              a
              b
              winInPenalties
            }
            points
          }
        }
        gamblers {
          id
          name
          points
          place
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładuję</div>
      if (error) return <div>Error :(</div>

      return (
        <BetsPage gamblers={data.gamblers || []} games={data.games || []} />
      )
    }}
  </Query>
)

export default BetsPageConnectedToGQL
