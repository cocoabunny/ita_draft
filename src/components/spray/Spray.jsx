import React from 'react'

const Spray = () => {
    return (
        <div>
            {/* Spraying Page */}
            <div className="bg-spray-mobile xl:bg-spray-tablet bg-cover w-full min-w-[472px] min-h-screen ">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-spray-span bg-cover bg-center flex flex-col justify-center items-center text-4xl drop-shadow-2xl shadow-white h-[20vh]"> 
                        <div className="">
                            <h1 className="text-ITA text-6xl md:text-7xl tracking-widest font-semibold md:font-medium py-[.6em] pt-16 ">SPRAYING</h1>
                        </div>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col h-[80vh] mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md:mt-[3em] xl:mt-[4em]">
                         {/* Title 1*/}
                         <div className="flex justify-start w-14/5 mb-[1em] mt-[2em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-4xl text-white font-semibold ">Final Touch</h2>
                        </div>
                        {/* Article 1*/}
                        <div className="mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em]">
                            <p className="text-ITA font-semibold">ITA's Spraying team provides spraying and detailing services that render the vehicle's coat indistinguishable from the factory coat. Our shop in Hoppers Crossing features a fully functioning Australian made Seetal spraying booth.
</p>
                        </div>
                        {/* Title 2*/}
                        <div className="flex justify-start w-4/5 mb-[1em] mt-[5em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-4xl text-white font-semibold ">SPRAYING SERVICES</h2>
                        </div>
                        {/* Article 2*/}
                        <div className="mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em] ">
                            <p className="text-ITA font-semibold">At ITA, we can respray and fit: Tubs, Ute Trays, Tray Tool Boxes and much more.
ITA specialises in prestige spraying and restoration for anything with wheels
Nothing leaves our shop without getting the stamp of approval from our Owner Gordon McCammon</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Spray