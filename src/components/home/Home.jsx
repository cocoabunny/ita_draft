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
                        <h1 className="text-orange-500 pl-[1.5em] md:pt-3">PANELS</h1>
                    </div>

                        {/* Article */}
                        <div className="xl:font-semibold">
                            <h2 className="text-3xl xl:text-4xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2 ">Title</h2>
                            <p className="text-xl text-orange-500 h-auto w-[80vw] md:ml-[10vw] xl:w-[60vw] xl:ml-[10vw] p-2">Sed libero nibh, sodales eget mattis in, feugiat at leo. Aliquam sagittis, lorem vel facilisis sodales, ipsum nulla mollis erat, at fermentum orci justo et sem. Nunc suscipit tincidunt dapibus.</p>
                        </div>
                        {/* Article */}
                        <div className="xl:font-semibold mt-[1.8em] xl:mt-[.2em] ">
                            <h2 className="text-3xl xl:text-4xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2 ">Title</h2>
                            <p className="text-xl text-orange-500 h-auto w-[80vw] xl:w-[60vw] md:ml-[10vw] xl:ml-[10vw]  p-2 ">Mauris vel diam at lorem bibendum commodo non at metus. Quisque vestibulum, erat ut accumsan rhoncus, enim tellus pharetra tortor, sed feugiat libero lacus vitae est. Sed ante quam, aliquet.
</p>
                        </div>
                        {/* Article */}
                        <div className="xl:font-semibold mt-[1.8em] xl:mt-[.2em]">
                            <h2 className="text-3xl xl:text-4xl w-[65vw] md:w-[30vw] xl:w-[20vw] md:p-2 pl-2  ">Title</h2>
                            <p className="text-xl text-orange-500 h-auto w-[80vw] xl:w-[60vw] md:ml-[10vw] xl:ml-[10vw] p-2  ">Curabitur cursus turpis euismod, blandit orci sed, laoreet arcu. Nam imperdiet tempor tempus. In in ante ullamcorper, ultrices leo sit amet, facilisis enim. Quisque erat enim, vestibulum ullamcorper sagittis sed.
</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home