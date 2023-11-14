import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleOpen = e => {
    setToggleOpen(!toggleOpen)
    if (!toggleOpen) {
      e.currentTarget.setAttribute('aria-expanded', 'true')
    } else {
      e.currentTarget.setAttribute('aria-expanded', 'false')
    }
  }
  const toggle = () => setToggleOpen(!toggleOpen)

  return (
    <header>
      <nav>
        <div className='nav-img-div'>
          <NavLink to='/' onClick={toggle}>
            <img
              className='nav-img'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632158213/studiophotocreation/logo-black_uw3ade.png'
            />
          </NavLink>
          <button
            onClick={e => handleOpen(e)}
            aria-expanded='false'
            className={`hamburger ${toggleOpen ? 'active' : ''}`}
          >
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='screen-reader-text'>Menu</span>
          </button>
        </div>
        <div>
          <ul className={`nav-ul ${toggleOpen ? 'show' : ''}`}>
            <li className='nav-li'>
              <NavLink
                className='navlink'
                to='/cypriot-weddings'
                onClick={toggle}
              >
                Cypriot Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink
                className='navlink'
                to='/english-weddings'
                onClick={toggle}
              >
                English Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/christenings' onClick={toggle}>
                Christenings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/proposals' onClick={toggle}>
                Proposals
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/families' onClick={toggle}>
                Families
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/models' onClick={toggle}>
                Models
              </NavLink>
            </li>
            <li className='contact-link'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'contact-link-a-active' : 'contact-link-a'
                }
                to='/contact'
                onClick={toggle}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
