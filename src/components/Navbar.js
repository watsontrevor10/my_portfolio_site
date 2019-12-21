import React, { useState, } from 'react'
import { Menu, Image,  } from 'semantic-ui-react'
import { Link, } from 'react-router-dom'

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home')

  return (
    <Menu inverted pointing vertical fixed='left'>
        <Link to='/'>
          <Menu.Header as='h1' textAlign='center'>Trevor Watson</Menu.Header>
          <Menu.Item 
            content={<Image src='https://scontent-den4-1.xx.fbcdn.net/v/t31.0-8/p960x960/12028618_10153611247155270_1724168919915248315_o.jpg?_nc_cat=105&_nc_ohc=yzrpOrZAueYAQmHbxrTu5Z65JXjIaEIcxFQxMMWgGBKnaaSJtTPYAuojQ&_nc_ht=scontent-den4-1.xx&oh=5b6994a972598bf67facf7f7e7da4631&oe=5E7120B3' />}
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
    </Menu>
  )
}

export default Navbar