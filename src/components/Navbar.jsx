const Navbar = () => {
    return (
        

<nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Title */}
        <h1 className="text-lg font-semibold text-sky-600">
          SkinDisease
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-600 text-sm">
          <li className="hover:text-sky-600 font-bold cursor-pointer">About</li>
        </ul>

        {/* Button */}
        <button className="bg-sky-600 text-white px-4 py-2 rounded-md text-sm hover:bg-sky-700 transition">
          Try Demo
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
