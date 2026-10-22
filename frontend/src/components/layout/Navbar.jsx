import { NavLink, Link } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logo from '../../assets/images/logo.png'

const links = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Portfolio'],
  ['/about', 'About Us'],
  ['/blog', 'Blog'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="The Social Lane" />
        </Link>
        

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={() => setOpen(false)}
              className={({isActive}) => isActive ? 'active' : ''}
            >
              {label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta mobile-cta" onClick={() => setOpen(false)}>
            Connect Us <ArrowUpRight size={14} />
          </Link>
        </div>

        <Link to="/contact" className="nav-cta desktop-cta">
          Connect Us <ArrowUpRight size={14} />
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}
