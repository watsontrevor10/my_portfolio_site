import React, { useState, } from 'react'
import { Menu, Icon, Dropdown, } from 'semantic-ui-react'
import { useWindowWidth, } from '../hooks/windowWidth'
// import trevor from './assets/trevor.jpg'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')
  const width = useWindowWidth()
  
  if (width <= 1000) {
    return (
      <Menu size='mini' icon attached='top' compact>
        <Dropdown item icon='bars' simple>
          <Dropdown.Menu>
            <Dropdown.Item>
              <a href='#hist'>
                <Menu.Item 
                  name='work'
                  active={activeItem === 'work'}
                  onClick={() => setActiveItem('work')}
                >
                  <Icon name='suitcase' fixed='left' />
                </Menu.Item>
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href='#edu'>
                <Menu.Item 
                  name='Education'
                  active={activeItem === 'Education'}
                  onClick={() => setActiveItem('Education')}
                >
                  <Icon name='graduation cap' fixed='left' />
                </Menu.Item>
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href='#skills'>
                <Menu.Item 
                  name='skills'
                  active={activeItem === 'skills'}
                  onClick={() => setActiveItem('skills')}
                >
                  <Icon name='star' fixed='left' />
                </Menu.Item>
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a href='#proj'>
                <Menu.Item 
                  name='projects'
                  active={activeItem === 'projects'}
                  onClick={() => setActiveItem('projects')}
                >
                  <Icon name='wrench' fixed='left' />  
                </Menu.Item>    
              </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
  } else {
    return (
      <Menu size='tiny' compact attached='top' icon='labeled'>
          <a href='#hist'>
            <Menu.Item 
              name='work'
              active={activeItem === 'work'}
              onClick={() => setActiveItem('work')}
            >
              <Icon name='suitcase' fixed='left' />
              Work
            </Menu.Item>
          </a>
          <a href='#edu'>
            <Menu.Item 
              name='Education'
              active={activeItem === 'Education'}
              onClick={() => setActiveItem('Education')}
            >
              <Icon name='graduation cap' fixed='left' />
              Education
            </Menu.Item>
          </a>
          <a href='#skills'>
            <Menu.Item 
              name='skills'
              active={activeItem === 'skills'}
              onClick={() => setActiveItem('skills')}
            >
              <Icon name='star' fixed='left' />
              Skills
            </Menu.Item>
          </a>
          <a href='#proj'>
            <Menu.Item 
              name='projects'
              active={activeItem === 'projects'}
              onClick={() => setActiveItem('projects')}
            >
              <Icon name='wrench' fixed='left' />  
              Projects
            </Menu.Item>    
          </a>
      </Menu>
    )
  }
}

export default Navbar