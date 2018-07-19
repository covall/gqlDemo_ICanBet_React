import React, { Fragment } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
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
        <Fragment>
          <Menu>
            <Menu.Item to="/matches">Mecze</Menu.Item>
            <Menu.Item to="/bets">Zakłady</Menu.Item>
            <Menu.Item to="/results">Wyniki</Menu.Item>
          </Menu>

          <Route exact path="/" render={() => <Redirect to="/matches" />} />

          <Switch>
            <Route path="/matches" render={() => <MatchesPage />} />
            <Route path="/bets" render={() => <BetsPage />} />
            <Route path="/results" render={() => <ResultsPage />} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    </MediaQueryProvider>
  </ApolloProvider>
)

export default App
