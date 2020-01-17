import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { Divider, Header, Container, Segment, Image, Grid, } from 'semantic-ui-react'
import trevor from './assets/trevor.jpg'
import familypic from './assets/familypic.jpeg'

// About page covering: Work history and Education
const Home = () => (
  <div>
    {/* Header banner */}
    <Segment inverted>
      <Grid stackable columns={3} >
        <Grid.Column textAlign='center' verticalAlign='middle'>
          <Image src={trevor} size='medium' centered />
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
          <Segment inverted>
            <Header inverted>
              <h1 style={styleTitle}>Trevor Watson</h1>
            </Header>
            <Header sub inverted textAlign='center'>
              Developer | Musician | Photographer | Writer
              </Header>
            <br />
          </Segment>
        </Grid.Column>

        <Grid.Column textAlign='center' verticalAlign='middle' only='computer tablet' >
          <Image src={familypic} size='medium' centered />
        </Grid.Column>
      </Grid>
    </Segment>

    {/* Bio */}
    <Container>
      <p style={paragraphStyle}>
        I am passionate about learning new things and solving problems in a creative way.
        </p>
      <p style={paragraphStyle}>
        I am a professional musician and technical consultant, budding photographer, wannabe writer/author,
        a developing full-stack developer,
        and most importantly husband and father.
        </p>
      <p style={paragraphStyle}>
        My professional work at this point has taken me into a number of roles from customer service and management in service and retail industries,
        all the way to technical support and technical consulting in the software world.
        I am constantly on the search for the next challenge and the next topic to research.
        And this drive has led me to web development.  I was looking for something that would allow me to continue to learn and grow,
        gain new skills and have the potential build amazing things.
        </p>
      <br />

      {/* Render Components */}
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </Container>
  </div>
)

// Styles functions
const styleTitle = {
  fontSize: 45,
  textAlign: 'center',
  paddingTop: '10px'
}

const paragraphStyle = {
  fontSize: 15
}

export default Home