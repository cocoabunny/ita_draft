import React from 'react'

const Service = () => {
    return (
        <div>
            {/* Services Page */}
            <div className="w-full h-screen bg-services-mobile bg-cover xl:bg-services-tablet">
                <div className="flex flex-col mx-[1.2em]">
                    {/* Title */}
                    <div className="text-6xl md:text-7xl font-semibold pl-2 mt-[1.5em] md:py-[.2em] flex flex-col justify-center items-start">
                        <h1 className="text-white ">ICONIC</h1>
                        <h1 className="text-orange-500 pl-[2.1em] ">PHRASE</h1>
                    </div>
                    {/* Section Style 1*/}
                    <div className="mt-[22em] md:mt-[18em] w-2/5 ml-[13em] pl-[2em] xl:w-1/6 xl:mt-[7em] xl:ml-[3em]">
                        <h2 className="text-2xl text-orange-500 align-center md:text-3xl">GORDAN'S</h2>
                    </div>
                    {/* paragraph */}
                    <div className="mt-[.5em] ml-[1.5em] mr-[6em] w-4/5 xl:w-1/6 xl:ml-[3em] xl:p-[1em]">
                        <p className="text-white">ROFL PANELBEATING AM I RITE, CARS AND SHIT</p>
                    </div>
                    {/* Section Style 2*/}
                    <div className="mt-[6em] w-2/5 ml-[1.5em] px-[1.5em] xl:w-1/6 xl:ml-[16.2em]">
                        <h2 className="text-2xl text-orange-500 align-center md:text-3xl">NAUGHYT</h2>
                    </div>
                    {/* paragraph */}
                    <div className="mt-[.5em] ml-[4.5em] w-3/5 md:mb-[.5em] xl:w-1/6 xl:ml-[16.2em] xl:p-[1em]" >
                        <p className="text-white">OMG I'M A STINKY REDHEAD THAT DRINKS COCA COLA, AND LOVES TO HELP OUT CHIMPS FROM CALIFORNIA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service