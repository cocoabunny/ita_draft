import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

// Link props destructured in the links function
const links = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Services',
        link: '/info'
    },
    {
        name: 'Contact',
        link: '/enquiries'
    }
]

const NavLink = ({ link, children }) => {
    return <a href={link} className="text-white hover:text-ITA text-xl">{children}</a>
}

const Nav = () => {
    const [click, setClick] = useState(false)

    return (
        <div className="bg-black px-8 py-4 min-w-[472px]">
            {/* Nav Bar */}
            <nav name="top" className="flex justify-between items-center w-full static">
                <div className="flex flex-row items-center justify-between sm:justify-start gap-6 w-full">
                    {/* Logo / Header */}
                    <div>
                        <h1 className="sr-only">ITA Panels</h1> 
                        {/* png's good jpg bad redo it, export as a svg is possible with photopea or updated photoshop on pc */}
                        {/* TODO: Fix this logo - not displaying */}
                        <img alt="ITA Panels logo" src="/ITA_Header.png" className="h-12 w-auto mr-4 text-white" />
                    </div>

                    {/* Navigation Links */}
                    <nav className='hidden sm:flex gap-6'>
                        {links.map(({ name, link }) => (
                            <NavLink key={name} link={link}>{name}</NavLink>
                        ))}
                    </nav>

                    <div className="sm:hidden">
                        <button type="button" className="text-white hover:text-ITA" aria-controls="hamburger" aria-expanded="false" onClick={() => setClick(!click)}>
                            {click ? <AiOutlineClose className="text-3xl"/> : <AiOutlineMenu  className="text-3xl"/>}
                        </button>
                    </div>
                </div>
            </nav>
            {click && (
                <ul className="flex flex-col gap-3 mt-4 sm:hidden">
                    {links.map(({ name, link }) => (
                        <NavLink key={name} link={link}>{name}</NavLink>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Nav