import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

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
    <div className="bg-gray-100 min-h-screen">
      
      {/* ✅ Navbar always on top */}
      <Navbar />

      {/* ✅ Sections in order */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}

export default App;