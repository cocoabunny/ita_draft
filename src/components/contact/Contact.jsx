import React from 'react'

const Contact = () => {
    return (
        <div>

            {/* Contact Page  */}
            <div className="h-screen w-full flex flex-col text-white md:bg-orange-200 xl:bg-green-200">
                <img src="assets/ITA_Test-16.jpg" alt="classic 1950's car" className="md:hidden h-screen w-full  relative" />
                <div className="absolute">
                    <main className="mx-[3em]">
                        {/* Enquiries Header */}
                        <div className="flex flex-col items-center mt-10">
                            <h1 className="bg-blue-400 text-4xl text-yellow-600 font-bold tracking-widest self-start xl:text-5xl xl:font-semibold">ENQUIRIES</h1>
                            <p className="bg-cyan-200 ml-[13em] w-3/5 my-4 md:self-start md:ml-[6em] md:w-1/3 xl:w-1/6 xl:ml-[17.8em]">Please fill out the form below for a quote.</p>
                        </div>
                        <section>
                            {/* Email Form Section */}
                            <form className="flex flex-col items-center p-2 mt-[8em] xl:mt-[6em]">
                                <label for="email" className="text-3xl text-yellow-600 font-semibold bg-emerald-200 tracking-wide self-start md:self-center md:ml-[1.5em] xl:text-4xl xl:self-start xl:ml-0" >EMAIL</label>
                                <br />
                                <input type="text" id="email" className="ml-[8em] md:ml-[9.6em] w-3/5 md:w-2/5 md:self-end xl:self-start xl:ml-[7.7em]"></input>
                                <br />
                                <label for="enquiry" className="text-3xl text-yellow-600  bg-emerald-200 tracking-wide font-semibold mr-[.3em] self-start xl:text-4xl">ENQUIRY INFO</label>
                                <p className="bg-blue-400 w-3/5 ml-[13em] md:mr-[21.3em] md:w-2/5 xl:w-1/4 xl:ml-[2.6em]">Please describe what services interest you and what vehicle you own</p>
                                <textarea type="text" id="enquiry" className="my-4 py-10 md:py-[8em] w-full self-start xl:w-1/2"></textarea>
                                <br />
                                <button className="bg-yellow-600 rounded px-7 py-1 md:px-12 md:text-2xl md:pb-1 xl:self-start">Submit</button>
                            </form>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Contact