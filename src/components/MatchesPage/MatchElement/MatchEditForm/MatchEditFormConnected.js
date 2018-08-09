import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import MatchEditForm from './MatchEditForm'

// TODO: change according to server mutation
const EDIT_MATCH = gql`
  mutation($bet: BetInput!, $gamblerId: ID!, $gameId: ID!) {
    makeBet(betInput: $bet, gameId: $gameId, gamblerId: $gamblerId) {
      betNumbers {
        a
        b
        winInPenalties
      }
      points
    }
  }
`

const MatchEditFormConnectedToGQL = props => (
  <Mutation mutation={EDIT_MATCH}>
    {(editMatch, { data }) => (
      <MatchEditForm {...props} editMatch={editMatch} />
    )}
  </Mutation>
)

export default MatchEditFormConnectedToGQL
