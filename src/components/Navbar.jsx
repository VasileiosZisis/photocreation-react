import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleOpen = e => {
    e.stopPropagation()
    setToggleOpen(!toggleOpen)
    if (!toggleOpen) {
      e.currentTarget.classList.add('active')
      e.currentTarget.setAttribute('aria-expanded', 'true')
    } else {
      e.currentTarget.classList.remove('active')
      e.currentTarget.setAttribute('aria-expanded', 'false')
    }
  }

  return (
    <header>
      <nav>
        <div className='nav-img-div'>
          <NavLink to='/'>
            <img
              className='nav-img'
              src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632158213/studiophotocreation/logo-black_uw3ade.png'
            />
          </NavLink>
          <button
            aria-expanded='false'
            className='hamburger'
            onClick={e => handleOpen(e)}
          >
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='bar' aria-hidden='true'></span>
            <span className='screen-reader-text'>Menu</span>
          </button>
        </div>
        <div>
          <ul className={toggleOpen ? 'nav-ul-mobile' : 'nav-ul-desktop'}>
            <li className='nav-li'>
              <NavLink className='navlink' to='/cypriot-weddings'>
                Cypriot Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/english-weddings'>
                English Weddings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/christenings'>
                Christenings
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/proposals'>
                Proposals
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/families'>
                Families
              </NavLink>
            </li>
            <li className='nav-li'>
              <NavLink className='navlink' to='/models'>
                Models
              </NavLink>
            </li>
            <li className='contact-link'>
              <NavLink
                className={({ isActive }) =>
                  isActive ? 'contact-link-a-active' : 'contact-link-a'
                }
                to='/contact'
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
