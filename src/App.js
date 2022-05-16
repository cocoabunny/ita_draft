import React, { useEffect } from "react";
import Footer_Logo from "./components/t-wind_elements/Footer_Logo";
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
        <div className="md:bg-slate-700 xl:bg-yellow-300 ">
          {/* <img src="assets/vertical-home-hero.jpg" alt="tools 'n stuff" className="max-w-full h-auto md:hidden lg:hidden" /> */}
          <div className="flex flex-col text-[#ff0000] mx-8">
            {/* Title */}
            <h1 className="text-4xl mt-[2em] bg-white w-3/5 p-4 md:w-[40vw] md:bg-wide-home xl:text-6xl xl:w-[30vw]">PAGE TITLE</h1>
            {/* Article */}
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
            {/* Article */}
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
            {/* Article */}
            <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
              <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
              <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
            </div>
          </div>
        </div>
      </main>

      {/* Services Page */}
      <div className="w-full h-screen bg-slate-400 md:bg-red-200 xl:bg-lime-200">
        <div className="flex flex-col m-[1.2em]">
          {/* Title */}
          <div className="bg-lime-600 md:bg-slate-600 xl:bg-emerald-800 text-4xl pl-[2em] md:py-[.2em] xl:mt-[3em] ">
            <h1 className="text-white md:pl-[2em]">ICONIC</h1>
            <h1 className="text-orange-500 pl-[2em] md:pl-[5.2em]">PHRASE</h1>
          </div>
          {/* Section Style 1*/}
          <div className="bg-emerald-800 md:lime-600 xl:slate-600 mt-[22em]  w-2/5 ml-[13em] pl-[2em] md:mt-[27em] xl:w-1/6 xl:mt-[7em] xl:ml-[3em]">
            <h2 className="text-2xl text-orange-500 align-center md:text-3xl">GORDAN'S</h2>
          </div>
          {/* paragraph */}
          <div className="bg-emerald-400 md:bg-purple-400 xl:bg-rose-400 mt-[.5em] ml-[1.5em] mr-[6em] w-4/5 xl:w-1/6 xl:ml-[3em] xl:p-[1em]">
            <p className="text-white">ROFL PANELBEATING AM I RITE, CARS AND SHIT</p>
          </div>
          {/* Section Style 2*/}
          <div className="bg-emerald-800 md:lime-600 xl:slate-600 mt-[6em] w-2/5 ml-[1.5em] px-[1.5em] xl:w-1/6 xl:ml-[16.2em]">
            <h2 className="text-2xl text-orange-500 align-center md:text-3xl">NAUGHYT</h2>
          </div>
          {/* paragraph */}
          <div className="bg-emerald-400 md:bg-purple-400 xl:bg-rose-400 mt-[.5em] ml-[4.5em] w-3/5 md:mb-[.5em] xl:w-1/6 xl:ml-[16.2em] xl:p-[1em]" >
            <p className="text-white">OMG I'M A STINKY REDHEAD THAT DRINKS COCA COLA, AND LOVES TO HELP OUT CHIMPS FROM CALIFORNIA</p>
          </div>
        </div>
      </div>

      {/* Spraying Page */}
      <div className="w-full h-screen bg-red-200 md:bg-slate-400 xl:bg-yellow-200">
        <div className="flex flex-col">
          {/* Title */}
          <div className="bg-teal-600 md:bg-violet-300 xl:bg-purple-800 text-4xl flex justify-center py-[1.2em]">
            <h1 className="text-orange-500 text-5xl md:text-6xl">SPRAYING</h1>
          </div>
          {/* Container */}
          <div className="flex flex-col mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em] h-[80vh] ">
            {/* Section 1*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start mb-[1em]">
              <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
            </div>
            {/* Paragraph 1*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
            {/* Section 2*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
              <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
            </div>
            {/* Paragraph 2*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
            {/* Section 3*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
              <h2 className="text-3xl text-white md:text-4xl">INFO III</h2>
            </div>
            {/* Paragraph 3*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Panel Beating Page */}
      <div className="w-full h-screen bg-rose-900 md:bg-cyan-900 xl:bg-emerald-900">
        <div className="flex flex-col">
          {/* Title */}
          <div className="text-4xl md:text-6xl bg-black px-[8.5em] self-center md:bg-transparent md:pt-[.7em]">
            <h1 className="text-white ">PANEL</h1>
            <h1 className="text-orange-500 pl-[2em] md:pl-[2.4em]">BEATING</h1>
          </div>
          {/* Container */}
          <div className="flex flex-col mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em] h-[80vh] ">
            {/* Section 1*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start grow-0 mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
              <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
            </div>
            {/* Paragraph 1*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
            {/* Section 2*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
              <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
            </div>
            {/* Paragraph 2*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="flex justify-between">
          <img src="/Footer-Logo.svg" alt="ita logo" className="h-24 w-auto m-[1.5em]" />
          <div className="flex flex-col justify-center items-center justify-around w-full bg-green-800">
            <ul className="p-2 text-[.8em] xl:flex xl:flex-row text-[1em]">
              <li className="my-4 xl:mx-[2em]">EMAIL: GORDAN@GMAIL.COM</li>
              <li className="my-4 xl:mx-[2em]">1/6 HAMMER CT HOPPERS CROSSING, VIC 52203</li>
              <li className="my-4 xl:mx-[2em]">DEVELOPED BY SANTOS DEVELOPMENT </li>
            </ul>
          </div>

          <img src="Footer-Arrow.svg" alt="quick-scroll up arrow icon" className=" h-14 w-auto m-[2em]"></img>
        </div>

      </footer>

    </div>
  );
}

export default App;
