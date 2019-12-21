import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Interests from './components/Interests'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import { Route, Switch, } from 'react-router-dom'
import { Container, Grid } from 'semantic-ui-react'


const App = () => (
  <>
    <Grid>
      <Grid.Column width={3}>
        <Navbar />
      </Grid.Column>
      <Grid.Column width={12}>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/interests' component={Interests} />
            <Route exact path='/contact' component={Contact} />

            <Route component={NoMatch} />
          </Switch>
        </Container>
      </Grid.Column>
    </Grid>
  </>
)

export default App;
