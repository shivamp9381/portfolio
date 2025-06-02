// import React from "react";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <motion.section
//       className="min-h-screen flex flex-col justify-center items-center text-center p-6"
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <img
//         src="https://i.ibb.co/TBxFCFzB/Whats-App-Image-2025-06-02-at-17-57-37.jpg"
//         alt="Shivam Pandey"
//         className="w-120 h-80 rounded-full border-4 border-white mb-4"
//       />
//       <h1 className="text-4xl font-bold mb-2">Shivam Pandey</h1>
//       <p className="max-w-xl text-lg text-gray-300">
//         Results-driven Computer Science and Engineering student with full-stack and ML
//         skills. Passionate about building things that live on the internet.
//       </p>
//       <p className="italic text-sm mt-4 text-gray-400">
//         “Each of us can make a positive difference if we commit ourselves to do so.” - Dr. Cornel West.
//       </p>
//     </motion.section>
//   );
// };

// export default Hero;




import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 pt-28 bg-gradient-to-b from-black via-gray-900 to-gray-800 w-full">
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center p-6 pt-28"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg"></div>
        <img
          src="https://i.ibb.co/TBxFCFzB/Whats-App-Image-2025-06-02-at-17-57-37.jpg"
          alt="Shivam Pandey"
          className="relative w-80 h-100 rounded-full border-4 border-white mb-4"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Shivam Pandey</h1>
      <TypeAnimation
        sequence={["Full Stack Developer", 2000, "ML Enthusiast", 2000, "Tech Explorer", 2000]}
        wrapper="span"
        speed={50}
        className="text-lg text-blue-400"
        repeat={Infinity}
      />
      <p className="max-w-xl text-lg text-gray-300 mt-4">
        Results-driven Computer Science and Engineering student passionate about full-stack development and machine learning.
      </p>
      <p className="italic text-sm mt-4 text-gray-400">
        “Each of us can make a positive difference if we commit ourselves to do so.” - Dr. Cornel West.
      </p>
    </motion.section>

    </section>
  );
};

export default Hero;