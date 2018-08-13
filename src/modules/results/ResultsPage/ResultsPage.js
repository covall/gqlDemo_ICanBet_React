import React from 'react'
import ReactHighcharts from 'react-highcharts'
import loader from 'hoc-react-loader'

import chartConfig from './chart'
import { PageContent, PageTitle, Spinner } from '../../../components'

const ResultsPage = ({ data }) => {
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
  const config = chartConfig(dataCumulative)

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

const getCumulativePoints = data => {
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

export default loader({
  LoadingIndicator: Spinner,
  print: props => props.data.games && props.data.gamblers,
  delay: 200
})(ResultsPage)
