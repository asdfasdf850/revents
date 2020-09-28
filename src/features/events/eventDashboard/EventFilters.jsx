import React from 'react'
import Calendar from 'react-calendar'
import { Header, Menu } from 'semantic-ui-react'

export default function EventFilters({ predicate, handleSetPredicate, loading }) {
  return (
    <>
      <Menu vertical size='large' style={{ width: '100%' }}>
        <Header icon='filter' attached color='teal' content='Filters' />
        <Menu.Item
          content='All events'
          active={predicate.get('filter') === 'all'}
          onClick={() => handleSetPredicate('filter', 'all')}
          disabled={loading}
        />
        <Menu.Item
          content="I'm going"
          active={predicate.get('filter') === 'isGoing'}
          onClick={() => handleSetPredicate('filter', 'isGoing')}
          disabled={loading}
        />
        <Menu.Item
          content="I'm hosting"
          active={predicate.get('filter') === 'isHost'}
          onClick={() => handleSetPredicate('filter', 'isHost')}
          disabled={loading}
        />
      </Menu>
      <Header icon='calendar' attached color='teal' content='Select date' />
      <Calendar
        onChange={date => handleSetPredicate('startDate', date)}
        value={predicate.get('startDate') || new Date()}
        tileDisabled={() => loading}
      />
    </>
  )
}
