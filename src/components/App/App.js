import React, { Fragment } from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import { MediaQueryProvider } from 'react-media-query-hoc'
import { ApolloProvider } from 'react-apollo'
import { GiSoccerBall, GiSoccerField, GiTicket } from 'react-icons/gi'

import apolloClient from '../../init/apollo'
import mediaQueries from '../../config/mediaQueries'
import Menu from '../Menu'
import MatchesPage from '../../modules/matches/MatchesPage'
import BetsPage from '../../modules/bets/BetsPage'
import ResultsPage from '../../modules/results/ResultsPage'
import GlobalStyle from '../../components/GlobalStyle'

const App = () => (
  <ApolloProvider client={apolloClient}>
    <MediaQueryProvider queries={mediaQueries}>
      <BrowserRouter>
        <Fragment>
          <Menu>
            <Menu.Item key="/matches">
              <NavLink to="/matches">
                <GiSoccerField />
                Mecze
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/bets">
              <NavLink to="/bets">
                <GiTicket />
                Zakłady
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/results">
              <NavLink to="/results">
                <GiSoccerBall />
                Wyniki
              </NavLink>
            </Menu.Item>
          </Menu>

          <Route exact path="/" render={() => <Redirect to="/matches" />} />

          <Switch>
            <Route path="/matches" render={() => <MatchesPage />} />
            <Route path="/bets" render={() => <BetsPage />} />
            <Route path="/results" render={() => <ResultsPage />} />
          </Switch>

          <GlobalStyle />
        </Fragment>
      </BrowserRouter>
    </MediaQueryProvider>
  </ApolloProvider>
)

export default App
