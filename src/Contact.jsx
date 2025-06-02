import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      className="py-12 px-6 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
      <p className="text-gray-300 mb-4">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      <a
        href="mailto:shivampandey.cs.21@gmail.com"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition"
      >
        Say Hello
      </a>
    </motion.section>
  );
};

export default Contact;