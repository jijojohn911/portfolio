import React, { useState } from 'react'

const Categories = ["All", "Full Stack", "Frontend", "Backend", "Web Apps"];
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  return (
    <section  id='projects' className=' bg-black w-screen  min-h-screen md:items-center'>

      <div className='px-6   w-full '>
        <div className='flex justify-between   md:pl-30 md:pt-1 mb-10'>
          <div className='flex flex-col gap-3 md:items-start items-center md:text-left'>
            <span className='text-emerald-500 font-mono  '>MY WORK</span>
            <h2 className='uppercase text-white text-5xl tracking-wide font-medium  mb-2'>featured
              <span className='text-emerald-500 ml-3'>Projects</span>
            </h2>
            <p className='text-zinc-400 w-96 font-mono'>A Section of my recent work. Each projects is build with passion,precison,and latest technologies.</p>
          </div>

          <div className=' text-white  hidden md:flex md:flex-row md:gap-4 md:mt-10 mr-20 pl-3 py-2 bg-zinc-600/20 items-center rounded-2xl w-60'>
            <div className='text-emerald-600 animate-pulse'>{"</>"}</div>
            <div className='font-medium tracking-tight md:text-sm w-40 text-zinc-400'>
              Building digital solutions that are fast ,scalable & user-focused.
            </div>
          </div>
        </div>


        <div className='md:ml-25'>
          {Categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-emerald-500 px-4 mx-2 py-2 rounded-full text-sm font-mono transition-all duration-300 border border-zinc-900 ${setActiveCategory === cat
                ? 'bg-border-[#10b981]/10  border-[#10b981]/40 text-[#10b981] text-e shadow-[0_0_10px_rgba(16,185,129,0.15)] animate-pulse'
                : 'bg-white/2 border-white/10 text-neutral-400 hover:border-emerald-500/25 hover:text-neutral-300 hover:scale-105'
                }`}>{cat}</button>
          ))}
        </div>

        <div>
          
        </div>

      </div>

    </section>
  )
}

export default Projects