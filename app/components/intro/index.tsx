'use client'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <motion.section
      className="text-center py-24 px-6 bg-gradient-to-br from-indigo-700 via-indigo-600 to-indigo-500 text-white shadow-xl rounded-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{ fontFamily: 'Poppins, sans-serif' }} // Applied Poppins font globally to the section
    >
      <h1
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-md"
        style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for the heading
      >
        Hi, I'm Nithish S
      </h1>
      <p
        className="text-xl sm:text-2xl mt-4 font-light"
        style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for the description
      >
        React.js & Next.js Developer
      </p>
      <p
        className="mt-2 text-gray-200"
        style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for the location
      >
        Madurai, India | 
        <a 
          href="mailto:nithiscruz@gmail.com" 
          className="underline text-gray-100 hover:text-gray-300 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for the email
        >
          nithiscruz@gmail.com
        </a>
      </p>

      <div className="mt-8 space-x-4 flex justify-center">
        <a
          href="/Nithish_Resume.pdf"
          download
          className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow-xl hover:bg-gray-100 transition-transform transform hover:scale-105"
          style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for button
        >
          📄 Download Resume
        </a>
        <a
          href="mailto:nithiscruz@gmail.com"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-xl transition-transform transform hover:scale-105"
          style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for button
        >
          💼 Hire Me
        </a>
      </div>

      <div className="mt-6">
        <a
          href="https://www.linkedin.com/in/nithis-46"
          className="underline text-lg hover:text-indigo-300 transition-colors"
          style={{ fontFamily: 'Poppins, sans-serif' }} // Inline Poppins font for LinkedIn link
        >
          Linked-In
        </a>
      </div>
    </motion.section>
  );
}
