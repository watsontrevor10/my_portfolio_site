import React, { useState, } from 'react'
import {Header, Image, } from 'semantic-ui-react'
import tetons from '../assets/tetons.jpg'
// import { Link } from 'react-router-dom'
// import About from '../components/About'
// import Contact from '../components/Contact'
// import Interests from '../components/Interests'

const Home = () => (
    <div>
      <Header sub textAlign='center'>
        Developer |  Musician  |  Writer  |  Photographer
      </Header>
      <Image src={tetons} fluid alt='mountain photo' />
    </div>
  )


export default Home