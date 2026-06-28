import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import my_img from '../assets/jijo_img.jpeg'
import ParticleBackground from './ParticleBackground'
import About from './About'
import Skills from './Skills'
import { Link } from 'react-scroll'



const ROLES = ['Full Stack Developer', 'MERN Stack Engineer', 'Problem Solver']

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2500)
    return () => clearInterval(id)
  }, [])

  

  return (
    <section  id="home" className="relative min-h-screen w-full overflow-hidden">
     
      <ParticleBackground />
    

      <div      
        className="
          relative mx-auto flex min-h-screen w-full max-w-6xl flex-col-reverse
          items-center justify-center gap-10 px-6 pt-24
          sm:px-10
          md:flex-row md:justify-between md:gap-6 md:pt-0
        "
      >

        <motion.div
          className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          
        >

          <motion.p
            variants={item}
            className="mb-3 text-sm font-medium tracking-widest text-white/70 sm:text-base"
          >
            HI! WELCOME TO MY PORTFOLIO
          </motion.p>

          <motion.h1
            variants={item}
            className="mb-3 text-4xl text-white  font-serif font-bold leading-tight  tracking-tight sm:text-5xl md:text-6xl"
          >
            I'm Jijo John,
          </motion.h1>

          <motion.div
            variants={item}
            className="mb-6 h-10 text-xl font-medium text-white/85 sm:text-2xl md:text-3xl"
          >
            <motion.span
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              {ROLES[roleIndex]} from Kerala.
            </motion.span>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap justify-center gap-4 sm:gap-6 md:justify-start">
            <Link
            offset={-30}
            smooth={true}
            to='contact'
            duration={1000} >
            <motion.button
            whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-md border-2 border-white bg-white px-5 py-2
                font-medium text-black transition-colors duration-300
                hover:bg-transparent hover:text-white
                focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white
              "
            >
              Contact me
            </motion.button>
            </Link>
            <Link
            to='projects'
            smooth={true}
            duration={1000}
            offset={-30}>
            <motion.button
             whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex items-center gap-2 rounded-md border border-white/40 bg-white/10
                px-5 py-2 font-medium backdrop-blur-sm transition-colors duration-300
                hover:bg-white/20
                focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white
              "
            >
              Explore Portfolio
              <i className="fa-solid fa-arrow-right-long transition-transform duration-300 group-hover:translate-x-1 hover:text-zinc-100" />
            </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 1.3 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          whileHover={{ scale: 1.03 }}
          className="
            h-40 w-40 shrink-0 overflow-auto rounded-full ring-2 ring-white/30
            sm:h-56 sm:w-56
            md:h-72 md:w-72
            lg:h-80 lg:w-80
            
          "
        >
          <img
            src={my_img}
            alt="Jijo John"
            className="h-full w-full object-cover  "
          />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <Link
      offset={-50}
      to='about'
      duration={1000}
      smooth={true}>
      <motion.button
       
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/30 hover:text-white"
        aria-label="Scroll down"
      >
        <i className="fa-solid fa-chevron-down text-xl" />
      </motion.button>
      </Link>
      
    </section>

  )
}

export default Home