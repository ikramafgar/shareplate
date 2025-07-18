import { useState } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiPhone } from "react-icons/fi";
import { SiSimplelogin } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "/", icon: <FiHome className="text-lg" /> },
    { name: "About", path: "/about", icon: <FiInfo className="text-lg" /> },
    {
      name: "Contact",
      path: "/contact",
      icon: <FiPhone className="text-lg" />,
    },
    {
      name: "Login",
      path: "/login",
      icon: <SiSimplelogin className="text-lg" />,
    },
  ];

  return (
    <nav className="bg-neutral-50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          {/* <div>
            <a href="/" className="group inline-block focus:outline-none">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-green-600">S</span>
                <h1 className="text-3xl sm:text-4xl font-light tracking-wide text-gray-800">
                  hare
                  <span className="font-semibold text-emerald-600">Plate</span>
                </h1>
              </div>
              <div className="flex items-center mt-0.5">
                <div className="h-[2px] w-4 bg-emerald-400 mr-2" />
                <p className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                  Zero Waste Network
                </p>
              </div>
            </a>
          </div> */}

          <div className="group">
            <a
              href="/"
              className="inline-block p-1 -m-1 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-end">
                <svg
                  className="w-8 h-8 mr-2 text-emerald-500 group-hover:rotate-12 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    d="M12 22V12M8 8V2M16 8V2M18 12H6C4 12 3 14 4 15L6 19C7 20 8 22 12 22"
                  />
                </svg>

                <div>
                  <h1 className="text-3xl font-extrabold text-gray-800 leading-none">
                    <span className="text-emerald-600">Share</span>
                    <span className="text-gray-500">plate</span>
                  </h1>
                  <div className="flex items-center mt-1">
                    <div className="h-[2px] w-4 bg-lime-400 mr-2" />
                    <p className="text-xs font-medium text-gray-400 tracking-widest">
                      Zero Waste Network
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Right: Links */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Desktop Links */}
            <div className="hidden md:flex">
              {navlinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="flex items-center gap-2 text-amber-950 font-semibold px-4 py-2  transition-all duration-200 hover:text-green-600 hover:bg-green-50 hover:scale-105 focus:outline-none  tracking-tighter"
                >
                  {link.icon} {link.name}
                </a>
              ))}
            </div>

            {/* Login Button */}
            <div className="hidden md:block">
              <div className="hidden md:block">
                <a
                  href="/login"
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-7 py-2 rounded-full font-bold text-lg  hover:from-emerald-600 hover:to-green-600 transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  <SiSimplelogin size={22} className="mr-1 text-white" />
                  Login
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-green-700 hover:text-emerald-500 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md bg-white"
                aria-label="Toggle menu"
              >
                {menuOpen ? (
                  <FiX className="h-7 w-7" />
                ) : (
                  <FiMenu className="h-7 w-7" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-neutral-50 border-t border-neutral-200 shadow-lg absolute left-0 right-0 top-20 z-40">
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navlinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-amber-950 hover:text-amber-700 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.icon} {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
