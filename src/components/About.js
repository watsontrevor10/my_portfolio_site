import React from 'react'
import { Header, Card, Divider, Label, Image, Icon, Container, } from 'semantic-ui-react'

const About = () => (
  <div>
    <br />
    <Header as='h2' textAlign='center'>
      About Me
    </Header>
    <Container textAlign='center'>
      <a href='#hist'>| Work | </a>
      <a href='#edu'>Education | </a>
      <a href='#skills'>Skills | </a>
      <a href='#proj'>Projects | </a>
    </Container>
    <br />
    <Header as='h3' id='hist'>
      Work History
    </Header>
    <br />
    <Card.Group>
      <Card
        color='orange'
        raised
        fluid
        header='Utah Army National Guard'
        meta='Army Bandsman'
        description={[
          'Principal bassist for the 23rd Army Band.',
          'Perform national and international tours, balls, ceremonies, ',
          'and concerts for military, civilian, and patriotic events.'
        ].join('')}
      />
      <Card
        color='orange'
        raised
        fluid
        header='Filevine'
        meta='Enterprise Implementation Consultant'
        description={[
          'Enterprise technical consultant and project manager for law firms nationwide.',
          'Consulting on setup of case management system, coordinated database migrations, ',
          'and managed the implementation of the client.  Coordinated with the client; the sales, ',
          'data migrations, product management, and client success teams to successfully implement clinets.'
        ].join('')}
      />
      <Card
        color='orange'
        raised
        fluid
        header='NUVI'
        meta='Enterprise Solutions Consultant'
        description={[
          'Enterprise strategic consultant for sales reps, enterprise prospects, and clients. ',
          'Social listening and social analytics product expert.',
        ].join('')}
      />
      <Card
        color='orange'
        raised
        fluid
        header='InsideSales.com'
        meta='Solutions Consultanting Architect | Solutions Consultant | Technical Support'
        description={[
          'Worked in a variety of roles, including technical support, where I supported all of the products on Salesforce.com, ',
          'and their proprietary Lead Management Platform. ',
          'After that I was a Solutions Consultant, supporting small business sales teams.  I was responsible for ',
          'demonstrations of the product, administering trials of the software, and attaining a high proficiency in the Salesforce.com platform. ',
          'Finally I was a Solutions Consulting Architect, where I was responsible for desiging the training curriculum for new Solutions Consultants, ',
          'researching new tools to improve sales processes, setting up custom demo environments in Salesforce.com and Microsoft Dynamics and supporting sales ',
          'and Solutions Consulting teams.'     
        ].join('')}
      />
    </Card.Group>
    <br />
    <Label as='a' color='teal' image>
      <Icon link name='linkedin' />  
      See More
    </Label>

    <Divider />

    <Header as='h3' id='edu'>
      Education
    </Header>
    <Card.Group>
        <Card 
          header='Brigham Young University'
          meta='Bachelor of Art - Music'
        />
        <Card 
          header='Army School of Music'
          meta='Honors Graduate'
        />
        <Card 
          header='DevPoint Labs - University of Utah'
          meta='Full-stack Web Development Certificate'
        />
    </Card.Group>
    <Divider />
    <Header as='h3' id='skills'>
      Skills
    </Header>
    <Card.Group>
      <Card>
        <Card.Content>
          <Image 
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/411px-Ruby_On_Rails_Logo.svg.png'
          />
          {/* <Card.Header>Ruby on Rails</Card.Header> */}
        </Card.Content>
      </Card>
      <Card>
        <Card.Content>
          <Image 
            src='https://applitools.com/blog/wp-content/uploads/2019/01/React_logo_wordmark.png'
          />
          {/* <Card.Header>React.js</Card.Header> */}
        </Card.Content>
      </Card>
    </Card.Group>
    <Divider />
    <Header as='h3' id='proj'>
      Projects
    </Header>
    <br />
    <p>
        Coming Soon . . . 
    </p>
  </div>
)

export default About