// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="p-4 bg-gray-900 text-center text-sm text-gray-400">
//       © {new Date().getFullYear()} Shivam Pandey. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;




import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-center py-6 mt-12 bg-black/60 backdrop-blur-md shadow-lg border-t border-gray-900">
      <div className="mb-2 text-gray-400">© 2025 Shivam Pandey</div>
      <div className="flex justify-center space-x-4 text-xl">
        <a href="https://github.com/shivamp9381" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://linkedin.com/in/shivamp9381" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
