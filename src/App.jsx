import { Routes, Route, Link} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import SpeakerPage from './pages/SpeakerPage'
import ComitteePage from './pages/ComitteePage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/speakers" element={<SpeakerPage />} />
        <Route path="/committee" element={<ComitteePage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App