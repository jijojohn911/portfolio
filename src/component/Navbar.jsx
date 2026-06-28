// import React from 'react'
// import { Link } from 'react-scroll'
// import logo from '../assets/logo_img.jpeg'
// const links = [
//   { name: 'HOME', id: 'home' },
//   { name: 'ABOUT', id: 'about' },
//   { name: 'SKILLS', id: 'skills' },
//   { name: 'PROJECTS', id: 'projects' },
//   { name: 'CONTACT', id: 'contact' },
// ]

// const Navbar = () => {
//   return (
//     <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40">
//       <ul
//         className="
//           flex items-center gap-5 px-2 py-2 rounded-full
//           bg-white/10 backdrop-blur-[1px] backdrop-saturate-150
//           border border-white/30
//           transition-all duration-300
//           hover:bg-white/15
//         "
//       >
//         <Link
//           to='home'
//           smooth={true}
//           duration={1000}
//           className="cursor-pointer">
//           <div className=' w-10  flex '>
//             <img src={logo} alt="logo" className='w-30 h-8 rounded-full' />
//             <div className="w-4.5 h-1.5  mt-6 rounded-full bg-green-500 animate-pulse" />
//           </div>
//         </Link>
//         {links.map((link) => (
//           <li key={link.name}>
//             <Link
//               to={link.id}
//               smooth={true}
//               duration={1000}
//               offset={-80}
//               spy={true}
//               activeClass="active"
//               className="
//                 relative px-4 py-2 text-sm font-medium tracking-wide
//                 rounded-full cursor-pointer select-none block
//                 transition-all duration-300 ease-out
//                 text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10 hover:scale-105
//               "
//             >

//               {link.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo_img.jpeg'

const links = [
  { name: 'HOME', id: 'home' },
  { name: 'ABOUT', id: 'about' },
  { name: 'SKILLS', id: 'skills' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'CONTACT', id: 'contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 w-[92%] sm:w-auto">
      <div
        className="
          flex items-center justify-between sm:justify-start
          gap-2 sm:gap-5 px-3 sm:px-2 py-2 rounded-full
          bg-white/10 backdrop-blur-[1px] backdrop-saturate-150
          border border-white/30
          transition-all duration-300
          hover:bg-white/15
        "
      >
        {/* Logo - always visible */}
        <Link
          to="home"
          smooth={true}
          duration={1000}
          className="cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 flex shrink-0">
            <img src={logo} alt="logo" className="w-30 h-8 rounded-full" />
            <div className="w-4.5 h-1.5 mt-6 rounded-full bg-green-500 animate-pulse" />
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-5">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.id}
                smooth={true}
                duration={1000}
                offset={-30}
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

        {/* Mobile hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 text-white/80 hover:text-emerald-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`
          sm:hidden overflow-hidden transition-all duration-300 ease-out
          ${isOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'}
        `}
      >
        <ul
          className="
            flex flex-col gap-1 p-3 rounded-2xl
            bg-white/10 backdrop-blur-md backdrop-saturate-150
            border border-white/30
          "
        >
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.id}
                smooth={true}
                duration={1000}
                offset={-80}
                spy={true}
                activeClass="active"
                onClick={() => setIsOpen(false)}
                className="
                  block text-center px-4 py-3 text-sm font-medium tracking-wide
                  rounded-full cursor-pointer select-none
                  transition-all duration-300 ease-out
                  text-white/80 hover:text-emerald-400 hover:bg-emerald-400/10
                "
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar