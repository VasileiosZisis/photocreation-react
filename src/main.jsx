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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      {/* CYPRIOT WEDDINGS */}
      <Route
        path='/cypriot-weddings/christina-andreas'
        element={<ChristinaAndreas />}
      />
      <Route
        path='/cypriot-weddings/jennifer-xaris'
        element={<JenniferXaris />}
      />
      <Route path='/cypriot-weddings/kata-andreas' element={<KataAndreas />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
