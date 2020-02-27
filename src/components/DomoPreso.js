import React from 'react'
import { Header, Embed, } from 'semantic-ui-react'


const DomoPreso = () => {

  return (
    <>
      <Header textAlign='center' as='h2'>
        Social Media Analysis
        <Header.Subheader>
          Using NUVI social media data and DOMO
        </Header.Subheader>
      </Header>
      <Embed autoplay='true'>
        <iframe
          title='Domo Demo'
          src="https://docs.google.com/presentation/d/e/2PACX-1vRYCaZMGsMmkZoBCeSXRXd2wrXkZPy92AJI7k2YKdvbDCiCB2Vj5DpRGJCzxfwudwBMeMYh3kNbyT8Z/embed?start=true&loop=true&delayms=3000"
          frameborder="0"
          width="1058"
          height="823"
          allowfullscreen="true"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
        >
        </iframe>
      </Embed>
    </>
  )
}

export default DomoPreso