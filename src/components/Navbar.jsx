function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-md">
      <h2 className="text-2xl font-bold">Rushikesh</h2>

      <div className="space-x-6 text-lg">
        <a href="#home">Home</a>
<a href="#about">About</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>
<a href="#skills" className="hover:text-gray-400">Skills</a>
      </div>
    </nav>
  );
}

export default Navbar;