import React from 'react'
import { Header, Container, } from 'semantic-ui-react'


const DomoPreso = () => {

  return (
    <>
      <Header textAlign='center' as='h2'>
        Social Media Analysis
        <Header.Subheader>
          Using NUVI social media data and DOMO
        </Header.Subheader>
      </Header>
      <Container>
        <iframe
          title='Domo Demo'
          src="https://docs.google.com/presentation/d/e/2PACX-1vRYCaZMGsMmkZoBCeSXRXd2wrXkZPy92AJI7k2YKdvbDCiCB2Vj5DpRGJCzxfwudwBMeMYh3kNbyT8Z/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          position='absolute'
          height='850'
          width='100%'
          allowfullscreen="false"
          mozallowfullscreen="false"
          webkitallowfullscreen="false"
        >
        </iframe>
      </Container>
    </>
  )
}

export default DomoPreso