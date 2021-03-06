import React from 'react'

const Contact = () => {
    return (
        <div>

            {/* Contact Page  */}
            <div className="bg-cover bg-contact-mobile xl:bg-contact-wide flex flex-col sm:text-xl  text-white min-h-[100vh] w-full min-w-[320px]">
                <div className="">
                    <main className="mx-[1em] sm:mx-[3em]">
                        {/* Enquiries Header */}
                        <div className="flex flex-col items-center mt-10">
                            <h1 className="text-5xl sm:text-6xl text-ITA font-bold tracking-widest self-start xl:text-7xl xl:font-semibold">ENQUIRIES</h1>
                            <p className="ml-[5em] w-3/5 my-4 md:self-start md:ml-[6em] md:w-1/3 xl:w-1/6 xl:ml-[17.8em] font-semibold">Please fill out the form below for a quote.</p>
                        </div>
                        <section>
                            {/* Email Form Section */}
                            <form className="flex flex-col items-center p-2 mt-[8em] xl:mt-[6em]" action="https://getform.io/f/1d0ed3b7-27ca-4ea8-91d3-297462433d1e" method="POST">
                                <label for="email" className="text-3xl text-ITA font-semibold tracking-wide xl:text-4xl self-start md:self-center xl:self-start md:ml-[1.5em] xl:ml-0" >EMAIL</label>
                                <br />
                                <input type="text" id="email" name="email" placeholder="example@gmail.com" className="md:self-end xl:self-start opacity-75 text-ITA font-semibold shadow-sm shadow-white w-3/5 md:w-2/5 xl:ml-[7.7em] sm:ml-[8em] md:ml-[9.6em] "></input>
                                <br />
                                <label for="enquiry" className="text-3xl text-ITA  tracking-wide font-semibold mr-[.3em] self-start xl:text-4xl">ENQUIRY INFO</label>
                                <p className="font-semibold w-3/5 md:w-2/5 xl:w-1/4 my-[2em] sm:ml-[13em] md:mr-[21.3em] xl:ml-[2.6em]">Please describe what services interest you and what vehicle you own</p>
                                <textarea type="text" id="enquiry" name="description" placeholder="Type here..." className="text-ITA font-semibold w-full xl:w-3/5 h-[280px] xl:h-[320px] shadow-sm opacity-75 shadow-white" minLength="25"></textarea>
                                {/* my-4 mt-40 md:mt-5 py-10 md:py-[6em] */}
                                <br />
                                <button aria-label="email submit button" className="bg-ITA rounded-sm xl:self-start px-7 py-1 mb-6 md:px-12 md:text-2xl md:pb-1" type="submit">Submit</button>
                            </form>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Contact