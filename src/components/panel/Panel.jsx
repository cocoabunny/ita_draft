import React from 'react'

const Panel = () => {
    return (
        <div>
            {/* Panel Beating Page */}
            <div className="bg-panel-mobile xl:bg-panel-tablet bg-cover sm:text-xl w-full min-w-[360px] min-h-screen">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-panel-span bg-cover bg-center flex flex-col justify-center items-center text-6xl md:text-7xl font-medium md:semibold drop-shadow-2xl shadow-black w-full h-[20vh]">
                            <h1 className="text-ITA pr-[3em]">PANEL</h1>
                            <h1 className="text-white pb-1 pl-[2em] md:pl-[2.4em]">BEATING</h1>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col h-[80vh] sm:mt-[3em] ml-[2em] md:ml-[3em] xl:ml-[4em] md:mt-[1em] xl:mt-[4em]">
                        {/* Section 1*/}
                        <div className="flex justify-start grow-0 w-3/5 sm:mb-[1em] md:self-center md:ml-[4em] xl:ml-[11.4em] ">
                            <h2 className="text-4xl text-white md:text-5xl 2xl:text-6xl">YEARS <strong className="text-ITA font-normal">AND</strong> YEARS</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="md:self-center md:w-2/5 p-[.2em] mx-[1.2em] sm:mx-[4em] sm:mt-[2em] md:px-[2em] md:ml-[18em] xl:ml-[33em] 2xl:mt-[4em]">
                            <p className="text-ITA font-semibold">At ITA,  our team of panel beaters have over 60 years of combined experience under our belt. Even though we can do almost anything, here's a brief list of some of services we currently offer:</p>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="md:self-center p-[.2em] mx-[1.2em] sm:mx-[4em] sm:mt-[2em] md:w-2/5 md:px-[2em] md:m-1 md:ml-[18em] lg:mt-16 xl:ml-[33em]">
                            <ul className="text-white font-semibold">
                                <li className="py-[.5em] sm:py-2">Panel beating and general repair for Major and Minor automotive accidents</li>
                                <li className="py-[.5em] sm:py-2">Panel replacement</li>
                                <li className="py-[.5em] sm:py-2">Paintless dent repair</li>
                                <li className="py-[.5em] sm:py-2">Detailing</li>
                                <li className="py-[.5em] sm:py-2">Vehicle A/C re-gassing</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panel