import React from 'react'
import { Query } from 'react-apollo'

const MatchesPageConnectedToGQL = () => (
  <Query
    query={gql`
      {
        allGames {
          id
          phase
          date
          teamA {
            code
            name
            group
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
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      // TODO: wyświetlić dane
      //
      // if (loading) return <div>Ładuję</div>
      // if (error) return <div>Error :(</div>
      //
      // const graphData = {
      //   games: data.allGames,
      //   playerPoints: data.allGamblers.map(gambler => {
      //     const pointsArray = Array(data.allGames.length).fill(0)
      //     gambler.bets.forEach(bet => {
      //       pointsArray[bet.game.id - 1] = bet.score
      //     })
      //     return {
      //       name: gambler.id,
      //       points: pointsArray
      //     }
      //   })
      // }
      //
      // const dataCumulative = getCumulativePoints(graphData)
      //
      // return <ResultsPage data={dataCumulative} />
    }}
  </Query>
)
