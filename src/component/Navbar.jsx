import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'SKILLS', path: '/skills' },
  { name: 'PROJECTS', path: '/projects' },
  { name: 'CONTACT', path: '/contact' },
]

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-5 px-2 py-2 rounded-full
                      bg-white/10 backdrop-blur-3xl backdrop-saturate-150
                      border border-white/30
                      transition-all duration-300
                      hover:bg-white/15">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium tracking-wide
                 rounded-full cursor-pointer select-none block
                 transition-all duration-300 ease-out
                 ${isActive
                   ? 'bg-white text-black shadow-md scale-105'
                   : 'text-white/80 hover:text-white hover:bg-white/10 hover:scale-105'}`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar