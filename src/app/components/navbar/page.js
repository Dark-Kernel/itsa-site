import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setIsDrawerOpen(false);
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <nav
        className={`fixed w-full top-0 z-[9999] transition-all duration-300 ease-in-out ${
          scrolled ? "bg-[#121212] py-0" : "py-[18px]"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/img/logo.svg"
                alt="Logo"
                className="w-[9%] min-w-[30px]"
              />
              <div className="ml-2 flex flex-col justify-center h-full">
                <span className="text-white text-lg font-bold leading-tight">
                  Information Technology
                </span>
                <span className="text-white text-lg font-bold leading-tight">
                  Student Association 2024-25
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a
                href="#home"
                className={`text-white text-lg font-normal opacity-75 hover:opacity-100 px-6 ${
                  activeLink === "home" ? "opacity-100" : ""
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
              <a
                href="#team"
                className={`text-white text-lg font-normal opacity-75 hover:opacity-100 px-6 ${
                  activeLink === "team" ? "opacity-100" : ""
                }`}
                onClick={() => onUpdateActiveLink("team")}
              >
                Team
              </a>
              <a
                href="#events"
                className={`text-white text-lg font-normal opacity-75 hover:opacity-100 px-6 ${
                  activeLink === "events" ? "opacity-100" : ""
                }`}
                onClick={() => onUpdateActiveLink("events")}
              >
                Events
              </a>
              <a
                href="#about"
                className={`text-white text-lg font-normal opacity-75 hover:opacity-100 px-6 ${
                  activeLink === "about" ? "opacity-100" : ""
                }`}
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </a>
            </div>
            <div className="hidden md:flex items-center">
              {/* <div className="flex ml-3.5">
                <a
                  href=""
                  className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50 mr-1.5 relative group"
                >
                  <img
                    src="/img/nav-icon1.svg"
                    alt=""
                    className="w-[40%] z-10 transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[98%] group-hover:hue-rotate-[346deg] group-hover:brightness-[95%] group-hover:contrast-[86%]"
                  />
                  <div className="absolute inset-0 bg-white rounded-full transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </a>
                <a
                  href="#"
                  className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50 mr-1.5 relative group"
                >
                  <img
                    src="/img/nav-icon2.svg"
                    alt=""
                    className="w-[40%] z-10 transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[98%] group-hover:hue-rotate-[346deg] group-hover:brightness-[95%] group-hover:contrast-[86%]"
                  />
                  <div className="absolute inset-0 bg-white rounded-full transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </a>
                <a
                  href="#"
                  className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50 mr-1.5 relative group"
                >
                  <img
                    src="/img/nav-icon3.svg"
                    alt=""
                    className="w-[40%] z-10 transition-all duration-300 ease-in-out group-hover:filter group-hover:brightness-0 group-hover:saturate-100 group-hover:invert-0 group-hover:sepia-[7%] group-hover:saturate-[98%] group-hover:hue-rotate-[346deg] group-hover:brightness-[95%] group-hover:contrast-[86%]"
                  />
                  <div className="absolute inset-0 bg-white rounded-full transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100"></div>
                </a>
              </div> */}
              <HashLink to="#connect">
                <button className="font-bold text-white border border-white px-[34px] py-[18px] text-lg ml-[18px] relative bg-transparent transition-all duration-300 ease-in-out overflow-hidden group">
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </button>
              </HashLink>
            </div>
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={toggleDrawer}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[10000] w-64 bg-[#121212] transform ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col h-full justify-between p-4">
          <div>
            <button className="text-white mb-4" onClick={toggleDrawer}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className={`text-white text-lg font-normal ${
                  activeLink === "home" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </a>
              <a
                href="#team"
                className={`text-white text-lg font-normal ${
                  activeLink === "team" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => onUpdateActiveLink("team")}
              >
                Team
              </a>
              <a
                href="#events"
                className={`text-white text-lg font-normal ${
                  activeLink === "events" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => onUpdateActiveLink("events")}
              >
                Events
              </a>
              <a
                href="#about"
                className={`text-white text-lg font-normal ${
                  activeLink === "about" ? "opacity-100" : "opacity-75"
                }`}
                onClick={() => onUpdateActiveLink("about")}
              >
                About
              </a>
            </div>
          </div>
          <div>
            {/* <div className="flex justify-center space-x-4 mb-4">
              <a
                href="#"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50"
              >
                <img src="/img/nav-icon1.svg" alt="" className="w-[40%]" />
              </a>
              <a
                href="#"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50"
              >
                <img src="/img/nav-icon2.svg" alt="" className="w-[40%]" />
              </a>
              <a
                href="#"
                className="w-[42px] h-[42px] bg-white bg-opacity-10 rounded-full flex items-center justify-center border border-white border-opacity-50"
              >
                <img src="/img/nav-icon3.svg" alt="" className="w-[40%]" />
              </a>
            </div> */}
            <HashLink to="#connect">
              <button className="w-full font-bold text-white border border-white px-[34px] py-[18px] text-lg relative bg-transparent transition-all duration-300 ease-in-out overflow-hidden group">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-white w-0 transition-all duration-300 ease-in-out group-hover:w-full"></div>
              </button>
            </HashLink>
          </div>
        </div>
      </div>
    </Router>
  );
};
