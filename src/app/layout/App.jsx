import React from 'react'
import { Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import EventDashboard from '../../features/events/eventDashboard/EventDashboard'
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage'
import EventForm from '../../features/events/eventForm/EventForm'
import HomePage from '../../features/home/HomePage'
import Navbar from '../../features/nav/Navbar'

export default function App() {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container className='main'>
              <Route exact path='/events' component={EventDashboard} />
              <Route path='/events/:id' component={EventDetailedPage} />
              <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
            </Container>
          </>
        )}
      />
    </>
  )
}
