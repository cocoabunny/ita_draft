import React from 'react'

const Footer = () => {
    return (
        <div>
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
    )
}

export default Footer