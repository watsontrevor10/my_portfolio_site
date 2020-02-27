import React from 'react'
import { Header, Card, Segment, Image, } from 'semantic-ui-react'
import byulogo from './assets/byulogo.png'
import armylogo from './assets/armylogo.png'
import dpllogo from './assets/dpllogo.png'


const Education = () => {

  return (
    <>
      {/* Education Section */}
      <Segment inverted color='teal' size='huge'>
        <Header as='h3' id='edu'>
          Education
      </Header>
      </Segment>
      <Card.Group>

        {/* BYU */}
        <Card color='green'>
          <Card.Content textAlign='center' >
            <Image src={byulogo} size='tiny' />
          </Card.Content>
          <Card.Content>
            <Card.Header>Brigham Young University</Card.Header>
            <Card.Meta>Bachelor of Art - Music</Card.Meta>
          </Card.Content>
        </Card>

        {/* Army Music School */}
        <Card color='green'>
          <Card.Content textAlign='center'>
            <Image src={armylogo} size='tiny' />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              Army School of Music
            </Card.Header>
            <Card.Meta>
              Honors Graduate
            </Card.Meta>
          </Card.Content>
        </Card>

        {/* DPL */}
        <Card color='green'>
          <Card.Content textAlign='center' >
            <Image src={dpllogo} size='tiny' />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              DevPoint Labs
          </Card.Header>
            <Card.Meta>
              University of Utah Certificate in Full-stack Web Development
          </Card.Meta>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  )
}

export default Education