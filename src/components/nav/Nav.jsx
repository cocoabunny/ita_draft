import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import '../nav../components/assets/ITA_logo_bare.pdf'


const NavLink = ({ link, children }) => {
    return <a href={link} className="text-2xl hidden sm:block">{children}</a>
}

const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div>
            {/* Nav Bar */}
            <nav className=" px-8 py-4 bg-gray-900 text-white flex justify-between items-center md:text-orange-500 static">
                <div className="md:bg-white flex flex-row justify-between md:w-full">
                    {/* Business Logo */}
                    <img src="/logo.svg" alt="ITA Panels" className="h-16 w-auto items-start" />

                    <h1 className="sr-only">ITA Panels</h1>
                    <div className="{click ? 'nav active' : 'nav'} ">
                        {/* Nav Links */}
                        <NavLink link="#" >Home</NavLink>
                        <NavLink link="#">Services</NavLink>
                        <NavLink link="#">Blog</NavLink>
                        <NavLink link="#">Contact</NavLink>
                    </div>
                </div>
                {/* Hamburger menu */}
                {/* <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 block sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg> */}
                <div onClick={handleClick} className="block md:hidden">
                    {click ? (<AiOutlineClose className="bg-orange-400" />) : (<AiOutlineMenu className=
                        "w-10 h-10 ml- bg-blue-200" />)}

                </div>

                {/* Mobile Nav */}
                <ul className=' md:hidden flex flex-col text-3xl'>
                    <NavLink link="#" >Home</NavLink>
                    <NavLink link="#">Services</NavLink>
                    <NavLink link="#">Blog</NavLink>
                    <NavLink link="#">Contact</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Nav