import React from 'react'
import { Mutation } from 'react-apollo'
import { Button } from 'antd'
import gql from 'graphql-tag'

import getErrorMessages from '../../../utils/getErrorMessages'
import getRandomInteger from '../../../utils/getRandomInteger'
import { showError, showSuccess } from '../../../utils/toast'
import { MATCHES_QUERY } from '../MatchesPage'

const ADD_MATCH = gql`
  mutation AddGameResult(
    $phase: String!
    $date: String!
    $teamA: ID!
    $teamB: ID!
    $resultInput: GameResultInput!
  ) {
    addGameResult(
      phase: $phase
      date: $date
      teamA: $teamA
      teamB: $teamB
      resultInput: $resultInput
    ) {
      id
      phase
      date,
      teamA {
        code
        name
        group
      }
      teamB {
        code
        name
        group
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

const AddRandomMatch = () => (
  <Mutation
    mutation={ADD_MATCH}
    update={(cache, { data: { addGameResult } }) => {
      const { games } = cache.readQuery({ query: MATCHES_QUERY })

      cache.writeQuery({
        query: MATCHES_QUERY,
        data: { games: [...games, addGameResult] }
      })
    }}
    onError={error => {
      const messages = getErrorMessages(error)
      const genericMessage = 'Ups, coś poszło nie tak!'

      showError(messages || genericMessage)
    }}
    onCompleted={() => {
      showSuccess('Dodano nowy rezultat gry.')
      const scrollingContainer = document.querySelector('.scrollingContainer')
      scrollingContainer.scrollTo(0, scrollingContainer.scrollHeight)
    }}
  >
    {(mutate, { loading }) => (
      <Button
        htmlType="button"
        type="primary"
        shape="circle"
        icon="plus"
        size="large"
        loading={loading}
        onClick={() => {
          mutate({
            variables: {
              phase: 'Grupa',
              date: '2019-03-03',
              teamA: ['COL', 'JPN'][getRandomInteger(0, 1)],
              teamB: ['POL', 'SEN'][getRandomInteger(0, 1)],
              resultInput: {
                a: getRandomInteger(0, 2),
                b: getRandomInteger(3, 4)
              }
            }
          })
        }}
      />
    )}
  </Mutation>
)

export default AddRandomMatch
