import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";

function Projects() {
  return (
    <div id="projects" className="mt-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto hover:scale-105 transition">

  <img src={weather} className="w-full max-w-md mx-auto h-auto" />

  <div className="p-4">
    <h3 className="text-xl font-semibold">Weather App</h3>
    <p className="text-gray-600 mb-4">
      Real-time weather using API
    </p>

    {/* 👇 BUTTONS */}
    <div className="flex gap-4">
      <a 
        href="#" 
        target="_blank"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Live Demo 🚀
      </a>

      <a 
        href="https://github.com/rushikeshnirpal"
        target="_blank"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        GitHub 💻
      </a>
    </div>

  </div>
</div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-md mx-auto hover:scale-105 transition">

  <img src={portfolio} className="w-full max-w-md mx-auto h-auto" />

  <div className="p-4">
    <h3 className="text-xl font-semibold">Portfolio</h3>
    <p className="text-gray-600 mb-4">
      React + Tailwind
    </p>

    <div className="flex gap-4">
      <a 
        href="https://rushikeshnirpal.github.io/my-portfolio"
        target="_blank"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Live Demo 🚀
      </a>

      <a 
        href="https://github.com/rushikeshnirpal/my-portfolio"
        target="_blank"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
      >
        GitHub 💻
      </a>
    </div>

  </div>
</div>

      </div>
    </div>
  );
}

export default Projects;