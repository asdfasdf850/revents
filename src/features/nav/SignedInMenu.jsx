import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedInMenu({ handleSignOut }) {
  return (
    <Menu.Item position='right'>
      <Image avatar spaced='right' src='/assets/user.png' />
      <Dropdown pointing='top left' text='Bob'>
        <Dropdown.Menu>
          <Dropdown.Item as={Link} to='/createEvent' text='Create event' icon='plus' />
          <Dropdown.Item text='My profile' icon='user' />
          <Dropdown.Item text='Sign out' icon='power' onClick={handleSignOut} />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  )
}
