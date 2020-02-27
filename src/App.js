import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Experience from './components/Experience'
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
        <Route exact path='/experience' component={Experience} />
        <Route exact path='/interests' component={Interests} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/seekr' component={Seekr} />
        <Route exact path='/domopreso' component={DomoPreso} />
        <Route component={NoMatch} />
      </Switch>
  </>
)

export default App;
