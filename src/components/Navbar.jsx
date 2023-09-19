import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
      <nav>
        <img
          src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632158213/studiophotocreation/logo-black_uw3ade.png'
          alt='logo'
        />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>Cypriot Weddings</li>
          <li>English Weddings</li>
          <li>Wedding Stories</li>
          <li>Christenings</li>
          <li>Proposals</li>
          <li>Families</li>
          <li>Models</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
