import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

function App () {
  return (
    <main>
      <Navbar />
      <div>
        <Outlet />
        <Footer />
      </div>
    </main>
  )
}

export default App
