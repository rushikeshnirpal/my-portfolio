function Navbar({ dark, setDark }) {
  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 bg-gray-900 text-white shadow-md">

      <h2 className="text-xl md:text-2xl font-bold">Rushikesh</h2>

      <div className="flex items-center gap-4 md:gap-6 text-sm md:text-lg">

        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#projects" className="hover:text-gray-400">Projects</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>

        {/* 🌙 DARK MODE BUTTON */}
        <button
          onClick={() => setDark(!dark)}
          className="bg-black px-3 py-1 rounded text-sm hover:bg-gray-800"
        >
          {dark ? "☀️" : "🌙"}
        </button>

      </div>
    </nav>
  );
}

export default Navbar;