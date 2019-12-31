import React from 'react'
import { Segment, Header, Card, } from 'semantic-ui-react'

const Projects = () => (
  <div>
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='proj'>
        Projects
      </Header>
    </Segment>
    <br />
    <Header as='h5'>Future Projects</Header>
    <Card.Group>
      <Card 
        header='Music Lesson Manager'
        description='A CRM-like system for managing students of private music teaching studios. 
        Calendar management, contacts, invoicing, and payment tracking are the essentials for this app.'
        color='red'
      />
      <Card 
        header='Adventures with Jim'
        description='A tour guide booking site for my father-in-law.  
        Jim goes on the best adventures, and knows the best places that are well off the beaten path.'
        color='red'
      />
      </Card.Group>
  </div> 
)

export default Projects