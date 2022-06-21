import React from 'react'

const Home = () => {
    return (
        <div className="w-full h-screen bg-black md:bg-slate-700 xl:bg-yellow-300 text-white">
            {/* Home Section */}
            <img src="assets/ITA_Test-39.jpg" alt="Mobile Background Image: Tools n Stuff" className="md:hidden h-screen w-full absolute" />
            <main className="relative">
                <div>
                    {/* <img src="assets/vertical-home-hero.jpg" alt="tools 'n stuff" className="max-w-full h-auto md:hidden lg:hidden" /> */}
                    <div className="flex flex-col mx-8">
                        <div className="text-3xl md:4xl">
                            <h1 className="">ITA</h1><br />
                            <h1 className="text-yellow-500">Panels</h1>
                        </div>

                        {/* Article */}
                        <div className="space-y-1 mt-[em] md:space-y-8 xl:mt-[5em]">
                            <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
                        </div>
                        {/* Article */}
                        <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
                            <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
                        </div>
                        {/* Article */}
                        <div className="space-y-1 mt-[7em] md:space-y-8 xl:mt-[5em]">
                            <h2 className="pl-4 py-3 text-2xl bg-orange-300 w-[65vw] md:w-[30vw] md:p-2 xl:text-3xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl bg-cyan-400 w-[80vw] md:w-[30vw] md:ml-[10vw] xl:w-[30vw] xl:ml-[20vw]">SECTION</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home