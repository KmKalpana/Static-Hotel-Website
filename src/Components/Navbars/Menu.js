import React, { useState } from 'react'
import { Link } from 'react-scroll'
import './navbar.css'
const Menu = () => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <nav className='navbar'>
      <div className='nav-left'> <h1>Hotel Abhinandan</h1></div>
      <div className='nav-right'>
        <ul className={isMobile ? 'nav-links-mobile' : 'nav-link'}>
          <Link smooth to='home' className='home'>
            <li>Home</li>
          </Link>
          <Link smooth to='about' className='about' duration={1000}>
            <li>About</li>
          </Link>
          <Link smooth to='gallery' className='covid' duration={1000}>
            <li>Gallery</li>
          </Link>
          <Link smooth to='restraunt' className='facility' duration={1000}>
            <li>Restraunt</li>
          </Link>
          <Link smooth to='contact' className='book' duration={1000}>
            <li>ContactUs</li>
          </Link>
        </ul>
        <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
          {
  isMobile
    ? (<i className='fas fa-times' />)
    : (<i className='fas fa-bars' />)
        }
        </button>
      </div>
    </nav>
  )
}
export default Menu
