import React from 'react'

const Service = () => {
    return (
        <div>
            {/* Services Page */}
            <div className="w-full h-screen bg-slate-400 md:bg-red-200 xl:bg-lime-200">
                <div className="flex flex-col mx-[1.2em]">
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
        </div>
    )
}

export default Service