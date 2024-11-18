import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        {/* <Image src="/camp.svg" alt="camp" width={50} height={50} /> */}
        <p className="uppercase regular-18 -mt-1 mb-3">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Explore the world, your way.</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Voyagen empowers you to craft personalized travel experiences. Our intuitive app helps you navigate bustling cities and serene landscapes, offering seamless booking for flights, hotels, and activities. Benefit from expert recommendations, offline maps for uninterrupted exploration, and real-time updates for informed decision-making.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/images/guide-bg.jpg"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white text-[#20302c] py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/images/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16">Destination</p>
                <p className="bold-16">32 min</p>
              </div>
              <p className="bold-20 mt-2">Bali, Indonesia</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16">Start track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Jakarta, Indonesia</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide