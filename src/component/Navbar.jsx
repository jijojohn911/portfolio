import React from 'react'
import { Link } from 'react-scroll'
import logo from '../assets/logo_img.jpeg'
const links = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'CONTACT', id: 'contact' },
]

const Navbar = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
      <ul
        className="
          flex items-center gap-5 px-2 py-2 rounded-full
          bg-white/10 backdrop-blur-[1px] backdrop-saturate-150
          border border-white/30
          transition-all duration-300
          hover:bg-white/15
        "
      >
        <Link
          to='home'
          smooth={true}
          duration={1000}
          className="cursor-pointer">
          <div className=' w-10  flex '>
            <img src={logo} alt="logo" className='w-30 h-8 rounded-full' />
            <div className="w-4.5 h-1.5  mt-6 rounded-full bg-green-500 animate-pulse" />
          </div>
        </Link>
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.id}
              smooth={true}
              duration={1000}
              offset={-80}
              spy={true}
              activeClass="active"
              className="
                relative px-4 py-2 text-sm font-medium tracking-wide
                rounded-full cursor-pointer select-none block
                transition-all duration-300 ease-out
                text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10 hover:scale-105
              "
            >

              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar