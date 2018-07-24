const config = chartData => {
  if (!chartData) {
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
      categories: chartData.games.map(game => game.id)
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
    series: chartData.gamblerPoints.map(pp => {
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
