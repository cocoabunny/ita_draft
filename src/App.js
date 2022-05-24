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
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
            {/* Section 2*/}
            <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start grow-0 mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
              <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
            </div>
            {/* Paragraph 2*/}
            <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
              <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Page */}
      <div className="w-full h-screen bg-gray-700 md:bg-red-200 xl:bg-orange-200">
        <div className="flex flex-col">
          {/* Title */}
          <div className="bg-lime-900 md:bg-slate-600 xl:bg-purple-200 text-5xl tracking-widest px-[2em] py-[.2em] md:py-[.5em] xl:py-[.8em] xl:mt-[2.5em] xl:mr-[12em] self-center">
            <h1 className="text-orange-500">BEFORE</h1>
            <h1 className="text-white pl-[3.4em] xl:pl-[2.7em] xl:mt-[.2em]">AFTER</h1>
          </div>
          {/* Blog Card */}
          <div className="bg-rose-100 md:cyan-900 xl:emerald-400 w-[360px] h-[620px] md:w-[620px] xl:w-[864px] xl:h-[480px] self-center mt-[5em] xl:mt-[2em]">
            {/* Card Title */}
            <div className="bg-slate-800 bg-opacity-50 text-3xl mt-[2em] font-semibold px-[2.5em]">
              <h1 className="text-white">70 SERIES</h1>
              <h1 className="text-orange-500">LANDCRUISER</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Past Blog Page */}
      <div className="w-full h-screen bg-gray-700 md:bg-red-200 xl:bg-orange-200">
        {/* Title Span */}
        <div className="bg-slate-400 md:bg-cyan-200 xl:bg-emerald-500 xl:w-1/3 xl:ml-[8em]">
          <h2 className="flex flex-col text-4xl tracking-wider font-semibold px-4 py-2 md:items-center">
            <span className="md:pr-[3em] xl:pr-[1.9em]">PAST</span>
            <span className="text-yellow-600 ml-[1.9em] md:pl-[3em] xl:pl-[1.9em]">BLOGS</span>
          </h2>
        </div>
        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 p-8 mx-auto md:my-[4em]">
          {/* Blog Card 1 */}
          <div className="bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 md:mx-6 h-[320px] md:h-[520px] w-[320px]">
            <h3 className="bg-black bg-opacity-30 text-3xl px-8">
              <span className="text-yellow-600">CAR</span><br />
              <span>SUBMODEL 1973</span>
            </h3>
          </div>
          {/* Blog Card 2 */}
          <div className="bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 mt-4 md:mt-0 h-[320px] md:h-[520px] w-[320px]">
            <h3 className="bg-black bg-opacity-30 text-3xl px-8">
              <span className="text-yellow-600">CAR</span><br />
              <span>SUBMODEL 1973</span>
            </h3>
          </div>
          {/* Blog Card 3 */}
          <div className="hidden xl:flex flex-col bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 mt-4 md:mt-0 h-[520px] w-[320px]">
            <h3 className="bg-black bg-opacity-30 text-3xl px-8">
              <span className="text-yellow-600">CAR</span><br />
              <span>SUBMODEL 1973</span>
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <button className="text-2xl md:text-3xl text-white font-semibold">LOAD MORE</button>
        </div>
      </div>

      {/* Contact Page  */}
      <div className="h-screen w-full flex flex-col text-white bg-zinc-400 md:bg-orange-200 xl:bg-green-200">
        <main className="mx-[3em]">
          {/* Enquiries Header */}
          <div className="flex flex-col items-center mt-14">
            <h1 className="bg-blue-400 text-4xl text-yellow-600 font-bold tracking-widest">ENQUIRIES</h1>
            <p className="bg-cyan-200 ml-[13em] w-3/5 my-4">Please fill out the form below for a quote.</p>
          </div>
          <section>
            {/* Email Form Section */}
            <form className="flex flex-col items-center p-2 mt-[8em]">
              <label for="email" className="text-3xl text-yellow-600 font-semibold">EMAIL</label>
              <br />
              <input type="text" id="email" className=""></input>
              <br />
              <label for="enquiry" className="text-3xl text-yellow-600 font-semibold">ENQUIRY INFO</label>
              <p className="bg-blue-400 w-3/5 ">Please describe what services interest you and what vehicle you own</p>
              <textarea type="text" id="enquiry" className=""></textarea>
              <br />
              <button>Submit</button>
            </form>
          </section>
          {/* Address Info Section */}
          <div>
            <section>
              <h2></h2>
              <p></p>
              <div>
                {/* Google Maps Embed Container */}
              </div>
              <h3></h3>
              <p> </p>
              <div>
                {/* Social Media Icons Container */}
              </div>
            </section>
          </div>
        </main>
      </div>


      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="flex justify-between">
          <img src="/Footer-Logo.svg" alt="ita logo" className="h-24 w-auto m-[1.5em]" />
          <div className="flex flex-col justify-center items-center w-full bg-green-800">
            <ul className="p-2 text-[.8em] xl:flex xl:flex-row">
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
