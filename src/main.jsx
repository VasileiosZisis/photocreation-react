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
import ErrorPage from './pages/ErrorPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import CypriotWeddings from './pages/CypriotWeddings.jsx'
import EnglishWeddings from './pages/EnglishWeddings.jsx'
import Christenings from './pages/Christenings.jsx'
import Proposals from './pages/Proposals.jsx'
import Families from './pages/Families.jsx'
import Models from './pages/Models.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/cypriot-weddings' element={<CypriotWeddings />} />
      <Route path='/english-weddings' element={<EnglishWeddings />} />
      <Route path='/christenings' element={<Christenings />} />
      <Route path='/proposals' element={<Proposals />} />
      <Route path='/families' element={<Families />} />
      <Route path='/models' element={<Models />} />
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
