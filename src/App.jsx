import { Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import CmeBadge from './components/CmeBadge'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SpeakerPage from './pages/SpeakerPage'
import CommitteePage from './pages/CommitteePage'
import ProgramPage from './pages/ProgramPage'
import RegistrationPage from './pages/RegistrationPage'
import AbstractPage from './pages/AbstractPage'
import ContactPage from './pages/ContactPage'
import Sponsorship from './pages/Sponsorship'

function App() {
  return (
    <div className="flex min-h-screen flex-col">
       <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakerPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/call-for-abstract" element={<AbstractPage />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <CmeBadge />
      <BackToTop />
    </div>
  )
}

export default App