// import React from "react";
// import Hero from "../Hero";
// import Skills from "../Skills";
// import Experience from "../Experience";
// import Projects from "../Projects";
// import Education from "../Education";
// import Contact from "../Contact";

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <Skills />
//       <Experience />
//       <Projects />
//       <Education />
//       <Contact />
//     </>
//   );
// };

// export default Home;

import React from "react";
import Hero from "../Hero";
import Skills from "../Skills";
import Experience from "../Experience";
import Projects from "../Projects";
import Education from "../Education";
import Contact from "../Contact";

const Home = () => {
  return (
    <>
      <section id="home"><Hero /></section>
      <section id="skills"><Skills /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="education"><Education /></section>
      <section id="contact"><Contact /></section>
    </>
  );
};

export default Home;
