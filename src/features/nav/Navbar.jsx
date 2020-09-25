import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'

import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

export default function Navbar() {
  const { authenticated } = useSelector(state => state.auth)

  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item as={NavLink} to='/' exact header>
          <img src='/assets/logo.png' alt='logo' style={{ marginRight: 15 }} />
          Revents
        </Menu.Item>
        <Menu.Item name='Events' as={NavLink} to='/events' exact />
        <Menu.Item name='Sandbox' as={NavLink} to='/sandbox' exact />
        {authenticated && (
          <Menu.Item as={NavLink} to='/createEvent'>
            <Button positive inverted content='Create Event' />
          </Menu.Item>
        )}
        {authenticated ? <SignedInMenu /> : <SignedOutMenu />}
      </Container>
    </Menu>
  )
}
