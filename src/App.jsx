import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });

    setTimeout(() => {
      AOS.refresh();
    }, 500);
  }, []);

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>

      {/* 🌙 Toggle Button */}
      <button 
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 bg-black text-white px-4 py-2 rounded"
      >
        {dark ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;