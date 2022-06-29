import React from 'react'

const Panel = () => {
    return (
        <div>
            {/* Panel Beating Page */}
            <div className="bg-panel-mobile xl:bg-panel-tablet w-full h-screen bg-cover">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="text-6xl md:text-7xl font-medium md:semibold ] w-full flex flex-col justify-center items-center bg-panel-span bg-cover bg-center h-[20vh] drop-shadow-2xl shadow-black ">
                            <h1 className="text-yellow-600 pr-[3em]">PANEL</h1>
                            <h1 className="text-white first-letter:pl-[2em] md:pl-[2.4em]">BEATING</h1>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col mt-[3em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em] h-[80vh] ">
                        {/* Section 1*/}
                        <div className="flex w-1/4 justify-start grow-0 mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 2*/}
                        <div className="flex w-1/4 justify-start grow-0 mb-[1em] mt-[3em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:self-center md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panel