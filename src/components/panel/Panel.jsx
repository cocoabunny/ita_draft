import React from 'react'

const Panel = () => {
    return (
        <div>
            {/* Panel Beating Page */}
            <div className="bg-panel-mobile xl:bg-panel-tablet bg-cover w-full min-w-[472px] min-h-screen">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-panel-span bg-cover bg-center flex flex-col justify-center items-center text-6xl md:text-7xl font-medium md:semibold drop-shadow-2xl shadow-black w-full h-[20vh]">
                            <h1 className="text-orange-500 pr-[3em]">PANEL</h1>
                            <h1 className="text-white pl-[2em] md:pl-[2.4em]">BEATING</h1>
                    </div>
                    {/* Container */}
                    <div className="flex flex-col h-[80vh] mt-[3em] ml-[2em] md:ml-[3em] xl:ml-[4em] md md:mt-[3em] xl:mt-[4em]">
                        {/* Section 1*/}
                        <div className="flex justify-start grow-0 w-1/4  mb-[1em] md:self-center md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO I</h2>
                        </div>
                        {/* Paragraph 1*/}
                        <div className="md:self-center md:w-2/5 p-[.2em] mx-[4em] mt-[2em] md:px-[2em] md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                        {/* Section 2*/}
                        <div className="flex justify-start md:self-center grow-0 w-1/4 mb-[1em] mt-[3em] md:ml-[4em] md:mt-[6em] xl:ml-[11.4em] ">
                            <h2 className="text-3xl text-white md:text-4xl">INFO II</h2>
                        </div>
                        {/* Paragraph 2*/}
                        <div className="md:self-center p-[.2em] mx-[4em] mt-[2em] md:w-2/5 md:px-[2em] md:ml-[18em] xl:ml-[33em]">
                            <p className="text-orange-500">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Panel