'use client'

import { motion } from 'framer-motion';



export default function Skills() {
  const skills = [
    'React.js', 'Next.js 14', 'Redux', 'TypeScript', 'Tailwind CSS',
    'Material UI', 'Vercel', 'AWS Lambda', 'Razorpay Integration'
  ];

  return (
    <motion.section
      className="py-16 bg-gray-50 text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-4 px-6">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-white text-gray-800 py-2 px-4 rounded-full shadow text-sm font-medium hover:scale-105 transform transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
