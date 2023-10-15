import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  cypriotWeddings,
  englishWeddings,
  weddingStories,
  christenings,
  proposals,
  families,
  models
} from './Dropdownlists.jsx'
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

  const [isHidden, setIsHidden] = useState(true)

  const handleHidden = e => {
    e.stopPropagation()
    setIsHidden(!isHidden)
    if (!isHidden) {
      e.currentTarget.classList.add('hidden')
    } else {
      e.currentTarget.classList.remove('hidden')
    }
  }

  return (
    <header>
      <img
        src='https://res.cloudinary.com/dmdbza74n/image/upload/v1632158213/studiophotocreation/logo-black_uw3ade.png'
        alt='logo'
      />
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
      {toggleOpen ? (
        <nav className='mobile'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Cypriot Weddings</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{cypriotWeddingslist}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>English Weddings</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{englishWeddingslist}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Wedding Stories</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{weddingStoriesList}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Christenings</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{christeningsList}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Proposals</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{proposalsList}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Families</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{familiesList}</ul>
            </li>
            <li className='m-dropdown hidden' onClick={e => handleHidden(e)}>
              <span className='text'>Models</span>
              <span className='arrow-container'>
                <span className='arrow right'></span>
              </span>
              <ul className='m-dropdown-content'>{modelsList}</ul>
            </li>
            <li>
              <Link className='link' to='/'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className='desktop'>
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
      )}
    </header>
  )
}

export default Navbar
