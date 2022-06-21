import React from 'react'

const Panel = () => {
    return (
        <div>
            {/* Panel Beating Page */}
            <div className="w-full h-screen bg-rose-900 md:bg-cyan-900 xl:bg-emerald-900">
                <img src="assets/ITA_Test-84.jpg" alt="A dirty dusty workshop" className="md:hidden h-screen w-full absolute" />
                <div className="flex flex-col relative">
                    {/* Title */}
                    <div className="text-4xl md:text-6xl md:pt-[.7em] w-full flex justify-center">
                        <img src="assets/ITA_Test-64.jpg" alt="A Blah Blah Blah" className="object-cover h-[2.5em] w-full relative" />
                        <div className="absolute">
                            <h1 className="text-white">PANEL</h1>
                            <h1 className="text-orange-500 pl-[2em] md:pl-[2.4em]">BEATING</h1>
                        </div>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col mt-[2em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em] h-[80vh] ">
                        {/* Section 1*/}
                        <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start grow-0 mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 2*/}
                        <div className="bg-indigo-600 md:emerald-400 xl:slate-600 flex w-1/4 justify-start grow-0 mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="bg-purple-200 md:bg-blue-200 xl:bg-rose-100 p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panel