// import React from 'react'
// import ReactDOM from 'react-dom'

// import Tooltip from './Tooltip'

const config = graphData => {
  if (!graphData) {
    return {}
  }

  return {
    chart: { height: 600 },
    title: {
      text: ''
    },
    credits: {
      enabled: false
    },
    xAxis: {
      title: { text: 'Mecze' },
      categories: graphData.games.map(game => game.id)
    },
    yAxis: [
      {
        // left axis
        title: {
          text: 'Punkty'
        }
      }
    ],
    legend: {
      layout: 'horizontal',
      align: 'center',
      verticalAlign: 'bottom'
    },
    tooltip: {
      // formatter: function() {
      //   const container = document.createElement('div')
      //   ReactDOM.render(
      //     <Tooltip
      //       tooltipData={{
      //         header: `The beginning of the observation window: ${this.x}`,
      //         points: this.points.map(point => ({
      //           name: point.series.name,
      //           color: point.color,
      //           value: point.y,
      //           suffix: ''
      //         }))
      //       }}
      //     />,
      //     container
      //   )
      //   return container.innerHTML
      // },
      shared: true,
      useHTML: true
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        }
      }
    },
    series: graphData.playerPoints.map(pp => {
      return {
        // OY lewa
        name: pp.name,
        data: pp.points,
        yAxis: 0
      }
    })
  }
}
export default config
