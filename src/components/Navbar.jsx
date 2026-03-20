function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-md">
      <h2 className="text-2xl font-bold">Rushikesh</h2>

      <div className="space-x-6 text-lg">
        <span className="cursor-pointer hover:text-gray-400">Home</span>
        <span className="cursor-pointer hover:text-gray-400">About</span>
        <span className="cursor-pointer hover:text-gray-400">Projects</span>
        <span className="cursor-pointer hover:text-gray-400">Contact</span>
      </div>
    </nav>
  );
}

export default Navbar;