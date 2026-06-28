import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'


const Container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15, delayChildren: 0.2, staggerDirection: 1 }
    }
}

const item = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.2 }, staggerDirection: -1 }
}

const Contact = () => {

    const copyEmail = () => {
        navigator.clipboard.writeText("jijojohn911@gmail.com")
    }

    const copyNumber = () => {
        navigator.clipboard.writeText("+91 9656093498")
    }


    const formRef = useRef();
    const [formData, setFormData] = useState({
        from_firstName: '',
        from_lastName: '',
        from_subject: '',
        from_email: '',
        message: '',
    })

    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus("Sending");
        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY,

            );

            setStatus('success');
            setFormData({ from_firstName: '', from_lastName: '', from_email: '', from_subject: '', message: '' })

            setTimeout(() => {
                setStatus('idle')
            }, 5000);
        } catch (err) {
            console.log("emailjs Error:", err);
            setStatus("error")
        }
    }
    return (
        <section id='contact' className='w-full min-h-screen bg-black flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 font-serif  px-4 sm:px-8 lg:px-16 overflow-x-hidden '>

            <motion.div
                variants={Container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }}
                className='w-full lg:w-1/2 max-w-xl text-white/80 text-center md:text-left '>
                <motion.h2
                    variants={item}

                    className='uppercase text-zinc-300 mb-8 text-3xl sm:text-4xl md:text-5xl border-b border-emerald-600 pb-2 tracking-wide font-bold'>Contact Me
                </motion.h2>

                <motion.p
                    variants={item}
                    className='w-full mb-6 tracking-wider text-sm md:text-base'>
                    I'm passionate about transforming ideas into engaging digital experiences.
                    As a Full Stack Developer, I enjoy building fast, responsive, and user-friendly web applications.
                    Whether you have a project, an opportunity, or simply want to connect, I'd love to hear from you.
                </motion.p>

                <motion.label
                    variants={item}
                    className='block mb-2'>Email</motion.label>

                <motion.div
                    variants={item}
                    className='flex justify-center md:justify-start items-center gap-3 mb-4 hover:text-emerald-500 transition-colors w-fit mx-auto md:mx-0'>
                    <p className='text-base sm:text-lg break-all'>jijojohn911@gmail.com</p>
                    <i onClick={copyEmail} className="fa-regular fa-copy cursor-pointer"></i>
                </motion.div>

                <motion.label
                    variants={item}
                    className='block mb-2'>Mobile</motion.label>

                <motion.div
                    variants={item}
                    className='flex justify-center md:justify-start items-center gap-3 mb-4 hover:text-emerald-500 transition-colors w-fit mx-auto md:mx-0'>
                    <p className='font-mono text-base sm:text-lg'>(+91) 96x60xxxxxx</p>
                    <i onClick={copyNumber} className="fa-regular fa-copy ml-5 cursor-pointer"></i>
                </motion.div>

                <motion.div
                    variants={item}
                    className='mb-4'>
                    <h5>Follow me</h5>

                    <button className='text-2xl m-3 hover:text-emerald-500'><i className="fa-brands fa-github"></i></button>
                    <button className='text-2xl m-3 hover:text-emerald-500'><i className="fa-brands fa-instagram"></i></button>
                    <button className='text-2xl m-3 hover:text-emerald-500'><i className="fa-brands fa-linkedin"></i></button>
                </motion.div>
            </motion.div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                className='w-full lg:w-1/2 max-w-xl flex flex-col mt-20'>
                <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 text-zinc-300 mb-5'>
                    <div className='flex flex-col flex-1'>
                        <label
                            htmlFor='from_firstName'
                            className='mb-2'>First Name</label>
                        <input
                            id='from_firstName'
                            name='from_firstName'
                            value={formData.from_firstName}
                            onChange={handleChange}
                            type="text" placeholder='enter first name'
                            className='border border-emerald-500 px-3 py-1 rounded w-full' />
                    </div>

                    <div className='flex flex-col flex-1'>
                        <label
                            htmlFor='from_lastName'
                            className='mb-2'>Last Name</label>
                        <input
                            id='from_lastName'
                            name='from_lastName'
                            value={formData.from_lastName}
                            onChange={handleChange}
                            type="text" placeholder='Enter last name' className='border border-emerald-500 px-3 py-1 rounded w-full' />

                        <input
                            type="hidden"
                            name="from_name"
                            value={`${formData.from_firstName} ${formData.from_lastName}`.trim()}
                        />
                    </div>
                </div>
                <div className='text-white flex flex-col w-full'>

                    <label
                        htmlFor='from_email'
                        className='mb-2'>Email</label>
                    <input
                        value={formData.from_email}
                        id='from_email'
                        name='from_email'
                        onChange={handleChange}
                        type="email"
                        required
                        placeholder='Enter Email'
                        className='border border-emerald-500 w-full rounded px-3 py-1 mb-4' />

                    <label
                        htmlFor='from_subject'
                        className='mb-2'>Subject</label>

                    <input
                        value={formData.from_subject}
                        id='from_subject'
                        name='from_subject'
                        onChange={handleChange}
                        type="text"
                        required
                        className='border border-emerald-500 w-full rounded px-3 py-1 mb-4' />

                    <label
                        htmlFor='message'
                        className='mb-2'>Message</label>
                    <textarea
                        id='message'
                        name='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows='5'
                        placeholder='Type your message here ...'
                        className='border py-2 px-2 mb-4 rounded border-emerald-400 w-full'
                    ></textarea>
                </div>
                <button
                    disabled={status === 'Sending'}

                    className='text-zinc-800 bg-emerald-600 rounded p-2 w-full hover:bg-emerald-700 transition-colors font-bold'>
                    {status === 'Sending' ? 'Sending...' : 'Sumbit'}
                </button>
                {status === 'success' && (
                    <p className='text-emerald-500 text-sm mt-2'>
                        Message sent Successfully! I'll get back To you soon.
                    </p>
                )}
                {status === "error" && (
                    <p className='text-red-500 text-sm mt-2'>
                        Failed to send Message. Please try again
                    </p>
                )}

            </form>
        </section >
    )
}

export default Contact