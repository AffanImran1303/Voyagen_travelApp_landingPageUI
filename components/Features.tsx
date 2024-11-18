import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">

        <div className="z-20 flex w-full flex-col">
          <div className='relative flex justify-center'>
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col text-white bg-[#f25b08] rounded-xl p-8">
      <div className="flex items-center">
        <div className="rounded-full p-4">
          <Image src={icon} alt="map" width={64} height={64} className="border-4 border-[#c84615] rounded-full p-2" />
        </div>
        <h2 className="bold-20 lg:bold-32 capitalize">
          {title}
        </h2>
      </div>
      <p className="regular-16 mt-5 lg:mt-[30px]">
        {description}
      </p>
    </li>
  )
}

export default Features