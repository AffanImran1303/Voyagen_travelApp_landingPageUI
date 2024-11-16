import React from 'react'
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"/>
      
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        {/* <Image
        src="/images/icons8-around-the-globe-48.png"
        alt="globe"
        width={50}
        height={50}
        className="absolute left-[-5px] w-10 lg:w-[50px]"
        /> */}
        <h1 className="bold-52 lg:bold-88">Voyagen, Your Travel Partner</h1>
        <p className="regular-16 mt-8 text-gray-30 xl:max-w-[520px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, recusandae?</p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap">
            {Array(5).fill(1).map((_,index)=>(
              <Image
              src="/images/icons8-star-96.png"
              alt=""
              key={index}
              width={24}
              height={24}/>
            ))}
          </div>
          <p className="bold-16 lg:bold-20">100k
            <span className="regular-16 lg:regular-20 ml-1"> Positive Reviews</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
          type="button"
          title="Download App"
          variant='btn_primary'
          />
          <Button
          type="button"
          title="How Voyagen Works?"
          variant='btn_secondary'
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-[#20302c] px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-[#F5F5F5]">Location</p>
              <Image src="/images/icons8-close-24.png" alt="close" width={24} height={24}/>
            </div>
            <p className="bold-20 text-white">Karachi, Sindh, Pakistan</p>
          </div>
            <div className="flexBetween mt-4">
              <div className="flex flex-col">
                <p className="regular-16 block text-[#F5F5F5]">Distance</p>
                <p className="bold-20 text-white">100 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-[#F5F5F5]">Elevation</p>
                <p className="bold-20 text-white">1 km</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero