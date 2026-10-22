import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import Home from './pages/Home'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}