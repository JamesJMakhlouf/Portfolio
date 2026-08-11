import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'
import { MoonIcon, SunIcon } from './Icons'
import { portfolio } from '../data/portfolio'
import './Header.css'

const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Awards', href: '#awards' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#top" className="header-brand" onClick={closeMenu}>
          {portfolio.contact.name.split(' ')[0]}
          <span className="header-brand-accent">.</span>
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true" />
        </button>

        <nav id="site-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="nav-item">
                <a href={link.href} className="nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
