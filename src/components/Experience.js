import React from 'react'
import { Header, Card, Divider, Label, Image, Icon, Segment, } from 'semantic-ui-react'
import filevine from './assets/filevine.png'
import nuvi from './assets/nuvi.png'
import utng from './assets/utng.png'
import xant from './assets/xant.png'


const Experience = () => (

  <div>
    {/* Work History Section */}
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='exp'>
        Experience
      </Header>
    </Segment>
    <br />

    {/* National Guard */}
    <Card.Group>
      <Card color='orange' raised fluid>
        <Card.Content>
          <Image src={utng} size='tiny' floated='left' />
          <br />
          <Card.Header>
            Utah Army National Guard
          </Card.Header>
          <br />
          <Card.Header>
            Army Bandsman
          </Card.Header>
          <Divider />
          <Card.Description>
            {[
              'Sergeant and Principal Bassist for the 23rd Army Band.',
              'Perform national and international tours, balls, ceremonies, ',
              'and concerts for military, civilian, and patriotic events.'
            ].join(' ')}
          </Card.Description>
        </Card.Content>
      </Card>

      {/* Filevine */}
      <Card color='orange' raised fluid >
        <Card.Content>
          <Image src={filevine} size='medium' floated='left' wrapped />
          <br />
          <Card.Header>
            Enterprise Implementation Consultant
          </Card.Header>
          <Divider />
          <Card.Description>
            {[
              'Enterprise technical consultant and project manager for law firms nationwide. ',
              'Consulting on setup of case management systems, coordinated database migrations, ',
              'and managed the implementation of the client.  Coordinated with the client as well as the sales, ',
              'data migrations, product management, and client success teams to successfully implement clients.'
            ].join(' ')}
          </Card.Description>
        </Card.Content>
      </Card>

      {/* NUVI */}
      <Card color='orange' raised fluid >
        <Card.Content>
          <Image src={nuvi} size='small' floated='left' wrapped />
          <br />
          <Card.Header>
            Enterprise Solutions Consultant
          </Card.Header>
          <Divider />
          <Card.Description>
            {[
              'Enterprise strategic consultant for sales reps, enterprise prospects, and clients. ',
              'Social listening and social media analytics product expert.',
            ].join(' ')}
          </Card.Description>
        </Card.Content>
      </Card>

      {/* InsideSales.com */}
      <Card color='orange' raised fluid>
        <Card.Content>
          <Image src={xant} size='small' floated='left' wrapped />
          <Card.Header>
            <p>Technical Support</p>
            <p>Solutions Consultant</p>
            <p>Solutions Consultanting Architect</p>
          </Card.Header>
          <Divider />
          <Card.Description>
            {[
              'Worked in a variety of roles, including technical support, Solutions Consultant. ',
              'Proficient in Salesforce.com and Microsoft Dynamics. ',
            ].join(' ')}
          </Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>

    <br />
    <Label as='a' color='teal' image>
      <a href='https://www.linkedin.com/in/trevorjwatson/' target='_blank' rel='noopener noreferrer'>
        <Icon link name='linkedin' />
        See More
      </a>
    </Label>

    <Divider />

    
  </div>
)

export default Experience