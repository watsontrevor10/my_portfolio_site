import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Interests from './components/Interests'
import Contact from './components/Contact'
import NoMatch from './components/NoMatch'
import Seekr from './components/Seekr'
import DomoPreso from './components/DomoPreso'
import { Route, Switch, } from 'react-router-dom'


const App = () => (
  <>
    <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/seekr' component={Seekr} />
        <Route exact path='/domopreso' component={DomoPreso} />
        <Route component={NoMatch} />
      </Switch>
  </>
)

export default App;
