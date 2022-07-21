import React from 'react'
import { BsFacebook } from 'react-icons/bs'

const Address = () => {
  return (
    <div>
      {/* Address Info Section */}

      <div className="bg-address-mobile xl:bg-address-wide bg-cover text-xl  text-white flex flex-col min-h-[100vh] w-full min-w-[320px]">
        <main className=" mx-[1.3em] sm:mx-[3em]">
          <div>
            <section className="flex flex-col items-start font-semibold">
              <h2 className="text-6xl xl:text-7xl text-ITA font-bold tracking-wider w-1/2 mt-6 p-1">ADDRESS</h2>
              <p className="p-1">Our Shop is located at <br /></p>
              <p className="text-ITA p-1">Factory 3/6 Hammer Ct,<br />Hoppers Crossing, <br /> Victoria, 3029 </p>
                 {/* Google Maps Embed Container */}
              <div className= "w-full shadow-xl opacity-80">
    <iframe classname="" title="map" height="484px" width="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.382056252458!2d144.72362985124013!3d-37.87474697964192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6898250b04c87%3A0x2743d590425cc4a9!2sITA%20Panel&#39;s!5e0!3m2!1sen!2sau!4v1656925151706!5m2!1sen!2sau"></iframe>
              </div>
              <h3 className="text-3xl">SOCIAL</h3>
              <p className="text-ITA sm:w-1/3 p-1 md:ml-[6.4em]">Stay up to date with us on instagram and facebook</p>
              <div className="flex flex-row">
                {/* Social Media Icons Container */}
                {/* <button className="self-start text-white text-4xl p-3 "><BsInstagram/></button> */}
                <button aria-label="facebook link" className="self-center text-white text-[3em] p-3"><a href="https://www.facebook.com/ITA-Panels-609031302945712/"><BsFacebook/></a></button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Address