import React from 'react'
import { ApolloProvider } from 'react-apollo'

import apolloClient from '../../init/apollo'
import Games from './Games'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Games />
  </ApolloProvider>
)

export default App
