import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
// {
//   id: ID!
//   phase: String!
//   date: String!
//   teamA: {
//     code: ID!
//     name: String!
//     group: String!
//   }
//   teamB: {
//     code: ID!
//     name: String!
//     group: String!
//   }
//   result: {
//     a: Int!
//     b: Int!
//   }
// }

const FetchGames = () => (
  <Query
    query={gql`
      {
        games {
          id
          phase
          teamA {
            code
          }
          teamB {
            code
          }
          result {
            a
            b
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładowanie...</div>
      if (error) return <div>Wystąpił błąd :(</div>

      const games = data.games

      return <Games data={games} />
    }}
  </Query>
)

const Games = ({ data }) => (
  <div>
    <h1>Mecze:</h1>

    {Array.isArray(data) &&
      data.map(game => (
        <div key={game.id}>
          Faza: {game.phase}
          <br />
          {game.teamA.code} - {game.teamB.code} ({game.result.a}:{game.result.b})
          <hr />
        </div>
      ))}
  </div>
)

export default FetchGames
