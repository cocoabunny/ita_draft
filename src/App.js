import React, { useEffect } from "react";
import OffHeader from "./components/t-wind_elements/OffHeader"
import OffSecHeader from "./components/t-wind_elements/OffSecHeader";
import SecBody from "./components/t-wind_elements/SecBody";
import SecHeader from "./components/t-wind_elements/SecHeader";


const NavLink = ({ link, children }) => {
  return <a href={link} className="text-2xl hidden sm:block">{children}</a>
}

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Nav Bar */}
      <nav className="px-8 py-4 bg-gray-900 text-white flex justify-between items-center md:text-orange-500">
        {/* Business Logo */}
        <img src="/logo.svg" alt="ITA Panels" className="h-16 w-auto" />

        <h1 className="sr-only">ITA Panels</h1>

        {/* Hamburger menu */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        {/* Nav Links */}
        <NavLink link="#">Home</NavLink>
        <NavLink link="#">Services</NavLink>
        <NavLink link="#">Blog</NavLink>
        <NavLink link="#">Contact</NavLink>
      </nav>

      {/* Hero Section */}
      <main className="w-full h-screen bg-black text-white">
        <div className="h-screen md:bg-slate-700 xl:bg-yellow-300 ">
          {/* <img src="assets/vertical-home-hero.jpg" alt="tools 'n stuff" className="max-w-full h-auto md:hidden lg:hidden" /> */}
          <div className="flex flex-col text-[#ff0000] mx-8">
            <h1 className="text-4xl mt-[2em] bg-white w-3/5 p-4 md:w-[40vw] md:bg-wide-home xl:text-6xl xl:w-[30vw]">PAGE TITLE</h1>
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">3</footer>

    </div>
  );
}

export default App;
