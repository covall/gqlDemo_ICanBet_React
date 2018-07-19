import React from 'react'
import ReactHighcharts from 'react-highcharts'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import PageTitle from '../PageTitle'
import PageContent from '../PageContent'
import graphConfig from './graph'

const ResultsPage = ({ data }) => {
  const config = graphConfig(data)
  return (
    <PageTitle title="Wyniki">
      <PageContent>
        <div style={{ marginTop: 45, marginBottom: 45, height: '80vh' }}>
          <ReactHighcharts config={config} height={600} />
        </div>
      </PageContent>
    </PageTitle>
  )
}

// const ResultsPageConnectedMock = () => {
//   const data = {
//     games: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
//     playerPoints: [
//       { name: 'Kosa', points: [0, 1, 4, 0, 2] },
//       { name: 'Michał K.', points: [0, 2, 2, 0, 2] },
//       { name: 'Arek G.', points: [4, 1, 4, 0, 0] },
//       { name: 'Kalbar', points: [0, 2, 4, 2, 2] },
//       { name: 'Wujek Gaweł', points: [2, 4, 2, 0, 2] }
//     ]
//   }
//
//   const dataCumulative = getCumulativePoints(data)
//
//   return <ResultsPage data={dataCumulative} />
// }

const ResultsPageConnectedToGQL = () => (
  <Query
    query={gql`
      {
        allGames {
          id
        }
        allGamblers {
          id
          bets {
            game {
              id
            }
            score
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <div>Ładuję</div>
      if (error) return <div>Error :(</div>

      const graphData = {
        games: data.allGames,
        playerPoints: data.allGamblers.map(gambler => {
          const pointsArray = Array(data.allGames.length).fill(0)
          gambler.bets.forEach(bet => {
            pointsArray[bet.game.id - 1] = bet.score
          })
          return {
            name: gambler.id,
            points: pointsArray
          }
        })
      }

      const dataCumulative = getCumulativePoints(graphData)

      return <ResultsPage data={dataCumulative} />
    }}
  </Query>
)

function getCumulativePoints(data) {
  const playerPointsCumulative = data.playerPoints.map(pp => {
    const pointsCumulative = []
    pp.points.reduce((prev, curr, index) => {
      return (pointsCumulative[index] = prev + curr)
    }, 0)
    return { ...pp, points: pointsCumulative }
  })
  const dataCumulative = { ...data, playerPoints: playerPointsCumulative }
  return dataCumulative
}

export default ResultsPageConnectedToGQL
