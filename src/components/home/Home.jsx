import React from 'react'

const Home = () => {
    return (
        <div className="w-full h-screen bg-home-mobile bg-cover xl:bg-home-tablet  text-white">
            {/* Home Section */}

            <main className="">
                <div>
                    <div className="flex flex-col mx-8">
                        <div className="text-6xl md:text-7xl mt-[.5em] md:py-[.2em] xl:mt-[1em] mb-6 xl:mb-2 flex flex-col justify-center items-start font-semibold">
                        <h1 className="text-white">ITA</h1>
                        <h1 className="text-orange-500 pl-[1.5em] md:pt-3">PANELS</h1>
                    </div>

                        {/* Article */}
                        <div className=" xl:font-semibold">
                            <h2 className="pl-2 text-3xl w-[65vw] md:w-[30vw] md:p-2 xl:text-4xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl w-[80vw] md:ml-[10vw] xl:w-[60vw] xl:ml-[10vw] text-orange-500">Sed libero nibh, sodales eget mattis in, feugiat at leo. Aliquam sagittis, lorem vel facilisis sodales, ipsum nulla mollis erat, at fermentum orci justo et sem. Nunc suscipit tincidunt dapibus.</p>
                        </div>
                        {/* Article */}
                        <div className="mt-[1.8em] xl:mt-[.2em] xl:font-semibold">
                            <h2 className="pl-2 text-3xl w-[65vw] md:w-[30vw] md:p-2 xl:text-4xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl w-[80vw] md:ml-[10vw] xl:w-[60vw] xl:ml-[10vw] text-orange-500">Mauris vel diam at lorem bibendum commodo non at metus. Quisque vestibulum, erat ut accumsan rhoncus, enim tellus pharetra tortor, sed feugiat libero lacus vitae est. Sed ante quam, aliquet.
</p>
                        </div>
                        {/* Article */}
                        <div className="mt-[1.8em] xl:mt-[.2em] xl:font-semibold">
                            <h2 className="pl-2 text-3xl w-[65vw] md:w-[30vw] md:p-2 xl:text-4xl xl:w-[20vw]">Title</h2>
                            <p className="h-auto p-2 text-xl  w-[80vw] md:ml-[10vw] xl:w-[60vw] xl:ml-[10vw] text-orange-500">Curabitur cursus turpis euismod, blandit orci sed, laoreet arcu. Nam imperdiet tempor tempus. In in ante ullamcorper, ultrices leo sit amet, facilisis enim. Quisque erat enim, vestibulum ullamcorper sagittis sed.

</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home