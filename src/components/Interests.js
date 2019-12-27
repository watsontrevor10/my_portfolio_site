import React, { useState, } from 'react'
import { Header, Container, Button, } from 'semantic-ui-react'

const musicLines = [
  'I’ve been playing bass guitar since I was 10',
  'it started with little things like the bass line to “Come Together”',
  'but when I got into jazz music in high school, things changed pretty quickly from there',
  'I learned the upright bass to play more jazz',
  'then studied jazz performance at Mesa Community College',
  'and transferred to Brigham Young University to continue my music studies.',
  'Since college I have . . . ',
  'performed as an Army musician for 10 years, currently a Sergeant with the 23rd Army band.',
  'been a freelancing musician performing for various events in various genres,', 
  'and currently play in a jazz trio called 3# performing for weddings and corporate events.',
  'Music has been an integral part of my life for a long time.',
  'Maybe one day I’ll get back into the professional music scene.', 
  'and while at one time I had ambitions to make a career of it,', 
  'right now I’m happy to call it a side gig.',  
]


const Interests = () => {

  const [musicIndex, setMusicIndex] = useState(0)
  
  const musicIncrement = (e) => {
    if (musicIndex < musicLines.length) {
      setMusicIndex(musicIndex + 1)
    } else {
      setMusicIndex(0)
    }
  }

  return(
    <div>
      <Header as='h2' textAlign='center'>Interests</Header>
      <br />
      <Header as='h3'>Photography</Header>
      {/* Carousel showcasing photos, description of photography passion */}
      
      <Header as='h3'>Music</Header>
      {/* Description of musical history, passions, link to 3# page, some photos */}
      <Container as='a' onClick={() => musicIncrement()}>
        <Header as='h3' textAlign='center'>{musicLines[musicIndex]}</Header>
      </Container>
      <Button onClick={() => musicIncrement()} centered>
        Next
      </Button>

      <Header as='h3'>Writing</Header>
      {/* Description of what I write and why I write, some examples of things I've written professionally */}
      {/* Link to https://chivsjawn.wordpress.com/ */}
    </div>
  )
}




export default Interests