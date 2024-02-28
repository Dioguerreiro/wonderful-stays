import React, { useState } from "react";
import "./Navbar.scss";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex gap-[72px] w-full justify-between">
            <div className="flex items-center">
              <img
                className="block w-[250px] h-auto"
                src={
                  "https://assets-global.website-files.com/659b1223cbd8d0f4420ef47b/659b1279b53dc2c262af466f_wonderful_stays.png"
                }
                alt="logo"
              />
            </div>
            <div className="hidden sm:flex h-full items-center">
              <a href="#" className="py-6 px-4">
                Home
              </a>
              <a href="#" className="py-6 px-4">
                About
              </a>
              <a href="#" className="py-6 px-4">
                Services
              </a>
              <a href="#" className="py-6 px-4">
                Contact
              </a>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex flex-col w-12 h-12 gap-[6px] justify-center items-center p-0"
                onClick={toggleMenu}
              >
                <div className={`w-6 h-[2px] bg-black menu-icon-line-top ${isMenuOpen ? "transformed" : ""}`}></div>
                <div className={`w-6 h-[2px] bg-black menu-icon-line-middle ${isMenuOpen ? "transformed" : ""}`}></div>
                <div className={`w-6 h-[2px] bg-black menu-icon-line-bottom ${isMenuOpen ? "transformed" : ""}`}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, toggle classes based on menu state. */}
      <div className={`relative ${isMenuOpen ? "mobile-nav-wrapper" : ""}`}>
        <div
          className={`absolute left-0 right-0 overflow-hidden w-full transition-max-height duration-500 ease-in-out ${
            !isMenuOpen ? "max-h-0" : "max-h-screen"
          }`}
        >
          <div className="flex flex-col gap-6 bg-white p-4">
            <a href="#" className="text-lg">
              Accommodations
            </a>
            <a href="#" className="text-lg">
              Categories
            </a>
            <a href="#" className="text-lg">
              About Us
            </a>
            <a href="#" className="text-lg">
              Inspiration
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
