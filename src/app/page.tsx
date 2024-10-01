import Image from 'next/image';
import {StarIcon as StarIconFull} from "@heroicons/react/24/solid";
import {
  Battery50Icon, GlobeAltIcon,
  RocketLaunchIcon,
  StarIcon as StarIconEmpty,
  SunIcon,
  WalletIcon
} from "@heroicons/react/24/outline";
import {Metadata, ResolvingMetadata} from "next";

interface IProduct {
  id: string,
  name: string,
  description: string,
  price: number,
  promotionPrice: number,
  image: string,
  srcSet: string,
}

async function getBestIslands() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/best-islands.json');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Breath of travel',
  }
}

export default async function Home() {
  const bestIslands: IProduct[] = await getBestIslands();
  return (
    <>
      <div className="flex flex-col w-full py-14 md:p-14 items-center justify-center">
        <h1 className="text-center font-bold text-2xl leading-tight">
          Best Islands in Thailand.
        </h1>
        <h2 className="font-medium text-lg">
          Thailand Island Guide: The Most Beautiful Islands.
        </h2>
        <div className={`flex flex-wrap md:flex-nowrap gap-6 md:gap-6 py-4 justify-center md:justify-between w-[88%]`}>
          {bestIslands?.map((bestIsland) => {
            const jsonLd = {
              '@context': 'https://schema.org',
              '@type': 'Product',
              'name': bestIsland?.name,
            };
            return (
              <div key={bestIsland.id} className={`w-1/3 md:w-1/5 lg:w-1/4`}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
                <Image width={360} height={480}
                       alt={`Star rating`}
                       className="rounded-xl shadow-xl bg-white"
                       src={bestIsland.image}/>
                <h3 className={`font-bold`}>{bestIsland.name}</h3>
                <div className={`flex`}>
                  {Array(5).fill(undefined).map((_, index) => (
                    <StarIconFull key={index} className="size-5 text-yellow-400 shadow-2xl"/>
                  ))}
                </div>
                <p className={`text-sm text-gray-500 dark:text-gray-200 whitespace-normal`}>
                  {bestIsland.description}
                </p>
                <p className={`font-bold text-lg`}>{bestIsland.price}</p>
              </div>
            )
          })}
        </div>
        <div className={`flex`}>
          <button
            className="w-[180px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] hover:from-[#ff621a] hover:to-[#e73277] rounded-lg text-gray-50 font-semibold py-[10px] px-4">View
            All
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full py-14 md:p-14 items-center justify-center">
        <div className="flex justify-between items-center px-4 py-2 w-5/6">
          <h1 className="text-center font-bold text-xl leading-tight">
            Categories.
          </h1>
          <button
            className="w-[85px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] hover:from-[#ff621a] hover:to-[#e73277] rounded-lg text-gray-50 font-semibold py-1 px-2">
            View All
          </button>
        </div>
        <div className={`flex flex-wrap md:flex-nowrap gap-6 md:gap-6 py-4 justify-center md:justify-between w-[88%]`}>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image width={240} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <WalletIcon className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Islands</h3>
            </div>
          </div>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image width={240} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <Battery50Icon className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">City</h3>
            </div>
          </div>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image width={240} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <RocketLaunchIcon className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Health</h3>
            </div>
          </div>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image
              width={240}
              height={320}
              alt="Ta Chai Islands"
              className="rounded-xl shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <StarIconFull className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Adventure</h3>
            </div>
          </div>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image width={240} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <SunIcon className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Tour</h3>
            </div>
          </div>
          <div className="w-1/4 md:w-[12%] lg:w-1/6 relative">
            <Image width={240} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=240&amp;h=320&amp;q=80"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <GlobeAltIcon className="w-12 h-12 text-white shadow-2xl z-10"/>
            </div>
            <div className="absolute bottom-1 md:bottom-4 inset-x-0 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md mt-4">Night Life</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-14 md:p-14 items-center justify-center">
        <div className="flex justify-between items-center px-4 py-2 w-5/6">
          <h1 className="text-center font-bold text-xl leading-tight">
            Popular destinations.
          </h1>
          <button
            className="w-[85px] bg-gradient-to-r from-[#ff874f] to-[#ec5e95] hover:from-[#ff621a] hover:to-[#e73277] rounded-lg text-gray-50 font-semibold py-1 px-2">
            View All
          </button>
        </div>
        <div className={`flex flex-wrap gap-2 md:gap-6 py-4 justify-center `}>
          <div className="w-[80%] md:w-[91%] lg:w-full relative">
            <Image width={1280} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1280&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Phuket</h3>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap gap-2 md:gap-6 py-4 justify-center `}>
          <div className="w-[39%] md:w-[44%] lg:w-[48%] relative">
            <Image width={640} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=640&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Hong Kong</h3>
            </div>
          </div>
          <div className="w-[39%] md:w-[44%] lg:w-[48%] relative">
            <Image width={640} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=640&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">London</h3>
            </div>
          </div>
        </div>
        <div className={`flex flex-wrap gap-2 md:gap-6 py-4 justify-center `}>
          <div className="w-[25.33%] md:w-[30.3%] lg:w-[31%] relative">
            <Image
              width={420}
              height={420}
              alt="Ta Chai Islands"
              className="rounded-xl shadow-xl bg-white"
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"
            />
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Bali</h3>
            </div>
          </div>
          <div className="w-[25.33%] md:w-[30.3%] lg:w-[31%] relative">
            <Image width={420} height={420} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Tokyo</h3>
            </div>
          </div>
          <div className="w-[25.33%] md:w-[30.3%] lg:w-[31%] relative">
            <Image width={420} height={420} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md mt-4">Hokkaido</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
