import React, { useState, } from 'react'
import { Menu, } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <Menu secondary pointing>
      <Menu.Header as='h1' textAlign='center'>Trevor Watson</Menu.Header>
      <Menu.Menu position='right'>
        <Link to='/'>
          <Menu.Item 
            name='home'
            active={activeItem === 'home'}
            onClick={() => setActiveItem('home')}
          />
        </Link>
        <Link to='/about'>
          <Menu.Item 
            name='about'
            active={activeItem === 'about'}
            onClick={() => setActiveItem('about')}
          />
        </Link>
        <Link to='/interests'>
          <Menu.Item 
            name='interests'
            active={activeItem === 'interests'}
            onClick={() => setActiveItem('interests')}
          />
        </Link>
        <Link to='/contact'>
          <Menu.Item 
            name='contact'
            active={activeItem === 'contact'}
            onClick={() => setActiveItem('contact')}
          />    
        </Link>
      </Menu.Menu>
    </Menu>
  )
}

export default Navbar