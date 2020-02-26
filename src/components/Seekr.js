import React from 'react'
import { Container, Embed, Divider, Header, List, Segment } from 'semantic-ui-react'


const Seekr = () => {

  return (
    <Segment>
      <Header
        as='h2'
        textAlign='center'
      >
        Seekr by DevPoint Labs
      </Header>
      <Embed>Placeholder for video</Embed>
      <Divider />
      <Container>
        <p>
          Seekr was built by myself and 6 colleagues as part of the DevPoint Labs coding curriculum.
          As a team, we had about a month to complete the assignment, which was to build a job search tracking application.
          This tool helps keep track of jobs that you are applying for as part of the job search in a Kanban board fashion.
        </p>
        <p>
          Inside of each job that you set up you have the ability to track info about the job, notes, tasks, contacts, and interviews.
        </p>
        <p>
          There is also a home page with graphs and modules that you show you number of jobs applied for, stage of your applications,
          and upcoming tasks and interviews
        </p>
        <p>
          While we worked together as a team or in pairs on most things, some of the modules I contributed to most were:
        </p>
        <List>
          <List.Item>
            <List.Content>
              <List.Header>Home/Graphs</List.Header>
            </List.Content>
            <List.Description>
              This was one of my big projects on this app.  I built the graphs first using react-google-charts, 
              but they were hard to manage and poorly documented, so I switched to Recharts.  I also used a combination of 
              SQL, ActiveRecord and JavaScript to filter and sort results on this page. 
            </List.Description>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                Tasks
              </List.Header>
              <List.Description>
                This component was definitely a group effort, I primarily refactored the componenet a few times as the app changed.
              </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>
                Notes and Contacts
              </List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    </Segment>
  )
}

export default Seekr 