import React from 'react'
import { BsInstagram, BsFacebook } from 'react-icons/bs'

const Address = () => {
  return (
    <div>
      {/* Address Info Section */}

      <div className="h-screen w-full flex flex-col text-white bg-cover bg-address-mobile xl:bg-address-tablet">
        <main className="mx-[3em] relative">
          <div>
            <section className="flex flex-col items-start font-semibold">
              <h2 className="text-6xl xl:7xl text-yellow-600 font-bold tracking-wider bg-yellow-200 w-1/2 mt-6 p-1">ADDRESS</h2>
              <p className="p-1 bg-cyan-300">Our Shop is located at <br /></p>
              <p className="text-yellow-600 bg-yellow-200 p-1">Factory 1/3 Hammer Ct,<br />Hoppers Crossing, <br /> Victoria, 3029 </p>
              <div className="bg-pink-300 w-full py-[12em] mt-[4em] mb-8">
                
                {/* Google Maps Embed Container */}

              </div>
              <h3 className="text-3xl bg-yellow-200">SOCIAL</h3>
              <p className="w-1/3 p-1 text-yellow-600 bg-cyan-200 md:ml-[6.4em]">Stay up to date with us on instagram and facebook</p>
              <div className="flex flex-row">
                {/* Social Media Icons Container */}
                <button className="bg-white p-3 self-start text-yellow-600 text-4xl"><BsInstagram/></button>
                <button className="bg-white p-3 mx-3 self-center text-yellow-600 text-4xl"><BsFacebook/></button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Address