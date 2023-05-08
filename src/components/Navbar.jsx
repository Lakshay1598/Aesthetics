import React from 'react'
import './navbar.css'


const Navbar = () => {
  return (
    <div className='header_panel'>
        <ul className='header_list'>
            <li className='header_link'><a href="#project">WORK</a></li>
            <li className='header_link'><a href="#about">ABOUT</a></li>
            <li className='header_link'><a href="#contact">CONTACT</a></li>
            <li className='header_link'><a href="#career">JOBS</a></li>
            
        </ul>

    </div>
  )
}

export default Navbar