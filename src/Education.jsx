import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Bachelor of Technology (B.Tech)</h3>
        <p className="text-gray-400 mt-2">Computer Science and Engineering</p>
        <p className="text-gray-400">Kalinga Institute of Industrial Technology</p>
        <p className="text-gray-400">2022 - 2026</p>
        <p className="text-gray-400">CGPA - 8.52</p>
      </div>
      <br />
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Class X</h3>
        <h3 className="text-xl font-semibold">ICSE</h3>
        <p className="text-gray-400">St John's School DLW</p>
        <p className="text-gray-400">2020</p>
        <p className="text-gray-400">93%</p>
      </div>
      <br />
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold">Class XII</h3>
        <h3 className="text-xl font-semibold">ICSE</h3>
        <p className="text-gray-400">St John's School DLW</p>
        <p className="text-gray-400">2022</p>
        <p className="text-gray-400">86%</p>
      </div>
    </motion.section>
  );
};

export default Education;