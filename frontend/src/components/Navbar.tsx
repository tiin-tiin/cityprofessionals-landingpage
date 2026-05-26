import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffcc2a] shadow-md sticky top-0 z-50 h-[76px] px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">

        {/* Logo */}
        <a href="/">
          <img src="/logo.png" alt="City Professionals Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-bold text-[#3b5998]">
          <a href="#" className="relative group hover:text-black transition-colors duration-300">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" className="relative group hover:text-black transition-colors duration-300">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" className="relative group hover:text-black transition-colors duration-300">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" className="relative group hover:text-black transition-colors duration-300">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#3b5998] hover:text-black transition focus:outline-none cursor-pointer"
          >
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[76px] left-0 w-full bg-[#ffcc2a] shadow-xl border-t border-yellow-400 flex flex-col items-center py-6 gap-6 font-bold text-[#3b5998] z-50">
          <a href="#" onClick={() => setIsOpen(false)} className="relative group hover:text-black transition-colors duration-300">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="relative group hover:text-black transition-colors duration-300">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="relative group hover:text-black transition-colors duration-300">
            About Us
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
          <a href="#" onClick={() => setIsOpen(false)} className="relative group hover:text-black transition-colors duration-300">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar