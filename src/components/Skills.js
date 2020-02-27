import React, { useState } from 'react'
import { Card, Header, Segment, Image, Modal } from 'semantic-ui-react'
// Images/Logos
import csslogo from './assets/css3-logo.png'
import domo from './assets/domo.png'
import htmllogo from './assets/html-logo.png'
import lightroom from './assets/lightroom.png'
import postgres from './assets/postgres.png'
import railsLogo from './assets/rails.png'
import react from './assets/react.png'
import salesforce from './assets/sfdc.png'
import semanticLogo from './assets/semantic.png'
import wordpress from './assets/wordpress-logo.png'
import postman from './assets/postman.png'
import sqlectron from './assets/sqlectron.png'
import DomoPreso from './DomoPreso'

const Skills = () => {
  const [domoPreso, setDomoPreso] = useState(false)

  const toggleDomoPreso = () => {
    setDomoPreso(!domoPreso)
  }

  return (
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
      <br />

      <Card.Group itemsPerRow={4} doubling>

        {/* Ruby on Rails */}
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

        {/* Postgresql */}
        <Card color='blue'>
          <Card.Content style={skillStyle}>
            <Image src={postgres} size='small' />
          </Card.Content>
        </Card>

        {/* HTML */}
        <Card color='blue'>
          <Card.Content style={skillStyle}>
            <Image src={htmllogo} size='small' />
          </Card.Content>
        </Card>

        {/* CSS */}
        <Card color='blue'>
          <Card.Content style={skillStyle}>
            <Image src={csslogo} size='small' />
          </Card.Content>
        </Card>

        {/* Semantic UI */}
        <Card color='blue'>
          <Card.Content style={skillStyle}>
            <Image src={semanticLogo} size='small' />
          </Card.Content>
        </Card>
      </Card.Group>

      {/* Software platforms */}
      <Header style={subsectionStyle}>
        Platforms
    </Header>

      <Card.Group itemsPerRow={4} doubling>

        {/* DOMO Analytics */}
        <Card color='blue' as='a' onClick={toggleDomoPreso}>
          <Card.Content style={skillStyle} >
            <Image src={domo} size='small' />
          </Card.Content>
          <Modal
            open={domoPreso}
            onClose={toggleDomoPreso}
          >
            <DomoPreso />
          </Modal>
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

        {/* WordPress */}
        <Card color='blue'>
          <Card.Content style={skillStyle} >
            <Image src={wordpress} size='small' />
          </Card.Content>
        </Card>

        {/* Postman */}
        <Card color='blue'>
          <Card.Content style={skillStyle} >
            <Image src={postman} size='small' />
          </Card.Content>
        </Card>

        {/* SQLectron */}
        <Card color='blue'>
          <Card.Content style={skillStyle} >
            <Image src={sqlectron} size='small' />
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}

const skillStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
}

const subsectionStyle = {
  textSize: 30,
  textAlign: 'center'
}

export default Skills 