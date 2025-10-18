import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import SafariExperiences from './pages/SafariExperiences'
import ExperienceDetail from './pages/ExperienceDetail'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/experiences" element={<SafariExperiences />} />
            <Route path="/experiences/:slug" element={<ExperienceDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <footer className="bg-safari-green text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold mb-3">Shakes Travel</h3>
                <p className="text-gray-300">Inspiring and crafting unforgettable safari experiences across Uganda</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Contact</h3>
                <p className="text-gray-300">Email: info@shakestravel.com</p>
                <p className="text-gray-300">Phone: +256 XXX XXX XXX</p>
                <p className="text-gray-300">Kampala, Uganda</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">Quick Links</h3>
                <ul className="text-gray-300 space-y-2">
                  <li><a href="/destinations" className="hover:text-safari-gold transition">Destinations</a></li>
                  <li><a href="/experiences" className="hover:text-safari-gold transition">Experiences</a></li>
                  <li><a href="/about" className="hover:text-safari-gold transition">About Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-600 pt-6">
              <p>&copy; 2025 Shakes Travel. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
