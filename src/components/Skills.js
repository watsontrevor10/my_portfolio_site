import React from 'react'
import { Card, Header, Segment, Image, } from 'semantic-ui-react'
import domo from './assets/domo.png'
import salesforce from './assets/sfdc.png'
import lightroom from './assets/lightroom.png'
import semanticLogo from './assets/semantic.png'
import railsLogo from './assets/rails.png'
import react from './assets/react.png'
import postgres from './assets/postgres.png'

const Skills = () => (
  <div>
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='skills'>
        Skills
      </Header>
    </Segment>

    {/* Development languages and frameworks */}
    <Header style={subsectionStyle}>
     Development
    </Header>
    <br/>
    {/* Ruby on Rails */}
    <Card.Group itemsPerRow={4} doubling>
      <Card color='blue'>
        <Card.Content style={skillStyle}>
          <Image src={railsLogo} size='small' />
        </Card.Content>
      </Card>

      {/* React.js */}
      <Card color='blue'>
        <Card.Content style={skillStyle}>
          <Image src={react} size='small' />
          {/* <h3>React.js</h3> */}
        </Card.Content>
      </Card>

      {/* Semantic UI */}
      <Card color='blue'>
        <Card.Content style={skillStyle}>
          <Image src={semanticLogo} size='small' />
        </Card.Content>
      </Card>

      {/* Postgresql */}
      <Card color='blue'>
        <Card.Content style={skillStyle}>
          <Image src={postgres} size='small' />
        </Card.Content>
      </Card>
    </Card.Group>

    {/* Software platforms */}
    <Header style={subsectionStyle}>
      Platforms
    </Header>

    <Card.Group itemsPerRow={4} doubling>

      {/* DOMO Analytics */}
      <Card color='blue'>
        <Card.Content style={skillStyle} >
          <Image src={domo} size='small' />
        </Card.Content>
      </Card>

      {/* Salesforce */}
      <Card color='blue'>
        <Card.Content style={skillStyle} >
          <Image src={salesforce} size='small' />
        </Card.Content>
      </Card>

      {/* Lightroom */}
      <Card color='blue'>
        <Card.Content style={skillStyle} >
          <Image src={lightroom} size='small' />
        </Card.Content>
      </Card>
    </Card.Group>
  </div>
)

const skillStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
}

const subsectionStyle = {
  textSize: 30,
  textAlign: 'center'
}

export default Skills 