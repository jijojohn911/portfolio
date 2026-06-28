import { useState } from 'react'
import react_icon from '../assets/react_icon.svg'
import node_icon from '../assets/node.js_icon.svg'
import nextjs_icon from '../assets/nextjs_icon.svg'
import html_icon from '../assets/html_icon.svg'
import gitignore_icon from '../assets/gitignore_icon.svg'
import mongodb_icon from '../assets/mongodb_icon.svg'
import tailwind_icon from '../assets/tailwind_icon.svg'
import github_icon from '../assets/github_icon.svg'
import js_icon from '../assets/js_icon.svg'
import css_icon from '../assets/css_icon.svg'
import express_icon from '../assets/express_icon.svg'

import { motion } from 'framer-motion'





const skills = [
  { name: 'React', icon: react_icon, category: 'Frontend', level: 90 },
  { name: 'JavaScript', icon: js_icon, category: 'Language', level: 92 },
  { name: 'HTML', icon: html_icon, category: 'Frontend', level: 95 },
  { name: 'CSS', icon: css_icon, category: 'Frontend', level: 90 },
  { name: 'Tailwind', icon: tailwind_icon, category: 'Frontend', level: 88 },
  { name: 'Node.js', icon: node_icon, category: 'Backend', level: 82 },
  { name: 'Express', icon: express_icon, category: 'Backend', level: 80 },
  { name: 'MongoDB', icon: mongodb_icon, category: 'Database', level: 78 },
  { name: 'Git', icon: gitignore_icon, category: 'Tools', level: 85 },
  { name: 'GitHub', icon: github_icon, category: 'Tools', level: 88 },
  { name: 'Next.js', icon: nextjs_icon, category: 'Frontend', level: 'learning' }
]


const categories = ['All', 'Frontend', 'Backend', 'Language', 'Database', 'Tools']



const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoverIndex, setHoverIndex] = useState(null)

  const filterSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((e) => e.category === activeCategory)
  return (
    <section id="skills" className="relative py-24 px-4 ">

      <div className="absolute inset-0 bg-linear-to-b from-[#050505] via-[#0a0a0a] to-[#050505] pointer-events-none" />
      <div className='relative mx-auto max-w-5xl '>
        <div className='mb-4'>
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="inline-block overflow-hidden whitespace-nowrap font-mono text-neutral-500 uppercase tracking-widest text-sm"
          >
            What I work with
          </motion.span>
        </div>
        <motion.h2
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 4 }}
          className="overflow-hidden whitespace-nowrap uppercase text-3xl md:text-5xl text-white mb-3 tracking-wider font-serif font-bold"
        >
          <span className='text-[#10b981] mr-1 animate-pulse'>#</span>
          Skills & Tools
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.h2>
        <p className='text-neutral-400 font-mono text-base md:text-lg max-w-xl mb-12'>
          Technologies I use daily to build fast, scalable, and modern web applications.
        </p>

        {/* category  */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.4,
            delay: 0.3,

          }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-mono transition-all duration-300 border cursor-pointer ${activeCategory === cat
                ? 'bg-border-[#10b981]/10 border-[#10b981]/40 text-[#10b981] text-e shadow-[0_0_10px_rgba(16,185,129,0.15)] animate-pulse'
                : 'bg-white/2 border-white/10 text-neutral-400 hover:border-white/25 hover:text-neutral-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className='grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-4 gap-4 '>
          {filterSkills.map((skill,index) => (
            <motion.div
              key={skill.name}
              onMouseEnter={()=>setHoverIndex(skill.name)}
              onMouseLeave={()=>hoverIndex(null)}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.4,
                delay: skill.name * 0.1,

              }}

              className='relative rounded-xl border border-white/6 bg-zinc-500/2  p-6  flex flex-col items-center gap-5 cursor-default overflow-hidden transition-all duration-300 hover:bg-emerald-500/5 hover:scale-105 '
            >


              <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-lg bg-white/4 border border-white/6 transition-all duration-500 hover:border-emerald-600/90 hover:bg-emerald-600/60">
                <img src={skill.icon} alt={skill.name}
                  className="w-7 h-7 object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{
                    filter:
                      hoverIndex === index
                        ? 'brightness(1.2) drop-shadow(0 0 6px rgba(16,185,129,0.6))'
                        : 'brightness(0.9)'
                  }}
                />
              </div>

              <span className="relative z-10 text-lg font-serif text-neutral-300 transition-colors duration-300 group-hover:text-white">
                {skill.name}
              </span>

              <span className="relative z-10 text-xs font-mono tracking-wider uppercase text-neutral-600 transition-colors duration-300 group-hover:text-neutral-500">
                {skill.category}
              </span>
              <div className="relative z-10 w-full h-0.5 bg-white/6 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300 ease-out"
                  style={{
                    width:
                      hoverIndex === skill.name ? `${skill.level}%` : '0%',
                    background:
                      'linear-gradient(to right, rgba(5,150,105,0.6), rgba(5,150,105,1))',
                    boxShadow: '0 0 8px rgba(5,150,105,0.5)',
                    transitionDelay: hoverIndex === skill.name ? '10ms' : '0ms',
                  }}
                />
              </div>
              <span
                className="absolute top-3 right-3 text-[10px] font-mono text-orange-500/0 transition-all duration-300"
                style={{
                  opacity: hoverIndex === skill.name ? 1 : 0,
                  color: 'rgba(5,150,105,0.7)',
                }}
              >{skill.level}{typeof skill.level === 'number' ? '%' : ''}
              </span>
            </motion.div>
          ))}

        </div>


        <div className="mt-12 pt-8  border-white/6 flex items-center gap-3 border-b ">
          <div className="w-2 h-2 rounded-full bg-green-500  mb-5 animate-pulse" />
          <p className="text-sm font-mono text-neutral-400 tracking-wide mb-5 ">
            Always learning — currently exploring TypeScript & Three.js
          </p>
        </div>


      </div>
    </section>
  )
}

export default Skills