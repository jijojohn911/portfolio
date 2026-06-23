import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Home from './Home';

const About = () => {

    const cardVariants = {
        hidden: { opacity: 0, x: 200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeIn"
            }
        }
    };

    const cardVariants2 = {
        hidden: { opacity: 0, y: 400 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeIn"
            }
        }
    };

    const cardVariants3 = {
        hidden: { opacity: 0, x: -200 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeIn"
            }
        }
    };

    return (
        <section className="py-20 px-4 bg-zinc-950 text-zinc-100 min-h-screen flex items-center">
            <Navbar/>
          
            <div className="max-w-6xl mx-auto w-full bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12 backdrop-blur-sm ">


                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}

                >
                    {/* card 1 */}
                    <motion.div
                        className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between min-h-100 hover:scale-103 hover:bg-zinc-900 "
                        variants={cardVariants}
                    >
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 text-zinc-500">About Me</h3>
                            <p className="text-sm text-zinc-100 leading-relaxed font-sans">
                                I'm Jijo John, a MERN stack developer
                                who's still learning and loving every
                                bit of it. I enjoy building full stack
                                projects from scratch — designing the UI,
                                wiring up the backend, and figuring out how
                                it all fits together. Currently working
                                with MongoDB, Express, React, and Node.js,
                                and always looking to pick up new skills
                                along the way. Take a look at some of my projects
                                below, and feel free to reach out!
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-6 font-mono text-[11px]">
                            <div className="h-20 bg-zinc-900/30 rounded-xl border border-white/[0.04] flex flex-col items-center justify-center p-3 text-center">
                                <span className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Layer 01</span>
                                <span className="text-zinc-300 font-medium">Client Architecture</span>
                            </div>
                            <div className="h-20 bg-zinc-900/30 rounded-xl border border-white/[0.04] flex flex-col items-center justify-center p-3 text-center">
                                <span className="text-zinc-600 text-[9px] uppercase tracking-widest mb-1">Layer 02</span>
                                <span className="text-zinc-300 font-medium">Server Ecosystem</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2  */}
                    <motion.div
                        className="bg-zinc-950 border border-zinc-700/60 rounded-2xl p-6 flex flex-col justify-between min-h-105 shadow-[0_0_30px_rgba(255,255,255,0.02)] transform md:-translate-y-2 transition-transform duration-300 hover:scale-103 hover:bg-zinc-900 "
                        variants={cardVariants2}
                    >
                        <div className="text-center">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-full border border-zinc-700/50">
                                Core Stack
                            </span>
                            <h4 className="text-lg font-semibold tracking-tight mt-6 text-zinc-200">The Ecosystem</h4>
                            <p className="text-xs text-zinc-500 mt-2">MongoDB • Express • React • Node.js</p>

                            <div className="my-6 w-full bg-black/40 rounded-xl border border-zinc-800/80 flex flex-col justify-center p-5 font-mono text-[11px] text-left leading-relaxed shadow-inner">
                                <div className="text-emerald-500 opacity-90">GET /api/v1/developer HTTP/1.1</div>
                                <div className="text-blue-400 opacity-90 mb-2">Status: 200 OK</div>

                                <div className="text-zinc-400">
                                    <div>{"{"}</div>
                                    <div className="pl-4">
                                        <span className="text-indigo-300">"status"</span>: <span className="text-emerald-400">"success"</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="text-indigo-300">"data"</span>: {"{"}
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-indigo-300">"role"</span>: <span className="text-emerald-400">"Full-Stack Engineer"</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-indigo-300">"runtime"</span>: <span className="text-emerald-400">"Node.js"</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-indigo-300">"database"</span>: <span className="text-emerald-400">"MongoDB Atlas"</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="text-indigo-300">"apis"</span>: <span className="text-emerald-400">"RESTful Architecture"</span>
                                    </div>
                                    <div className="pl-4">{"}"}</div>
                                    <div>{"}"}</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex space-x-2">
                            <button href="#projects" className="flex-1 text-center bg-zinc-100 text-zinc-950 text-xs font-medium py-2.5 px-4 rounded-md hover:bg-zinc-200 transition-colors">
                                View My Work
                            </button>
                        </div>
                    </motion.div>

                    {/* Card 3  */}
                    <motion.div
                        variants={cardVariants3}
                        className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between min-h-100 hover:scale-103 hover:bg-zinc-900"
                    >
                        <div>
                            <h3 className="text-3xl font-black tracking-tight leading-none text-zinc-100 uppercase mt-4">
                                ENGINEERING <br /> CLEANER <br /> DIGITAL <br /> EXPERIENCES.
                            </h3>
                        </div>
                        <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/60 font-sans">
                            <div className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Current Focus</div>
                            <div className="text-xs text-zinc-400 mt-1.5 leading-relaxed font-normal">
                                Managing complex client-side state propagation, optimizing component render cycles, and engineering smooth web micro-interactions.
                            </div>
                        </div>
                    </motion.div>

                </motion.div>

                <div className="flex justify-center space-x-2 mt-8">
                    <span className="w-2 h-2 rounded-full bg-zinc-100"></span>
                    <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                    <span className="w-2 h-2 rounded-full bg-zinc-800"></span>
                </div>
            </div>
        </section>
    );
};

export default About;