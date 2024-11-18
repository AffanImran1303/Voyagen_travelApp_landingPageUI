import Image from "next/image";
import { PEOPLE_URL } from "@/constants";

interface TravelProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const TravelSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: TravelProps) => {
  return (
    <div
      className={`h-full w-fill min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-[#f25b08] p-4 shadow-2xl">
            <Image
              src="/images/icons8-map-64.png"
              alt="map"
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
            <span className="flex -space-x-4 overflow-hidden">
                {PEOPLE_URL.map((url)=>(
                    <Image
                        className="inline-block h-10 w-10 rounded-full"
                        src={url}
                        key={url}
                        alt="person"
                        width={52}
                        height={52}
                    />
                ))}
            </span>
            <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>

        </div>
      </div>
    </div>
  );
};

const Travel = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-20 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <TravelSite
          backgroundImage="travel-bg"
          title="Travel"
          subtitle="travel site"
          peopleJoined="50+ Joined"
  
        />
        <TravelSite
          backgroundImage="travel-bg-2"
          title="Travel2"
          subtitle="travel site"
          peopleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60">
        <div className="bg-[#f25b08] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 captialize text-white">
            <strong>Your World, Your Way.</strong>
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
          Discover, Plan, Explore. Let Voyagen be your guide to unforgettable journeys. Your perfect trip, personalized.
          </p>
          <Image
            src="/images/icons8-quote-96.png"
            alt="camp-2"
            width={156}
            height={219}
            className="camp-quote opacity-20"
          />
        </div>

      </div>
    </section>
  );
};

export default Travel;
