import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experience = [
    {
      role: "Web Development Intern",
      company: "Paradox Innovator",
    },
    {
      role: "Core ML Member",
      company: "UiPath Students Community",
    },
  ];

  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">Experience</h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {experience.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-left"
          >
            <h3 className="text-xl font-semibold">{item.role}</h3>
            <p className="text-gray-400 mt-2">{item.company}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;