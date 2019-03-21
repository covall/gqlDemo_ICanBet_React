import React from 'react'
import { Mutation, withApollo } from 'react-apollo'
import gql from 'graphql-tag'

import getErrorMessages from '../../../utils/getErrorMessages'
import { showError, showSuccess } from '../../../utils/toast'
import { GAMBLERS_WITH_BETS_QUERY } from '../../bets/BetsPage'
import MatchEditForm from './MatchEditForm'

const EDIT_GAME_RESULT = gql`
  mutation EditGameResult($result: GameResultInput!, $id: ID!) {
    editGameResult(resultInput: $result, id: $id) {
      id
      result {
        a
        b
        aPenalties
        bPenalties
      }
    }
  }
`

const MatchEditFormConnectedToGQL = props => (
  <Mutation
    mutation={EDIT_GAME_RESULT}
    onError={error => {
      const messages = getErrorMessages(error)
      const genericMessage = 'Ups, coś poszło nie tak!'

      showError(messages || genericMessage)
    }}
    onCompleted={() => {
      showSuccess('Zmodyfikowano wynik gry.')

      if (props.onCompleted) {
        props.onCompleted()
      }
    }}
  >
    {(mutate, { loading }) => (
      <MatchEditForm
        {...props}
        loading={loading}
        editMatch={(id, result) => {
          mutate({
            variables: { id, result },
            refetchQueries: [{ query: GAMBLERS_WITH_BETS_QUERY }]
          })
        }}
      />
    )}
  </Mutation>
)

export default withApollo(MatchEditFormConnectedToGQL)
