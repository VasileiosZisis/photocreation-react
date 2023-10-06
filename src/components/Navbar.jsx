import { Link } from 'react-router-dom'
import {
  cypriotWeddings,
  englishWeddings,
  weddingStories,
  christenings,
  proposals,
  families,
  models
} from './Dropdownlists.jsx'
import Hamburger from './Hamburger.jsx'
import './Navbar.css'

const Navbar = () => {
  const cypriotWeddingslist = cypriotWeddings.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const englishWeddingslist = englishWeddings.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const weddingStoriesList = weddingStories.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const christeningsList = christenings.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const proposalsList = proposals.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const familiesList = families.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

  const modelsList = models.map(couple => (
    <li key={couple.id}>
      <Link to={couple.to}>{couple.name}</Link>
    </li>
  ))

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
          <li className='dropdown'>
            <span className='text'>Cypriot Weddings</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{cypriotWeddingslist}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>English Weddings</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{englishWeddingslist}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>Wedding Stories</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{weddingStoriesList}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>Christenings</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{christeningsList}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>Proposals</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{proposalsList}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>Families</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{familiesList}</ul>
          </li>
          <li className='dropdown'>
            <span className='text'>Models</span>
            <span className='arrow-container'>
              <span className='arrow right'></span>
            </span>
            <ul className='dropdown-content'>{modelsList}</ul>
          </li>
          <li>
            <Link to='/'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Hamburger />
    </header>
  )
}

export default Navbar
