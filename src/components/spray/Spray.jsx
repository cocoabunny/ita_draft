import React from 'react'

const Spray = () => {
    return (
        <div>
            {/* Spraying Page */}
            <div className="bg-black bg-spray-mobile xl:bg-spray-wide bg-cover w-full min-w-[320px] min-h-[100vh]">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-spray-span bg-cover bg-center flex flex-col justify-center items-center text-4xl drop-shadow-2xl shadow-white min-h-[20vh]"> 
                        <div className="">
                            <h1 className="text-ITA text-6xl md:text-7xl tracking-widest font-semibold md:font-medium py-[.6em] pt-16 ">SPRAYING</h1>
                        </div>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col min-h-[100vh] sm:mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md:mt-[3em] xl:mt-[4em]">
                         {/* Title 1*/}
                         <div className="flex justify-start w-14/5 mb-[1em] mt-[1.5em] sm:mt-[5em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-5xl text-ITA sm:text-white font-semibold ">FINAL TOUCH</h2>
                        </div>
                        {/* Article 1*/}
                        <div className="sm:mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em]">
                            <p className="text-white sm:text-ITA font-semibold md:text-xl">ITA's Spraying team provides spraying and detailing services that render the vehicle's coat indistinguishable from the factory coat. Our shop in Hoppers Crossing features a fully functioning Australian made Seetal spraying booth.
</p>
                        </div>
                        {/* Title 2*/}
                        <div className="flex justify-start w-4/5 mb-[1em] mt-[2em] sm:mt-[5em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-5xl text-ITA sm:text-white font-semibold ">SPRAYING SERVICES</h2>
                        </div>
                        {/* Article 2*/}
                        <div className="sm:mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em] ">
                            <p className="text-white sm:text-ITA font-semibold md:text-xl">ITA offers respraying and fitting for: tubs, ute trays, tray tool boxes and much more.
Our shop specialises in prestige spraying and restoration for anything with wheels; worry not, nothing leaves our shop without getting the stamp of approval from our owner Gordan McCammon</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Spray