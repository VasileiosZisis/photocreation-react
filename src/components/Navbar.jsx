import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <div className='nav-img-div'>
          <img
            className='nav-img'
            src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632158213/studiophotocreation/logo-black_uw3ade.png'
          />
        </div>
        <div className='nav-ul-div'>
          <ul className='nav-ul'>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                Cypriot Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                English Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                Christenings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                Proposals
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                Families
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/'>
                Models
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
