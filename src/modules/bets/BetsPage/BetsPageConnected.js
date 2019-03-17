import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { ErrorBox } from '../../../components'
import BetsPage from './BetsPage'

const GAMBLERS_WITH_BETS_QUERY = gql`
  query gamblersWithBets {
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
        id
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
`

const BetsPageConnectedToGQL = () => (
  <Query query={GAMBLERS_WITH_BETS_QUERY}>
    {({ loading, error, data }) => {
      if (error) return <ErrorBox />

      return <BetsPage gamblers={data.gamblers} games={data.games} />
    }}
  </Query>
)

export default BetsPageConnectedToGQL
export { GAMBLERS_WITH_BETS_QUERY }
