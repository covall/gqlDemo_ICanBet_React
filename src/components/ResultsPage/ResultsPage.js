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
        gamblerPoints: data.allGamblers.map(gambler => {
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
