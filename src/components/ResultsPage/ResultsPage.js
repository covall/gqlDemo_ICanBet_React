import React from 'react'
import ReactHighcharts from 'react-highcharts'

import chartConfig from './chart'
import PageTitle from '../PageTitle'
import PageContent from '../PageContent'

const ResultsPage = ({ data }) => {
  const config = chartConfig(data)

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

export default ResultsPage
