import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-gray-200 after:w-full">
      <nav className="bg-gray-800 fixed w-full">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <h1
                  className="text-white font-bold text-lg"
                  onClick={scrollToTop}
                >
                  My App
                </h1>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    activeClass="text-gray-300"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActiveSection}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === "section1" ? "bg-gray-900" : ""
                    }`}
                  >
                    Section 1
                  </Link>
                  <Link
                    activeClass="text-gray-300"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActiveSection}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === "section2" ? "bg-gray-900" : ""
                    }`}
                  >
                    Section 2
                  </Link>
                  <Link
                    activeClass="text-gray-300"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActiveSection}
                    className={`text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === "section3" ? "bg-gray-900" : ""
                    }`}
                  >
                    Section 3
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div id="section1" className="bg-white py-20 h-screen">
          <h2 className="text-3xl text-center font-bold mb-4">Section 1</h2>
          <p className="text-center">This is the content of Section 1.</p>
        </div>
        <div id="section2" className="bg-gray-100 py-20 h-screen">
          <h2 className="text-3xl text-center font-bold mb-4">Section 2</h2>
          <p className="text-center">This is the content of Section 2.</p>
        </div>
        <div id="section3" className="bg-white py-20 h-screen">
          <h2 className="text-3xl text-center font-bold mb-4">Section 3</h2>
          <p className="text-center">This is the content of Section 3.</p>
        </div>
      </main>
    </div>
  );
};

export default App;
