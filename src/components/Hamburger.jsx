import { useState } from 'react'
import './Hamburger.css'

const Hamburger = () => {
  const [toggleOpen, setToggleOpen] = useState(false)

  const handleOpen = e => {
    setToggleOpen(!toggleOpen)
    if (toggleOpen) {
      e.currentTarget.classList.add('active')
    } else {
      e.currentTarget.classList.remove('active')
    }
  }
  return (
    <button aria-expanded='false' className='hamburger' onClick={handleOpen}>
      <span className='bar' aria-hidden='true'></span>
      <span className='bar' aria-hidden='true'></span>
      <span className='bar' aria-hidden='true'></span>
      <span className='screen-reader-text'>Menu</span>
    </button>
  )
}

export default Hamburger