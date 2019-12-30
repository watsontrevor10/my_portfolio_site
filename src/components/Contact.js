import React from 'react'
import { Segment, Icon, } from 'semantic-ui-react'


const Contact = () => (
  <div>
    <Segment raised textAlign='center'>
      <a href='https://www.linkedin.com/in/trevorjwatson/' target='_blank' >
        <Icon name='linkedin' size='massive' color='blue' link />
      </a> 
      <a href='https://twitter.com/chivsjawn' target='_blank'>
        <Icon name='twitter' size='massive' color='blue' link />       
      </a>
      <a href='https://github.com/watsontrevor10' target='_blank'>
        <Icon name='github' size='massive' color='black' link />       
      </a>
    </Segment>
    <Segment textAlign='center' raised>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLScKypyhlI5FmPngKCuBfIFqfIlyY3ScWXO9LjATvtsbnwQ2fQ/viewform?embedded=true" 
        width="540" 
        height="677" 
        frameborder="0" 
        marginheight="0" 
        marginwidth="0"
        name='contactForm'
        title='contactForm'
        >
          Loading…
        </iframe>
    </Segment>
  
  </div>
)

export default Contact