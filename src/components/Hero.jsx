import { TypeAnimation } from 'react-type-animation';
import profile from "../assets/profile.png";

function Hero() {
  return (
    <div id="home" data-aos="zoom-in" className="text-center mt-24 px-4">

      {/* IMAGE */}
      <img 
        src={profile} 
        alt="profile"
        className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-blue-500"
      />

      {/* 👇 CORRECT */}
      <TypeAnimation
        sequence={[
          "Hi, I'm Rushikesh 👋",
          2000,
          "Frontend Developer 💻",
          2000,
          "Software Tester 🧪",
          2000,
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        className="text-5xl md:text-6xl font-bold mt-6"
      />

      <p className="text-xl mt-4 text-gray-600">
        Frontend Developer & Software Tester
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow-lg">
        View My Work
      </button>

    </div>
  );
}

export default Hero;