import { useState } from 'react'
import { motion } from 'framer-motion'
import netflix_img from '../assets/netflix_img.ico'
import nutriflow from "../assets/nutriflow.png"
import stridex from "../assets/stridex.png"

const projects = [
  {
    title: "StrideX",
    description: "A premium full-stack e-commerce platform for footwear, built with Next.js and MongoDB — complete with cart, checkout, Razorpay payments, and an admin dashboard for order and product management.",
    image: stridex,
    category: ['Full Stack', 'Frontend','Backend',"Web Apps"],
    tags: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind CSS'],
    github: "https://github.com/jijojohn911/StrideX-E-commerce",
    live: "https://stride-x-e-commerce.vercel.app/"
  },
  {
    title: "NutriFlow",
    description: "An AI-powered full-stack healthy breakfast delivery platform in Kochi.",
    image: nutriflow,
    category: ["Full Stack", "Frontend", "Backend", "Web Apps"],
    tags: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Gemini AI"],
    github: "https://github.com/jijojohn911/nutriflow",
    live: "https://nutriflow-rose.vercel.app/"
  },
  {
    title: "Netflix Clone",
    description: "A Netflix-inspired streaming UI and backend clone built with React, featuring movie browsing, hero banners, and responsive layouts.",
    image: netflix_img,
    category: ['Full Stack', 'Frontend'],
    tags: ['React', 'Tailwind CSS'],
    github: "https://github.com/jijojohn911/netflix-clone-react",
    live: "https://netflix-clone-react-cm22.vercel.app/"
  },
]

const Categories = ["All", "Full Stack", "Frontend", "Backend", "Web Apps"];


const ProjectCard = ({ proj, index }) => {
  return (

    <div
      style={{ perspective: '1500px' }}
      className='h-[420px]'
    >
      <motion.div
        className='relative w-full h-full'
        style={{ transformStyle: 'preserve-3d' }}
        initial={{ rotateY: 180 }}
        whileInView={{ rotateY: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 3, delay: index * 0.15, ease: [0.34, 2, 0.64, 1] }}
      >
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className='absolute inset-0 flex flex-col items-center justify-center gap-4 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden'
        >
          <div className='absolute w-40 h-40 bg-emerald-500/60 rounded-full blur-3xl' />
          <img
            src={proj.image}
            alt={proj.title}
            className='relative w-24 h-24 object-contain'
          />
          <span className='relative text-zinc-500 text-xs font-mono tracking-widest uppercase'>
            {proj.title}
          </span>
        </div>

        <div
          style={{ backfaceVisibility: 'hidden' }}
          className='absolute inset-0 flex flex-col items-center bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/40  hover:bg-emerald-800/10 hover:scale-101 transition-all duration-300'
        >
          <img
            src={proj.image}
            alt={proj.title}
            className='w-20 h-20 sm:w-24 sm:h-24 object-contain mt-6'
          />
          <div className='flex flex-col items-start w-full px-4 pb-4 overflow-y-auto'>
            <h3 className='text-white text-lg font-semibold mb-2 text-center w-full'>{proj.title}</h3>
            <p className='text-zinc-400 text-sm font-mono mb-4 tracking-tighter'>{proj.description}</p>

            <div className='flex flex-wrap gap-2 mb-4'>
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className='text-xs px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='flex flex-wrap items-start font-light text-white mb-2 w-full'>
              <span className='text-xs tracking-tight pr-2'>GitHub:</span>
              <a
                href={proj.github}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs tracking-tighter text-emerald-400 hover:underline break-all'
              >
                {proj.github}
              </a>
            </div>

            <div className='flex flex-wrap items-center gap-2 w-full'>
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className='text-xs tracking-tight text-white'>LIVE:</span>
              <a
                href={proj.live}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs font-light text-emerald-400 hover:underline break-all'
              >
                {proj.live}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProject = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory))

  return (
    <section id='projects' className='bg-black w-full min-h-screen py-16 md:py-0 md:flex md:items-center'>

      <div className='px-4 sm:px-6 w-full'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-0 md:pl-30 md:pt-1 mb-10'>
          <div className='flex flex-col gap-3 items-center md:items-start text-center md:text-left'>
            <span className='text-emerald-500 font-mono'>MY WORK</span>
            <h2 className='uppercase text-white text-3xl sm:text-4xl md:text-5xl tracking-wide font-medium mb-2'>
              featured
              <span className='text-emerald-500 md:ml-3'>Projects</span>
            </h2>
            <p className='text-zinc-400 w-full max-w-sm font-mono'>
              A section of my recent work. Each project is built with passion, precision, and the latest technologies.
            </p>
          </div>

          <div className='text-white hidden md:flex md:flex-row md:gap-4 md:mt-10 mr-0 lg:mr-20 pl-3 py-2 bg-zinc-600/20 items-center rounded-2xl w-60 shrink-0'>
            <div className='text-emerald-600 animate-pulse'>{"</>"}</div>
            <div className='font-medium tracking-tight md:text-sm w-40 text-zinc-400'>
              Building digital solutions that are fast, scalable & user-focused.
            </div>
          </div>
        </div>

        <div className='md:ml-25 flex gap-2 mx-2 overflow-x-auto pb-3 md:pb-0 md:flex-wrap md:overflow-visible scrollbar-hide'>
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 text-emerald-500 px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 border border-zinc-900 ${
                activeCategory === cat
                  ? 'bg-[#10b981]/10 border-[#10b981]/40 text-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.15)] animate-pulse'
                  : 'bg-white/2 border-white/10 text-neutral-400 hover:border-emerald-500/25 hover:text-neutral-300 hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-0 md:px-30 pb-10 sm:pb-20 mt-5'>
          {filteredProject.length === 0 ? (
            <p className='text-zinc-500 font-mono col-span-full text-center'>
              No projects in this category yet.
            </p>
          ) : (
            filteredProject.map((proj, index) => (
              <ProjectCard key={proj.title} proj={proj} index={index} />
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects