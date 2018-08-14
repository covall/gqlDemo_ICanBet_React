import React from 'react'
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

const MockGames = () => {
  const games = [
    {
      id: 1,
      phase: 'Grupa',
      teamA: {
        code: 'RUS'
      },
      teamB: {
        code: 'SAU'
      },
      result: {
        a: 5,
        b: 0
      }
    },
    {
      id: 2,
      phase: 'Ćwierćfinał',
      teamA: {
        code: 'EGY'
      },
      teamB: {
        code: 'URY'
      },
      result: {
        a: 0,
        b: 1
      }
    },
    {
      id: 3,
      phase: 'Finał',
      teamA: {
        code: 'MAR'
      },
      teamB: {
        code: 'IRN'
      },
      result: {
        a: 0,
        b: 1
      }
    }
  ]

  return <Games data={games} />
}

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

export default MockGames
