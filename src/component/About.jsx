import { motion } from 'framer-motion';

const About = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: 80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            }
        }
    };

    const cardVariants2 = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            }
        }
    };

    const cardVariants3 = {
        hidden: { opacity: 0, x: -80 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            }
        }
    };

    return (
        <section id="about" className="px-4 mt-10 bg-zinc-950 text-zinc-100 min-h-96 flex items-center">

            <div className="max-w-6xl mx-auto w-full bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 md:p-12">

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between min-h-100 hover:bg-zinc-900 transition-colors duration-300 ease-out"
                        variants={cardVariants}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight uppercase mb-4 text-zinc-100">About Me</h3>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                                "I'm Jijo John, a full-stack developer skilled in the MERN stack along with Next.js and TypeScript.
                                I build complete applications from the ground up — responsive UIs with React and Tailwind CSS, REST APIs with Node.js and Express, and structured databases with MongoDB.
                                I enjoy solving problems across the whole stack and I'm currently looking for an internship where I can contribute to real-world projects and keep growing as a developer.
                                Take a look at my work below, and feel free to reach out."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mt-6 font-mono text-[11px]">
                            <div className="h-20 bg-zinc-900/30 rounded-xl border border-white/10 flex flex-col items-center justify-center p-3 text-center">
                                <span className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Frontend</span>
                                <span className="text-zinc-300 font-medium">Client Architecture</span>
                            </div>
                            <div className="h-20 bg-zinc-900/30 rounded-xl border border-white/5 flex flex-col items-center justify-center p-5 text-center">
                                <span className="text-zinc-500 text-[9px] uppercase tracking-widest mb-1">Backend</span>
                                <span className="  text-zinc-300 font-medium">Server Ecosystem</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="bg-zinc-950 border border-zinc-700/60 rounded-2xl p-6 flex flex-col justify-between min-h-96 shadow-[0_0_30px_rgba(255,255,255,0.02)] md:-mt-2 hover:bg-zinc-900 transition-colors duration-300 ease-out"
                        variants={cardVariants2}
                        whileHover={{ scale: 1.03 }}
                        style={{ willChange: 'transform, opacity' }}
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
                    </motion.div>

                    <motion.div
                        variants={cardVariants3}
                        whileHover={{ scale: 1.03 }}
                        className="bg-zinc-950/60 border border-zinc-800 rounded-2xl p-10 flex flex-col gap-10 min-h-96 hover:bg-zinc-900 transition-colors duration-300 ease-out"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        <div>
                            <h3 className="flex flex-col text-3xl font-black tracking-tight leading-none text-zinc-100 uppercase mt-4 gap-4">
                                <span>ENGINEERING</span>
                                <span>CLEANER</span>
                                <span>DIGITAL</span>
                                <span>EXPERIENCES</span>
                            </h3>
                        </div>
                        <div className="bg-zinc-900/50 p-9 rounded-xl border border-zinc-800/60 font-sans">
                            <div className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">Current Focus</div>
                            <div className="text-xs text-zinc-400 mt-1.5 leading-relaxed font-normal">
                                Managing complex client-side state propagation, optimizing component render cycles, and engineering smooth web micro-interactions.
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex justify-center mt-10">
                    <a
                        href="#projects"
                        className="text-center bg-zinc-100 text-zinc-950 text-xs font-medium py-3 px-10 rounded-md hover:bg-zinc-200 transition-colors"
                    >
                        View My Work
                    </a>
                </div>

            </div>
        </section>
    );
};

export default About;