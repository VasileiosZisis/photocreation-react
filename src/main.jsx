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
import ContactPage from './pages/ContactPage.jsx'
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
import RebeccaAlvaro from './pages/english-weddings/RebeccaAlvaro.jsx'
import RhianSean from './pages/english-weddings/RhianSean.jsx'
import SophieJack from './pages/english-weddings/SophieJack.jsx'
import Ew2019 from './pages/english-weddings/ew2019.jsx'
import AmyDaniel from './pages/wedding-stories/AmyDaniel.jsx'
import BethDavid from './pages/wedding-stories/BethDavid.jsx'
import FarrahMatthew from './pages/wedding-stories/FarrahMatthew.jsx'
import GemmaKane from './pages/wedding-stories/GemmaKane.jsx'
import JadeCraig from './pages/wedding-stories/JadeCraig.jsx'
import JemmaCarl from './pages/wedding-stories/JemmaCarl.jsx'
import KatrinaScott from './pages/wedding-stories/KatrinaScott.jsx'
import LauraLeigh from './pages/wedding-stories/LauraLeigh.jsx'
import LauraRobert from './pages/wedding-stories/LauraRobert.jsx'
import LaurenBen from './pages/wedding-stories/LaurenBen.jsx'
import LaurenSimon from './pages/wedding-stories/LaurenSimon.jsx'
import LisaDarren from './pages/wedding-stories/LisaDarren.jsx'
import StaceyAaron from './pages/wedding-stories/StaceyAaron.jsx'
import Agapi from './pages/christenings/Agapi.jsx'
import Ioanna from './pages/christenings/Ioanna.jsx'
import Maria from './pages/christenings/Maria.jsx'
import Marilia from './pages/christenings/Marilia.jsx'
import Stylianos from './pages/christenings/Stylianos.jsx'
import Victoria from './pages/christenings/Victoria.jsx'
import Xara from './pages/christenings/Xara.jsx'
import AndreasAthina from './pages/proposals/AndreasAthina.jsx'
import ChiragPriyanka from './pages/proposals/ChiragPriyanka.jsx'
import AlexGianna from './pages/families/AlexGianna.jsx'
import AlexXenia from './pages/families/AlexXenia.jsx'
import AlexanderYiana from './pages/families/AlexanderYiana.jsx'
import AngelikaMisha from './pages/families/AngelikaMisha.jsx'
import BaskhkimShkourte from './pages/families/BaskhkimShkourte.jsx'
import FilipposEmanouela from './pages/families/FilipposEmanouela.jsx'
import GalinaLionid from './pages/families/GalinaLionid.jsx'
import IouliaAlexey from './pages/families/IouliaAlexey.jsx'
import JuliaSofia from './pages/families/JuliaSofia.jsx'
import MariaNatalie from './pages/families/MariaNatalie.jsx'
import RiannaRalf from './pages/families/RiannaRalf.jsx'
import RouslanIrina from './pages/families/RouslanIrina.jsx'
import SofieIoulia from './pages/families/SofieIoulia.jsx'
import Anna from './pages/models/Anna.jsx'
import DandD from './pages/models/DandD.jsx'
import Elena from './pages/models/Elena.jsx'
import Johanna from './pages/models/Johanna.jsx'
import Karlin from './pages/models/Karlin.jsx'
import Natalie from './pages/models/Natalie.jsx'
import Olga from './pages/models/Olga.jsx'
import Sveta from './pages/models/Sveta.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index path='/' element={<HomePage />} />
      <Route path='/contact' element={<ContactPage />} />
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
      <Route path='Rebecca-Alvaro' element={<RebeccaAlvaro />} />
      <Route path='Rhian-Sean' element={<RhianSean />} />
      <Route path='Sophie-Jack' element={<SophieJack />} />
      <Route path='2019' element={<Ew2019 />} />
      {/* WEDDING STORIES */}
      <Route path='Amy-Daniel' element={<AmyDaniel />} />
      <Route path='Beth-David' element={<BethDavid />} />
      <Route path='Farrah-Matthew' element={<FarrahMatthew />} />
      <Route path='Gemma-Kane' element={<GemmaKane />} />
      <Route path='Jade-Craig' element={<JadeCraig />} />
      <Route path='Jemma-Carl' element={<JemmaCarl />} />
      <Route path='Katrina-Scott' element={<KatrinaScott />} />
      <Route path='Laura-Leigh' element={<LauraLeigh />} />
      <Route path='Laura-Robert' element={<LauraRobert />} />
      <Route path='Lauren-Ben' element={<LaurenBen />} />
      <Route path='Lauren-Simon' element={<LaurenSimon />} />
      <Route path='Lisa-Darren' element={<LisaDarren />} />
      <Route path='Stacey-Aaron' element={<StaceyAaron />} />
      {/* CHISTENINGS */}
      <Route path='Agapi' element={<Agapi />} />
      <Route path='Ioanna' element={<Ioanna />} />
      <Route path='Maria' element={<Maria />} />
      <Route path='Marilia' element={<Marilia />} />
      <Route path='Stylianos' element={<Stylianos />} />
      <Route path='Victoria' element={<Victoria />} />
      <Route path='Xara' element={<Xara />} />
      {/* PROPOSALS */}
      <Route path='Andreas-Athina' element={<AndreasAthina />} />
      <Route path='Chirag-Priyanka' element={<ChiragPriyanka />} />
      {/* FAMILIES */}
      <Route path='Alex-Gianna' element={<AlexGianna />} />
      <Route path='Alex-Xenia' element={<AlexXenia />} />
      <Route path='Alexander-Yiana' element={<AlexanderYiana />} />
      <Route path='Angelika-Misha' element={<AngelikaMisha />} />
      <Route path='Baskhkim-Shkourte' element={<BaskhkimShkourte />} />
      <Route path='Filippos-Emanouela' element={<FilipposEmanouela />} />
      <Route path='Galina-Lionid' element={<GalinaLionid />} />
      <Route path='Ioulia-Alexey' element={<IouliaAlexey />} />
      <Route path='Julia-Sofia' element={<JuliaSofia />} />
      <Route path='Maria-Natalie' element={<MariaNatalie />} />
      <Route path='Rianna-Ralf' element={<RiannaRalf />} />
      <Route path='Rouslan-Irina' element={<RouslanIrina />} />
      <Route path='Sofie-Ioulia' element={<SofieIoulia />} />
      {/* MODELS */}
      <Route path='Anna' element={<Anna />} />
      <Route path='D-&-D' element={<DandD />} />
      <Route path='Elena' element={<Elena />} />
      <Route path='Johanna' element={<Johanna />} />
      <Route path='Karlin' element={<Karlin />} />
      <Route path='Natalie' element={<Natalie />} />
      <Route path='Olga' element={<Olga />} />
      <Route path='Sveta' element={<Sveta />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
