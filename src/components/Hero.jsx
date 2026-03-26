import profile from "../assets/profile.png";

function Hero() {
  return (
    <div id="home" data-aos="zoom-in" className="text-center mt-24 px-4">

      {/* 👇 IMAGE FIRST */}
      <img 
        src={profile} 
        alt="profile"
        className="w-32 h-32 mx-auto rounded-full object-cover shadow-lg border-4 border-blue-500"
      />

      <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">
        Hi, I'm <span className="text-blue-500">Rushikesh</span> 👋
      </h1>

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