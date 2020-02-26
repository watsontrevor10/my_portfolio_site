import React, { useState } from 'react'
import Seekr from './Seekr'
import { Button, Segment, Header, Card, Image, Label, Icon, Modal, Transition } from 'semantic-ui-react'
// Logos/Images
import dpl_seekr from './assets/dpl-seeker.png'
import star_wars from './assets/star_wars.png'

const Projects = () => {
  const [seekr, setSeekr] = useState(false)

  const openSeekr = () => {
    setSeekr(true)
  }

  const closeSeekr = () => {
    setSeekr(false)
  }

  return (
    <>
      <Segment inverted color='teal' size='huge'>
        <Header as='h3' id='proj'>
          Projects
      </Header>
      </Segment>
      <Card.Group>

        {/* DPL Seekr */}
        <Card color='red'>
          <Card.Content>
            <Card.Header>
              DevPoint Seekr
          </Card.Header>
            <Card.Meta>
              A jobs search tracking application
          </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Image src={dpl_seekr} size='big' centered />
            <br />
            <Card.Description>
              My team of 7 DevPoint Labs students built this to help job seekers keep track of the
              job search process without using a complex spreadsheet or sticky notes.
          </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta>
              Ruby on Rails | React.js | SASS/CSS | PostgreSQL | Recharts
          </Card.Meta>
            <br />
            {/* <Transition visible={seekr} animation='scale' duration={500}> */}
              <Modal
                trigger={
                  <Button
                    onClick={openSeekr}
                    color='teal'
                  >
                    See Demo
                </Button>

                }
                open={seekr}
                onClose={closeSeekr}
              >
                <Seekr />
              </Modal>

            {/* </Transition> */}
            <Label as='a' color='teal' image>
              <a href='https://github.com/watsontrevor10/dpl-seekr' target='_blank' rel='noopener noreferrer'>
                <Icon link name='github square' />
                GitHub
              </a>
            </Label>

          </Card.Content>
        </Card>



        {/* Star Wars Fan Site */}
        <Card color='red'>
          <Card.Content>
            <Card.Header>
              Star Wars Fan Site
          </Card.Header>
            <Card.Meta>
              Simple app using SWAPI.co API
          </Card.Meta>
          </Card.Content>
          <Card.Content>
            <Image src={star_wars} size='medium' />
            <Card.Description>
              DevPoint Labs project, built in the space of an afternoon.
              The main goal was to be able to pull info via external API and have a simple UI to view data, while exploring a new CSS library.
          </Card.Description>
          </Card.Content>
          <Card.Content>
            <Card.Meta>
              React.js | REST API | Grommet UI
          </Card.Meta>
            <br />
            <Label as='a' color='teal' image>
              <a href='https://github.com/watsontrevor10/star_wars_fan_site' target='_blank' rel='noopener noreferrer'>
                <Icon link name='github square' />
                GitHub
          </a>
            </Label>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  )
}

export default Projects