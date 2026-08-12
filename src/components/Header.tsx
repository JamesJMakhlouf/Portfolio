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

interface HeaderProps {
  onSectionNav: (id: string) => void
}

export function Header({ onSectionNav }: HeaderProps) {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    closeMenu()
    onSectionNav(id)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a
          href="#top"
          className="header-brand"
          onClick={(event) => {
            event.preventDefault()
            closeMenu()
            onSectionNav('top')
          }}
        >
          {portfolio.contact.name.split(' ')[0]}
          <span className="header-brand-accent">.</span>
        </a>

        <nav id="site-nav" className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1)
              return (
                <li key={link.href} className="nav-item">
                  <a href={link.href} className="nav-link" onClick={(event) => handleNavClick(event, id)}>
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header-actions">
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
        </div>
      </div>
    </header>
  )
}
