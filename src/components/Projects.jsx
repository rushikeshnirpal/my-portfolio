import weather from "../assets/weather.png";
import portfolio from "../assets/portfolio.png";

function Projects() {
  return (
    <div className="mt-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={weather} className="w-full h-auto" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Weather App</h3>
            <p className="text-gray-600">Real-time weather using API</p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition">
          <img src={portfolio} className="w-full h-auto" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Portfolio</h3>
            <p className="text-gray-600">React + Tailwind</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;