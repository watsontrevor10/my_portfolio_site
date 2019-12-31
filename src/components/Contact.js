import React from 'react'
import { Segment, Icon, Modal, Header,  } from 'semantic-ui-react'


const Contact = () => (
  <>
    <Segment inverted color='teal' size='huge'>
      <Header as='h3' id='contact'>
        Contact Me
      </Header>
    </Segment>
    {/* Links to social media profiles */}
    <Segment raised textAlign='center'>
      <a href='https://www.linkedin.com/in/trevorjwatson/' target='_blank' rel='noopener noreferrer' >
        <Icon name='linkedin' size='massive' color='blue' link />
      </a>   
      <a href='https://www.instagram.com/chivsjawnphoto' target='_blank' rel='noopener noreferrer'>
        <Icon name='instagram' size='massive' color='violet' link />
      </a>
      <a href='https://twitter.com/chivsjawn' target='_blank' rel='noopener noreferrer'>
        <Icon name='twitter' size='massive' color='blue' link />       
      </a>
      <a href='https://github.com/watsontrevor10' target='_blank' rel='noopener noreferrer'>
        <Icon name='github' size='massive' color='black' link />       
      </a>
      {/* Google contact form */}
      <Modal trigger={<Icon name='mail' size='massive' link />}>
        <Modal.Content>
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
        </Modal.Content>
      </Modal>
    </Segment>
    <br/>
  </>
)

export default Contact