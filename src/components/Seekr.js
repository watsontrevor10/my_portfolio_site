import React from 'react'
import { Embed, Divider, Header, Segment } from 'semantic-ui-react'
import dplseekr from './assets/dpl-seeker.png'


const Seekr = () => {

  return (
    <Segment>
      <Header
        as='h2'
        textAlign='center'
      >
        DevPoint Seekr
      </Header>
      <Embed
        id='Dps7caZ1CaQ'
        placeholder={dplseekr}
        source='youtube'
      />
      <Divider />
        <p>
          Seekr was built by myself and 6 colleagues as part of the DevPoint Labs coding curriculum.
          As a team, we had about a month to complete the assignment, which was to build a job search tracking application.
          This tool helps keep track of jobs that you are applying for as part of a job search in a Kanban board.
        </p>
        <p>
          For each job that you are applying for you have the ability to track info about the job, notes, tasks, contacts, and interviews.
        </p>
        <p>
          There is also a home page with graphs and modules that give a good overview of where you are at in the process and what you need to do next.
        </p>
    </Segment>
  )
}

export default Seekr 