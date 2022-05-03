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
        <div className="md:bg-white xl:bg-yellow-300 ">
          {/* <img src="assets/vertical-home-hero.jpg" alt="tools 'n stuff" className="max-w-full h-auto md:hidden lg:hidden" /> */}
          <div className="flex flex-col space-y-[1em] text-[#ff0000] justify-evenly object-cover">
            <div className="xs:hidden sm:hidden md:hidden lg:bg-black xl:hidden">HI</div>
            <h1 className="text-4xl mt-8 ml-8 mb-8 bg-white w-3/5 p-4">PAGE TITLE</h1>
            <h2 className="p-6 text-2xl ml-8 bg-orange-300 w-3/5">Title</h2>
            <p className="p-8 ml-16 text-xl bg-cyan-400 w-3/5">SECTION</p>
            <h2 className="p-4 text-2xl ml-8 bg-orange-300 w-3/5">Title</h2>
            <p className="p-8 ml-16 text-xl bg-cyan-400 w-3/5">SECTION</p>
            <h2 className="p-4 text-2xl ml-8 bg-orange-300 w-3/5">Title</h2>
            <p className="p-8 ml-16 text-xl bg-cyan-400 w-3/5">SECTION</p>
            {/* <OffHeader title_1="ITA" title_2="PANELS" />
            <SecHeader title="SERVICES" />
            <SecBody section="BLAH BLAH BLAH" />
            <OffSecHeader title_1="PANEL" title_2="BEATING" />
            <SecBody section="BLAH BLAH BLAH" />
            <SecHeader title="SPRAYING" />
            <SecBody section="BLAH BLAH BLAH" /> */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">3</footer>

    </div>
  );
}

export default App;
