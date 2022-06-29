import React from 'react'

const Spray = () => {
    return (
        <div>
            {/* Spraying Page */}
            <div className="w-full h-screen bg-spray-mobile bg-cover xl:bg-spray-tablet">
                <div className="flex flex-col relative">
                    {/* Title */}
                    <div className="bg-spray-span h-[20vh] bg-cover text-4xl flex flex-col justify-center items-center drop-shadow-2xl bg-center shadow-black"> 
                        <div className="absolute">
                            <h1 className="text-orange-500 text-6xl md:text-7xl py-[.6em] pt-16 tracking-widest font-semibold md:font-medium">SPRAYING</h1>
                        </div>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em] h-[80vh] ">
                        {/* Section 1*/}
                        <div className="flex w-1/4 justify-start mb-[1em]">
                            <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="p-[.2em] mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 2*/}
                        <div className="bflex w-1/4 justify-start mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 3*/}
                        <div className="flex w-1/4 justify-start mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl text-white md:text-4xl">INFO III</h2>
                        </div>
                        {/* Paragraph 3*/}
                        <div className="p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Spray