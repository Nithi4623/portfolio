'use client'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <motion.section
      className="text-center py-20 px-6 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white shadow-2xl rounded-xl"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: 'Poppins, sans-serif' }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-normal leading-snug">
        Hi, I'm Nithish S
      </h1>

      <p className="text-lg sm:text-xl mt-3 font-normal text-indigo-100">
        React.js & Next.js Developer
      </p>

      <p className="mt-2 text-indigo-200 text-sm sm:text-base">
        Madurai, India | 
        <a
          href="mailto:nithiscruz@gmail.com"
          className="underline ml-1 hover:text-white transition-colors"
        >
          nithiscruz@gmail.com
        </a>
      </p>

      <div className="mt-8 flex justify-center flex-wrap gap-4">
        <a
          href="/Nithish_Resume.pdf"
          download
          className="bg-white text-indigo-600 font-medium py-2.5 px-5 rounded-md shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          📄 Download Resume
        </a>
        <a
          href="mailto:nithiscruz@gmail.com"
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-5 rounded-md shadow transition-transform transform hover:scale-105"
        >
          💼 Hire Me
        </a>
      </div>

      <div className="mt-6">
        <a
          href="https://www.linkedin.com/in/nithis-46"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-base hover:text-indigo-300 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </motion.section>
  );
}
