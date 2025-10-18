import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import SafariExperiences from './pages/SafariExperiences'
import ExperienceDetail from './pages/ExperienceDetail'
import About from './pages/About'
import BwindiImpenetrable from './pages/BwindiImpenetrable'
import KibaleNationalPark from './pages/KibaleNationalPark'
import QueenElizabeth from './pages/QueenElizabeth'
import MurchisonFalls from './pages/MurchisonFalls'
import KidepoValley from './pages/KidepoValley'
import LakeMburo from './pages/LakeMburo'
import MountElgon from './pages/MountElgon'
import RwenzoriMountains from './pages/RwenzoriMountains'
import SemulikiValley from './pages/SemulikiValley'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/destinations/bwindi-impenetrable" element={<BwindiImpenetrable />} />
            <Route path="/destinations/kibale-national-park" element={<KibaleNationalPark />} />
            <Route path="/destinations/queen-elizabeth" element={<QueenElizabeth />} />
            <Route path="/destinations/murchison-falls" element={<MurchisonFalls />} />
            <Route path="/destinations/kidepo-valley" element={<KidepoValley />} />
            <Route path="/destinations/lake-mburo" element={<LakeMburo />} />
            <Route path="/destinations/mount-elgon" element={<MountElgon />} />
            <Route path="/destinations/rwenzori-mountains" element={<RwenzoriMountains />} />
            <Route path="/destinations/semuliki-valley" element={<SemulikiValley />} />
            <Route path="/experiences" element={<SafariExperiences />} />
            <Route path="/experiences/:slug" element={<ExperienceDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
