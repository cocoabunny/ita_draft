import React from 'react'

const Spray = () => {
    return (
        <div>
            {/* Spraying Page */}
            <div className="bg-spray-mobile xl:bg-spray-tablet bg-cover w-full min-w-[472px] min-h-screen ">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-spray-span bg-cover bg-center flex flex-col justify-center items-center text-4xl drop-shadow-2xl shadow-black h-[20vh]"> 
                        <div className="">
                            <h1 className="text-ITA text-6xl md:text-7xl tracking-widest font-semibold md:font-medium py-[.6em] pt-16 ">SPRAYING</h1>
                        </div>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col h-[80vh] mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md:mt-[3em] xl:mt-[4em]">
                        {/* Section 1*/}
                        <div className="flex justify-start w-1/4 mb-[1em]">
                            <h2 className="text-3xl md:text-4xl text-black font-semibold">INFO I</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="mx-[5.1em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em]">
                            <p className="text-ITA">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 2*/}
                        <div className="flex justify-start w-1/4 mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-4xl text-black font-semibold ">INFO II</h2>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em] p-[.2em] ">
                            <p className="text-ITA">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 3*/}
                        <div className="flex justify-start w-1/4 mb-[1em] mt-[6em] md:mt-[6em] xl:mt-[6em]">
                            <h2 className="text-3xl md:text-4xl text-black font-semibold ">INFO III</h2>
                        </div>
                        {/* Paragraph 3*/}
                        <div className="p-[.2em] mx-[4em] md:mx-[5.1em] md:mt-[1em] md:ml-[6.1em]">
                            <p className="text-ITA">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Spray