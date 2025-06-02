import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const categories = {
    Frontend: ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
    Backend: ["Express.js", "Django", "SQL", "MongoDB", "PostgreSQL"],
    Languages: ["C", "C++", "JavaScript", "Java", "Python"],
    Tools: ["Docker", "VS Code", "Postman"]
  };

  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(categories).map(([title, items]) => (
          <div key={title} className="bg-gray-800 rounded-xl p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <ul className="space-y-1 text-gray-300">
              {items.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;