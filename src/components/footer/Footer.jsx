import React from 'react'
import { Link } from 'react-scroll'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            {/* Footer */}
            <footer className="text-ITA font-semibold min-w-[320px] min-h-[144px]">
                <div className="bg-footer-span bg-cover bg-center flex flex-col sm:flex-row justify-between">
                    <img src="/ITA_Footer.png" alt="ita logo" className="h-16 mt-9 m-[1.5em] w-[14em] sm:w-auto" />
                    <div className="flex flex-col justify-center items-center w-full">
                        <ul className="xl:flex xl:flex-row p-2 ">
                            <li className="my-4 xl:mx-[2em] tracking-wide"><strong className="text-white">EMAIL:</strong> ITAPANELS@GMAIL.COM</li>
                            <li className="my-4 xl:mx-[2em]"><strong  className="text-white">1/6 HAMMER CT</strong> HOPPERS CROSSING, <strong className="text-white">VIC 52203</strong></li>
                            <li className="my-4 xl:mx-[2em]"><strong className="text-white">DEVELOPER:</strong> CANAANDELOSSANTOS@GMAIL.COM </li>
                        </ul>
                    </div>
                    <button aria-label="smooth-scroll button">
                    <Link href="nav" activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='h-14 w-auto m-[2em]' />
                    </Link>
                    </button>
                </div>

            </footer>
        </div>
    )
}

export default Footer