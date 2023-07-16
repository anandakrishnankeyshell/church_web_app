import React, { useState } from 'react';
import logoimg from "./main/image/logoimg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navigationbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToAbout=()=>{
    window.scroll({top:900, left:0 ,behavior:'smooth'})
  }

  const scrollToServices=()=>{
    window.scroll({top:1500, left:0 ,behavior:'smooth'})
  }


  return (
    <nav className="bg-gray-800 opacity-80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
          <div className="flex items-center">
            <div className="flex-shrink-0  ">
              <div className='flex'>
                <img style={{ width: "4rem" }}
                  className='h-full p-2'
                  src={logoimg} alt="..." />
                <span className="text-white flex items-center">Holy Family Church,<br />Kiliyarkandam</span>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  rounded-md text-sm font-medium">
                  <a className='pe-2'
                    href="/"
                  >
                    Home
                  </a>
                  <button
                      className="text-gray-300 hover:text-white px-2 py-1  text-sm font-medium
                      border-l-2 border-gray-500 "
                      onClick={toggleDropdown}
                    >
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                    </button>
                    <div className="hidden md:block">
                  <div className="ml-4 flex items-center">
                    
                    {isDropdownOpen && (
                      <div className="ml-2">
                        <div className=" absolute  mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <button
                              onClick={scrollToAbout}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              About Us
                            </button>
                            <button
                              onClick={scrollToServices}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                              role="menuitem"
                            >
                              Services
                            </button>
                           
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                </div>

                <a
                  href='more_about_us'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                 About Us
                </a>
                <a
                  href='contact'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href='people_details'
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Peoples info
          </a>
          <a
            href='##'
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
