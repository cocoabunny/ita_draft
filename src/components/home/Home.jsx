import React from 'react'

const Home = () => {
    return (
        <div className="bg-home-mobile bg-cover xl:bg-home-tablet text-white w-full min-w-[472px] min-h-screen ">
            {/* Home Section */}
            <main className="">
                <div>
                    <div className="flex flex-col mx-8">
                        <div className="flex flex-col justify-center items-start text-6xl md:text-7xl font-semibold mt-[.5em] md:py-[.2em] xl:mt-[1em] mb-6 xl:mb-2 ">
                        <h1 className="text-white">ITA</h1>
                        <h1 className="text-ITA pl-[1.5em] md:pt-3">PANELS</h1>
                    </div>
                        {/* Article */}
                        <div className="xl:font-semibold xl:mt-[6em]">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2 ">Proven Reliability</h2>
                            <p className="text-xl text-ITA h-auto w-[80vw] md:ml-[10vw] xl:w-[60vw] xl:ml-[10vw] p-2">ITA Panels has been providing quality accident care and body work to the western melbourne region for the last 15 years. 
</p>
                        </div>
                        {/* Article */}
                        <div className="xl:font-semibold mt-[1.8em] xl:mt-[.2em] 2xl:mt-[8em]">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2 ">Automotive Excellence</h2>
                            <p className="text-xl text-ITA h-auto w-[80vw] xl:w-[60vw] md:ml-[10vw] xl:ml-[10vw]  p-2 ">Our workers have a passion for working on anything with wheels, whether it’s a Holden Astra, Porsche 911, or  a Honda Goldwing; the ITA team’s dedication to excellence translates to every aspect of our craft.
</p>
                        </div>
                        {/* Article */}
                        <div className="xl:font-semibold mt-[1.8em] xl:mt-[.2em] mb-[.6em] 2xl:mt-[8em]">
                            <h2 className="text-3xl xl:text-4xl 2xl:text-5xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2  ">Quality Care</h2>
                            <p className="text-xl text-ITA h-auto w-[80vw] xl:w-[60vw] md:ml-[10vw] xl:ml-[10vw] p-2  ">So if you’ve been in an automotive accident, need general body work, or are simply interested in a respray, ITA has your back.
</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home