import React from 'react'
import About from './About'
import Interests from './Interests'
import Contact from './Contact'
import { Divider, Header, Container, Segment, Image, } from 'semantic-ui-react'
import trevor from './assets/trevor.jpg'


const Home = () => (
    <div>
      <Segment>
        <Header>
          <h1 style={styleTitle}>Trevor Watson</h1>
        </Header>
        <Header sub textAlign='center'>
          Developer | Musician | Photographer | Writer
        </Header>
        <br/>
        <Image src={trevor} size='medium' centered />
      </Segment>
      
      <br/>
      <Container>
        <p style={paragraphStyle}>
          I am passionate about learning new things and solving problems in a creative way.
        </p>
        <p style={paragraphStyle}>  
           I am a professional musician, budding photographer, wannabe writer/author, a developing full-stack developer, 
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
        <About id='about'/>
          <Divider />
        {/* <Interests id='interests' /> */}
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

  const paragraphStyle = {
    fontSize: 15
  }


export default Home