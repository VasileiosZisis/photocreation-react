import { Outlet } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

function App () {
  return (
    <HelmetProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </HelmetProvider>
  )
}

export default App
