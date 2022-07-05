import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'



const NavLink = ({ link, children }) => {
    return <a href={link} className="text-2xl hidden sm:block">{children}</a>
}

const Nav = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div>
            {/* Nav Bar */}
            <nav name="top" className="bg-gray-900 md:text-ITA  text-white flex justify-between items-center w-full min-w-[472px] static px-8 py-4">
                <div className="md:bg-cyan-500 flex flex-row justify-between md:w-full">
                    {/* Business Logo */}
                    {/* <img src='' alt="ITA Panels" className="h-16 w-auto items-start" /> */}
                    <div className='bg-logo-white h-16 w-auto items-start'></div>

                    {/* Whatever is happening on line 23 i've forgotten it's relevance */}
                    <h1 className="sr-only">ITA Panels</h1> 
                    <div className="{click ? 'nav active' : 'nav'} ">
                        {/* Nav Links */}
                        <NavLink link="/" >Home</NavLink>
                        <NavLink link="/info">Services</NavLink>
                        {/* <NavLink link="#">Blog</NavLink> */}
                        <NavLink link="/enquiries">Contact</NavLink>
                    </div>
                </div>
                <div onClick={handleClick} className="block md:hidden">
                    {click ? (<AiOutlineClose className="bg-ITA" />) : (<AiOutlineMenu className=
                        "bg-blue-200 w-10 h-10 " />)}

                </div>

                {/* Mobile Nav */}
                <ul className=' text-3xl flex flex-col md:hidden '>
                    <NavLink link="/" >Home</NavLink>
                    <NavLink link="/info">Services</NavLink>
                    {/* <NavLink link="#">Blog</NavLink> */}
                    <NavLink link="/enquiries">Contact</NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Nav