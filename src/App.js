import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StartupAnimation from "./StartupAnnimation/StartupAnnimation";

const App = () => {
  const [isAnimationDone, setIsAnimationDone] = useState(false);

  return (
    <Router>
      {!isAnimationDone ? (
        <StartupAnimation onFinish={() => setIsAnimationDone(true)} />
      ) : (
        <div className="bg-gradient-to-br from-[#2d2b777f] via-[#2d2b777f] to-[#d30808] min-h-screen text-white font-sans scroll-smooth">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
