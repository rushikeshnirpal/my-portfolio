function Projects() {
  return (
    <div className="mt-32 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold">Weather App</h3>
          <p className="text-gray-600 mt-2">
            A weather app that shows real-time temperature and weather data using API.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-600 mt-2">
            Personal portfolio built using React and Tailwind CSS.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-xl font-semibold">Coming Soon</h3>
          <p className="text-gray-600 mt-2">
            More projects will be added soon.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Projects;
