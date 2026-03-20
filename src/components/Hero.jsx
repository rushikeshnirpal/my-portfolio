function Hero() {
  return (
    <div className="text-center mt-24 px-4">
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-500">Rushikesh</span> 👋
      </h1>

      <p className="text-xl mt-4 text-gray-600">
        Frontend Developer & Software Tester
      </p>

      <button className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        View My Work
      </button>
    </div>
  );
}

export default Hero;