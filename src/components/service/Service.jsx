import React from 'react'

const Service = () => {
    return (
        <div>
            {/* Services Page */}
            <div className="bg-services-mobile xl:bg-services-tablet bg-cover font-semibold  w-full min-w-[320px] min-h-[100vh]">
                <div className="flex flex-col mx-[1.2em]">
                    {/* Title */}
                    <div className="text-6xl md:text-7xl text-white flex flex-col justify-center items-start pl-2 mt-[1.5em] md:py-[.2em]">
                        <h1>THE <strong className="font-semibold text-ITA">ITA</strong></h1>
                        <h1 className="pl-[2.1em] md:pl-[2.17em]">WAY</h1>
                    </div>
                    {/* Section Style 1*/}
                    <div className="w-3/5 xl:w-1/4 sm:ml-[11em] px-[1.5em] mt-[14em] md:mt-[18em] xl:mt-[7em] xl:ml-[1.7em]">
                        <h2 className="text-4xl md:text-5xl text-ITA align-center">OUR <strong className="text-white font-semibold">AIM</strong></h2>
                    </div>
                    {/* paragraph */}
                    <div className="w-4/5 xl:w-1/4 sm:text-xl mt-[.5em] ml-[1.5em] mr-[6em] xl:ml-[3em] xl:p-[1em]">
                        <p className="text-ITA">Is to provide <strong className="text-white font-semibold">every</strong> customer:
                        <ul className="text-white list-disc py-2">
                            <li className="py-2 ">Honest, unbiased, and <strong className="text-ITA font-semibold">most importantly</strong> free service quotes.</li>
                            <li>Top of the line craftsmanship, executed with <strong className="text-ITA font-semibold">obsessive attention to detail.</strong></li>
                            <li>Swift completion times for <strong className="text-ITA font-semibold">every</strong> job from our shop</li>
                        </ul>
                        </p>
                    </div>
                    {/* Section Style 2*/}
                    <div className="w-4/5 xl:w-1/4 px-[1.5em] mt-[1em] xl:ml-[16.2em] 2xl:mt-[4em]">
                        <h2 className="text-4xl md:text-5xl text-ITA align-center ">OUR <strong className="text-white font-semibold">PROMISE</strong></h2>
                    </div>
                    {/* paragraph */}
                    <div className="w-4/5 xl:w-1/2 mt-[.5em] ml-[4.5em] md:mb-12 xl:ml-[16.9em] xl:p-[1em]" >
                        <p className="text-ITA sm:text-xl mb-2">Is for you to drive away from every interaction with <strong className="text-white font-semibold">complete satisfaction</strong>, knowing that your vehicle was treated with the <strong className="text-white font-semibold">utmost care.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service