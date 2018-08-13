import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import ResultsPage from './ResultsPage'

const ResultsPageConnectedToGQL = () => (
  <Query
    query={gql`
      {
        games {
          id
        }
        gamblers {
          id
          place
          points
          bets {
            game {
              id
            }
            points
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładuję</div>
      if (error) return <div>Error :(</div>

      const chartData = {
        games: data.games,
        gamblerPoints: data.gamblers.map(gambler => {
          const pointsArray = Array(data.games.length).fill(0)
          gambler.bets.forEach(bet => {
            pointsArray[bet.game.id - 1] = bet.points
          })
          return {
            name: gambler.id,
            points: pointsArray
          }
        })
      }

      const dataCumulative = getCumulativePoints(chartData)

      return <ResultsPage data={dataCumulative} />
    }}
  </Query>
)

function getCumulativePoints(data) {
  const gamblerPointsCumulative = data.gamblerPoints.map(pp => {
    const pointsCumulative = []
    pp.points.reduce((prev, curr, index) => {
      return (pointsCumulative[index] = prev + curr)
    }, 0)
    return { ...pp, points: pointsCumulative }
  })
  const dataCumulative = { ...data, gamblerPoints: gamblerPointsCumulative }
  return dataCumulative
}

export default ResultsPageConnectedToGQL
