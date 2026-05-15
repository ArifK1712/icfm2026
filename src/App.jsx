import { Routes, Route, Link} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SpeakerPage from './pages/SpeakerPage'
import ComitteePage from './pages/ComitteePage'
import ProgramPage from './pages/ProgramPage'
import RegistrationPage from './pages/RegistrationPage'
import VenuePage from './pages/VenuePage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/committee" element={<ComitteePage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/venue" element={<VenuePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App