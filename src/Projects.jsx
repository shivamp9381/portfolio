// import React from "react";
// import { motion } from "framer-motion";

// const Projects = () => {
//   const projects = [
//     {
//       name: "Weather-app",
//       link: "https://github.com/shivamp9381/weather-app",
//     },
//     {
//       name: "Measuremate - AI Powered Body Measurement System",
//       link: "https://github.com/shivamp9381/MeasureMate",
//     },
//     {
//       name: "EasyBuy - ecommerce Website",
//       link: "#",
//     },
//     {
//       name: "StudyHive - Discord like app for study rooms",
//       link: "https://github.com/shivamp9381/studyhive",
//     },
//     {
//       name: "LoopPost - Blog app",
//       link: "https://github.com/shivamp9381/LoopPost",
//     },
//   ];

//   return (
//     <motion.section
//       className="py-12 px-6 text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl font-bold mb-8">Projects</h2>
//       <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
//         {projects.map((project, index) => (
//           <a
//             key={index}
//             href={project.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block bg-gray-800 p-6 rounded-xl shadow-lg text-left hover:scale-105 transition-transform"
//           >
//             <h3 className="text-xl font-semibold">{project.name}</h3>
//             <p className="text-sm text-blue-400 mt-2">{project.link}</p>
//           </a>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default Projects;



import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      name: "Weather-app",
      link: "https://github.com/shivamp9381/weather-app",
    },
    {
      name: "Measuremate - AI Powered Body Measurement System",
      link: "https://github.com/shivamp9381/MeasureMate",
    },
    {
      name: "EasyBuy - ecommerce Website",
      link: "#",
    },
    {
      name: "StudyHive - Discord like app for study rooms",
      link: "https://github.com/shivamp9381/studyhive",
    },
    {
      name: "LoopPost - Blog app",
      link: "https://github.com/shivamp9381/LoopPost",
    },
  ];

  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-left hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <div className="flex items-center space-x-4 text-blue-400">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                <FaGithub className="inline mr-1" /> GitHub
              </a>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  <FaExternalLinkAlt className="inline mr-1" /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
