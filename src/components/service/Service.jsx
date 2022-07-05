import React from 'react'

const Service = () => {
    return (
        <div>
            {/* Services Page */}
            <div className="bg-services-mobile xl:bg-services-tablet bg-cover w-full min-w-[472px] min-h-screen">
                <div className="flex flex-col mx-[1.2em]">
                    {/* Title */}
                    <div className="text-6xl md:text-7xl font-semibold flex flex-col justify-center items-start pl-2 mt-[1.5em] md:py-[.2em]">
                        <h1 className="text-white ">ICONIC</h1>
                        <h1 className="text-ITA pl-[2.1em] ">PHRASE</h1>
                    </div>
                    {/* Section Style 1*/}
                    <div className="w-2/5 xl:w-1/6 ml-[13em] mt-[22em] md:mt-[18em] xl:mt-[7em] xl:ml-[3em] pl-[2em]">
                        <h2 className="text-2xl text-ITA align-center md:text-3xl">GORDAN'S</h2>
                    </div>
                    {/* paragraph */}
                    <div className="w-4/5 xl:w-1/6 mt-[.5em] ml-[1.5em] mr-[6em] xl:ml-[3em] xl:p-[1em]">
                        <p className="text-white">ROFL PANELBEATING AM I RITE, CARS AND SHIT</p>
                    </div>
                    {/* Section Style 2*/}
                    <div className="w-2/5 xl:w-1/6 ml-[1.5em] px-[1.5em] mt-[6em] xl:ml-[16.2em]">
                        <h2 className="text-2xl md:text-3xl text-ITA align-center ">NAUGHYT</h2>
                    </div>
                    {/* paragraph */}
                    <div className="w-3/5 xl:w-1/6 mt-[.5em] ml-[4.5em] md:mb-[.5em] xl:ml-[16.2em] xl:p-[1em]" >
                        <p className="text-white">OMG I'M A STINKY REDHEAD THAT DRINKS COCA COLA, AND LOVES TO HELP OUT CHIMPS FROM CALIFORNIA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service