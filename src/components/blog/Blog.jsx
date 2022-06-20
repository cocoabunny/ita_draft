import React from "react";

const Blog = () => {
    return (
        <div>
            {/* Blog Page */}
            <div className="w-full h-screen bg-gray-700 md:bg-red-200 xl:bg-orange-200">
                <div className="flex flex-col">
                    {/* Title */}
                    <div className="bg-lime-900 md:bg-slate-600 xl:bg-purple-200 text-5xl tracking-widest px-[2em] py-[.2em] md:py-[.5em] xl:py-[.8em] xl:mt-[2.5em] xl:mr-[12em] self-center">
                        <h1 className="text-orange-500">BEFORE</h1>
                        <h1 className="text-white pl-[3.4em] xl:pl-[2.7em] xl:mt-[.2em]">AFTER</h1>
                    </div>
                    {/* Blog Card */}
                    <div className="bg-rose-100 md:cyan-900 xl:emerald-400 w-[360px] h-[620px] md:w-[620px] xl:w-[864px] xl:h-[480px] self-center mt-[5em] xl:mt-[2em]">
                        {/* Card Title */}
                        <div className="bg-slate-800 bg-opacity-50 text-3xl mt-[2em] font-semibold px-[2.5em]">
                            <h1 className="text-white">70 SERIES</h1>
                            <h1 className="text-orange-500">LANDCRUISER</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog