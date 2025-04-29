'use client'
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      className="py-16 bg-gray-50 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Work Experience</h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow text-left">
        <h3 className="text-xl font-semibold text-blue-700">React Developer – LaabamOne Business Solutions</h3>
        <p className="text-gray-600 mt-1">Feb 2023 – Present</p>
        <ul className="list-disc list-inside mt-4 text-gray-700 space-y-1">
          <li>Built scalable admin panels with secure role-based access</li>
          <li>Integrated real-time workflows and serverless features using AWS Lambda</li>
          <li>Enhanced UI performance using SSR and dynamic routing</li>
        </ul>
      </div>
    </motion.section>
  );
}
