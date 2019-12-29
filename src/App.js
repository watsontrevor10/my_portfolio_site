import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Interests from './components/Interests'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import { Route, Switch, } from 'react-router-dom'
import { Container, Grid, Responsive, Segment, } from 'semantic-ui-react'


const App = () => (
  <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/contact' component={Contact} />
        <Route component={NoMatch} />
      </Switch>
  </>
)

export default App;
