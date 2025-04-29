'use client'
import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.section
      className="py-16 bg-white text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Education</h2>
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">BE – Electrical & Electronics Engineering</h3>
          <p className="text-gray-700">SVS College of Engineering | 2018 – 2022</p>
          <p className="text-gray-600 text-sm">CGPA: 7.6</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold">Higher Secondary – Computer Science</h3>
          <p className="text-gray-700">ST Britto HR Sec School | 2016 – 2017</p>
          <p className="text-gray-600 text-sm">Percentage: 65.5%</p>
        </div>
      </div>
    </motion.section>
  );
}