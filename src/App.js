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
      <main className="flex-grow bg-black">
        {/* <img src="assets/vertical-home-hero.jpg" alt="tools 'n stuff" /> */}
        <div className="flex-row justify-evenly">
          <OffHeader title_1="ITA" title_2="PANELS" />
          <SecHeader title="SERVICES" />
          <SecBody section="BLAH BLAH BLAH" />
          <OffSecHeader title_1="PANEL" title_2="BEATING" />
          <SecBody section="BLAH BLAH BLAH" />
          <SecHeader title="SPRAYING" />
          <SecBody section="BLAH BLAH BLAH" />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">3</footer>

    </div>
  );
}

export default App;
