import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Flex, Box } from 'reflexbox'
import { MediaQueryProvider } from 'react-media-query-hoc'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import mediaQueries from '../../config/mediaQueries'
import Menu from '../Menu'
import MatchesPage from '../MatchesPage'
import BetsPage from '../BetsPage'
import ResultsPage from '../ResultsPage'

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
})

const App = () => (
  <ApolloProvider client={client}>
    <MediaQueryProvider queries={mediaQueries}>
      <BrowserRouter>
        <Flex column>
          <Menu>
            <Menu.Item to="/matches">Mecze</Menu.Item>
            <Menu.Item to="/bets">Zakłady</Menu.Item>
            <Menu.Item to="/results">Wyniki</Menu.Item>
          </Menu>

          <Box>
            <Route exact path="/" render={() => <Redirect to="/matches" />} />

            <Switch>
              <Route path="/matches" render={() => <MatchesPage />} />
              <Route path="/bets" render={() => <BetsPage />} />
              <Route path="/results" render={() => <ResultsPage />} />
            </Switch>
          </Box>
        </Flex>
      </BrowserRouter>
    </MediaQueryProvider>
  </ApolloProvider>
)

export default App
