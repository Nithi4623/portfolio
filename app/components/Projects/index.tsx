'use client'
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      name: 'ViZHIL Admin Panel (CRM)',
      details: [
        'Role-based access with Redux and auth tokens',
        'Real-time updates and dynamic routing',
        'Tech Stack: React.js, Next.js 14, Material UI',
      ],
    },
    {
      name: 'ViZHIL Service Booking Platform',
      details: [
        'Real-time booking, wishlist functionality',
        'Razorpay integration for secure payments',
        'Tech Stack: React.js, Next.js 14, Tailwind CSS, Razorpay',
      ],
    },
    {
      name: 'E-commerce Vendor App',
      details: [
        'Vendor onboarding via Swagger & AWS Lambda',
        'Analytics dashboards and multi-step verification',
        'Tech Stack: React.js, Next.js 14, Material UI, Razorpay',
      ],
    },
  ];

  return (
    <motion.section
      className="py-16 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {project.details.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
