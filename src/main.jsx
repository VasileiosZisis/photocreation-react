import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import HomePage from './pages/HomePage'
import ChristinaAndreas from './pages/cypriot-weddings/ChristinaAndreas.jsx'
import JenniferXaris from './pages/cypriot-weddings/JenniferXaris.jsx'
import KataAndreas from './pages/cypriot-weddings/KataAndreas.jsx'
import KristiaAlexis from './pages/cypriot-weddings/KristiaAlexis.jsx'
import MariaAndreas from './pages/cypriot-weddings/MariaAndreas.jsx'
import MariaLampros from './pages/cypriot-weddings/MariaLampros.jsx'
import ChristinaKyle from './pages/english-weddings/ChristinaKyle.jsx'
import DanielleNikole from './pages/english-weddings/DanielleNikole.jsx'
import DenikaDavid from './pages/english-weddings/DenikaDavid.jsx'
import DianneTerry from './pages/english-weddings/DianneTerry.jsx'
import KristenJames from './pages/english-weddings/KristenJames.jsx'
import MeganLee from './pages/english-weddings/MeganLee.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      {/* CYPRIOT WEDDINGS */}
      <Route path='Christina-Andreas' element={<ChristinaAndreas />} />
      <Route path='Jennifer-Xaris' element={<JenniferXaris />} />
      <Route path='Kata-Andreas' element={<KataAndreas />} />
      <Route path='Kristia-Alexis' element={<KristiaAlexis />} />
      <Route path='Maria-Andreas' element={<MariaAndreas />} />
      <Route path='Maria-Lampros' element={<MariaLampros />} />
      {/* ENGLISH WEDDINGS */}
      <Route path='Christina-kyle' element={<ChristinaKyle />} />
      <Route path='Danielle-Nikole' element={<DanielleNikole />} />
      <Route path='Denika-David' element={<DenikaDavid />} />
      <Route path='Dianne-Terry' element={<DianneTerry />} />
      <Route path='Kristen-James' element={<KristenJames />} />
      <Route path='Megan-Lee' element={<MeganLee />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
