import React from 'react'
import { Header, Card, Divider, Label, Image, Icon, Segment, } from 'semantic-ui-react'
import filevine from './assets/filevine.png'
import nuvi from './assets/nuvi.png'
import utng from './assets/utng.png'
import xant from './assets/xant.png'
import byulogo from './assets/byulogo.png'
import armylogo from './assets/armylogo.png'
import dpllogo from './assets/dpllogo.png'

const About = () => (
  <div>
    
    {/* Work History Section */}
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='hist'>
        Experience
      </Header>
    </Segment>
    <br />  
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
       
      <Card color='orange' raised fluid >
        <Card.Content>
          <Image src={filevine} size='medium' floated='left' wrapped />
          <br/>
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
        
      <Card color='orange' raised fluid>
        <Card.Content>
          <Image src={xant} size='small' floated='left' wrapped />
          <Card.Header>
            <ul>
              <li>Technical Support</li>
              <li>Solutions Consultant</li>
              <li>Solutions Consultanting Architect</li>
            </ul>
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

    {/* Education Section */}
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='edu'>
        Education
      </Header>
    </Segment>
    <Card.Group>
        <Card color='green'>
          <Card.Content textAlign='center' >
            <Image src={byulogo} size='tiny' />
          </Card.Content>
          <Card.Content>
            <Card.Header>Brigham Young University</Card.Header>
            <Card.Meta>Bachelor of Art - Music</Card.Meta>
          </Card.Content>
        </Card>  

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
      
        <Card color='green'>
          <Card.Content textAlign='center' >
            <Image src={dpllogo} size='tiny' />
          </Card.Content>
          <Card.Content>
            <Card.Header>
              DevPoint Labs - University of Utah
            </Card.Header>
            <Card.Meta>
              Full-stack Web Development Certificate
            </Card.Meta>
          </Card.Content>
        </Card>
    </Card.Group>
  </div>
)

export default About