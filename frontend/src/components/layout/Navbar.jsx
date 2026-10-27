
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

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar-wrap">
      <nav className="navbar" aria-label="Main navigation">
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
          aria-label="The Social Lane home"
        >
          <img src={logo} alt="The Social Lane" />
        </Link>

        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? 'active' : ''
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Connect Us inside the mobile dropdown */}
          
        </div>

        {/* Desktop CTA */}
        <Link
          to="/contact"
          className="nav-cta desktop-cta"
        >
          Connect Us <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
    </header>
  )
}
