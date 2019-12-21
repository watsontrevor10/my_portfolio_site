import React from 'react'
import { Link, } from 'react-router-dom'
import Home from './Home'

const NoMatch = () => (
  <div>
    <h3>This Page Does not Exist</h3>
    <h4>Go <Link to='/'>Home</Link></h4>
  </div>
)

export default NoMatch