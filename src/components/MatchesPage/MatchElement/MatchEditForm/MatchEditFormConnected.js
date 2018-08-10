import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import getErrorMessages from '../../../../utils/getErrorMessages'
import { showError, showSuccess } from '../../../../utils/toast'
import { MATCHES_QUERY } from '../../../MatchesPage'
import { BETS_QUERY } from '../../../BetsPage'
import MatchEditForm from './MatchEditForm'

const EDIT_GAME_RESULT = gql`
  mutation EditGameResult($result: GameResultInput!, $id: ID!) {
    editGameResult(resultInput: $result, id: $id) {
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
      showSuccess('Zmodyfikowałeś wynik gry.')
      props.onCompleted()
    }}
  >
    {mutate => (
      <MatchEditForm
        {...props}
        editMatch={(id, result) => {
          mutate({
            variables: { id, result },
            refetchQueries: [{ query: MATCHES_QUERY }, { query: BETS_QUERY }]
          })
        }}
      />
    )}
  </Mutation>
)

export default MatchEditFormConnectedToGQL
