import React, { Fragment } from 'react'
import styled from 'styled-components'
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
import { Flex } from 'reflexbox'

import apolloClient from '../../init/apollo'
import mediaQueries from '../../config/mediaQueries'
import Menu, { MenuItem } from '../Menu'
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
            <MenuItem key="/matches">
              <NavLink to="/matches">
                <Flex justify="space-between" align="center">
                  <IconContainer>
                    <GiSoccerField />
                  </IconContainer>
                  <span>Mecze</span>
                </Flex>
              </NavLink>
            </MenuItem>
            <MenuItem key="/bets">
              <NavLink to="/bets">
                <Flex justify="space-between" align="center">
                  <IconContainer>
                    <GiTicket />
                  </IconContainer>
                  <span>Zakłady</span>
                </Flex>
              </NavLink>
            </MenuItem>
            <MenuItem key="/results">
              <NavLink to="/results">
                <Flex justify="space-between" align="center">
                  <IconContainer>
                    <GiSoccerBall />
                  </IconContainer>
                  <span>Wyniki</span>
                </Flex>
              </NavLink>
            </MenuItem>
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

const IconContainer = styled.div`
  margin-right: 10px;
  font-size: 18px;
  line-height: 1;
`

export default App
