import React from 'react'
import { Segment, Header, Card, Image, Label, Icon } from 'semantic-ui-react'
// Logos/Images
import dpl_seekr from './assets/dpl-seeker.png'
import star_wars from './assets/star_wars.png'

const Projects = () => (
  <div>
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='proj'>
        Projects
      </Header>
    </Segment>

    <Header style={subsectionStyle}>
      Full-Stack Applications
    </Header>
    <br/>
    <Card.Group>
      {/* DPL Seekr */}
      <Card color='red'>
        <Card.Content>
          <Card.Header>
            DevPoint Seekr
          </Card.Header>
          <Card.Meta>
            A jobs search tracking application
          </Card.Meta>
          </Card.Content>
          <Card.Content>
          <Image  src={dpl_seekr} size='big' centered />
          <br/>
          <Card.Description>
            My team of 7 DevPoint Labs students built this to help job seekers keep track of the 
            job search process without using a complex spreadsheet or sticky notes.
          </Card.Description>
          </Card.Content>
          <Card.Content>
          <Card.Meta>
            Ruby on Rails | React.js | SASS/CSS | PostgreSQL | Recharts
          </Card.Meta>
          <br/>
          <Label as='a' color='teal' image>
          <a href='https://github.com/watsontrevor10/dpl-seekr' target='_blank' rel='noopener noreferrer'>
            <Icon link name='github square'/>
            GitHub
          </a>
          </Label>
        </Card.Content>
      </Card>   
    </Card.Group>

    <Header style={subsectionStyle}>
      Other Projects
    </Header>
    <Card.Group>
      {/* Star Wars Fan Site */}
      <Card color='red'>
        <Card.Content>
          <Card.Header>
            Star Wars Fan Site
          </Card.Header>
          <Card.Meta>
            Simple app using SWAPI.co API
          </Card.Meta>
          <Image src={star_wars} size='medium' />
          <Card.Meta>
            React.js | REST API | Grommet UI 
          </Card.Meta>
          <br/>
          <Label as='a' color='teal' image>
          <a href='https://github.com/watsontrevor10/star_wars_fan_site' target='_blank' rel='noopener noreferrer'>
            <Icon link name='github square'/>
            GitHub
          </a>
          </Label>
        </Card.Content>
      </Card>
    </Card.Group>
    
    {/* Future Projects */}
    <Header style={subsectionStyle}>
      Future Projects
    </Header>
    <br/>
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

const subsectionStyle = {
  textSize: 30,
  textAlign: 'center'
}

export default Projects