import React, { useState, } from 'react'
import About from './About'
import Interests from './Interests'
import Contact from './Contact'
import { Divider, Header, Container } from 'semantic-ui-react'


const Home = () => (
    <div>
      <Header>
        <h1 style={styleTitle}>Trevor Watson</h1>
      </Header>
      <Header sub textAlign='center'>
        Developer | Musician | Photographer | Writer
      </Header>
      <Container>
        <br />
        <About id='about'/>
          <Divider />
        <Interests id='interests' />
          <Divider />
        <Contact id='contact' />
      </Container>
    </div>
  )

  const styleTitle = {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: '10px'
  }


export default Home