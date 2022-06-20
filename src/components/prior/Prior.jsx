import React from "react";

const Prior = () => {
    return (
        <div>
            {/* Prior Blog Page */}
            <div className="w-full h-screen bg-gray-700 md:bg-red-200 xl:bg-orange-200">
                {/* Title Span */}
                <div className="bg-slate-400 md:bg-cyan-200 xl:bg-emerald-500 xl:w-1/3 xl:ml-[8em]">
                    <h2 className="flex flex-col text-4xl tracking-wider font-semibold px-4 py-2 md:items-center">
                        <span className="md:pr-[3em] xl:pr-[1.9em]">PAST</span>
                        <span className="text-yellow-600 ml-[1.9em] md:pl-[3em] xl:pl-[1.9em]">BLOGS</span>
                    </h2>
                </div>
                {/* Card Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 p-8 mx-auto md:my-[4em]">
                    {/* Blog Card 1 */}
                    <div className="bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 md:mx-6 h-[320px] md:h-[520px] w-[320px]">
                        <h3 className="bg-black bg-opacity-30 text-3xl px-8">
                            <span className="text-yellow-600">CAR</span><br />
                            <span>SUBMODEL 1973</span>
                        </h3>
                    </div>
                    {/* Blog Card 2 */}
                    <div className="bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 mt-4 md:mt-0 h-[320px] md:h-[520px] w-[320px]">
                        <h3 className="bg-black bg-opacity-30 text-3xl px-8">
                            <span className="text-yellow-600">CAR</span><br />
                            <span>SUBMODEL 1973</span>
                        </h3>
                    </div>
                    {/* Blog Card 3 */}
                    <div className="hidden xl:flex flex-col bg-cyan-200 md:bg-green-200 xl:bg-purple-300 py-2 text-white font-semibold mx-12 mt-4 md:mt-0 h-[520px] w-[320px]">
                        <h3 className="bg-black bg-opacity-30 text-3xl px-8">
                            <span className="text-yellow-600">CAR</span><br />
                            <span>SUBMODEL 1973</span>
                        </h3>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <button className="text-2xl md:text-3xl text-white font-semibold">LOAD MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Prior