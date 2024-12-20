import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px] rounded-2xl bg-[#20302c]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10">Available on iOS and Android</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button 
              type="button"
              title="App Store"
              icon="/images/icons8-apple-logo-50.png"
              variant="btn_white"
            />
            <Button 
              type="button"
              title="Play Store"
              icon="/images/icons8-playstore-96.png"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image src="/images/getApp-coverimg.jpg" alt="phones" width={350} height={600} className="rounded-xl shadow-2xl"/>
        </div>
      </div>
    </section>
  )
}

export default GetApp