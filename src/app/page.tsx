import Image from 'next/image';
import {StarIcon as StarIconFull} from "@heroicons/react/24/solid";
import {
  Battery50Icon, GlobeAltIcon,
  RocketLaunchIcon,
  SunIcon,
  WalletIcon
} from "@heroicons/react/24/outline";
import {Metadata} from "next";
import {randomHalfNumber, randomNumber} from "@/utils/number";
import {generateISO8601Date} from "@/utils/date";

interface IProduct {
  id: string,
  name: string,
  description: string,
  price: number,
  promotionPrice: number,
  image: string,
  srcSet: string,
}

interface ICategory {
  id: string,
  name: string,
  slug: string,
  icon: string,
  image: string,
  srcSet: string,
}

async function getBestIslands() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/best-islands.json');
  return res.json();
}

async function getCategories() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/categories.json');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Breath of travel',
    description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
    keywords: ["ทะเล", "ทะเลใต้", "ที่เที่ยวทะเล", "ที่เที่ยวสวย", "ที่เที่ยวหน้าร้อน", "ที่เที่ยวไทยสวยๆ", "รวมที่เที่ยว", "รวมที่เที่ยวไทย", "เกาะ", "เกาะสวยภาคใต้", "เที่ยวไทย"],
    openGraph: {
      type: "website",
      url: "https://breathoftravel.vercel.app/",
      title: "Breath of travel",
      description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
      siteName: "Breath of travel",
      images: [{url: "https://breathoftravel.vercel.app/static/image/banner.webp",}],
    }
  }
}

export default async function Home() {
  const bestIslands: IProduct[] = await getBestIslands();
  const categories: ICategory[] = await getCategories();
  return (
    <>
      <div className="flex flex-col w-full py-14 md:p-14 items-center justify-center">
        <h1 className="text-center font-bold text-2xl leading-tight">
          Best Islands in Thailand.
        </h1>
        <h2 className="font-semibold text-base px-2">
          Thailand Island Guide: The Most Beautiful Islands.
        </h2>
        <div className={`flex flex-wrap md:flex-nowrap gap-6 py-4 justify-center md:justify-between`}>
          {bestIslands?.map((bestIsland) => {
            const jsonLd = {
              '@context': 'https://schema.org',
              '@type': 'Product',
              'productId': bestIsland.id,
              'sku': bestIsland.id,
              'name': bestIsland?.name,
              'keywords': bestIsland?.name + ' เกาะในไทย เที่ยวไทย',
              'image': bestIsland?.image,
              'review': {},
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": randomHalfNumber(5),
                "reviewCount": randomNumber(20),
                "bestRating": 5
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "price": bestIsland.price,
                "priceCurrency": "THB",
                "priceValidUntil": generateISO8601Date('2024-09-02')
              },
            };
            return (
              <div key={bestIsland.id} className={`w-5/12 md:w-1/5 lg:w-1/4`}>
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
                />
                <Image width={320} height={480}
                       alt={bestIsland.name}
                       className="rounded-xl shadow-xl bg-white"
                       src={bestIsland.image}/>
                <h3 className={`font-bold`}>{bestIsland.name}</h3>
                <div className={`flex`}>
                  {Array(5).fill(undefined).map((_, index) => (
                    <StarIconFull key={index} className="size-5 text-yellow-400 shadow-2xl"/>
                  ))}
                </div>
                <p className={`text-sm whitespace-normal`}>
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
        <div className={`flex flex-wrap md:flex-nowrap gap-6 md:gap-6 py-4 justify-center md:justify-between`}>
          {categories?.map((category) => {
            let icon;
            switch (category.slug) {
              case 'islands':
                icon = <WalletIcon className="w-12 h-12 text-rose-500 shadow-2xl z-10 drop-shadow-2xl"/>
                break
              case 'city':
                icon = <Battery50Icon className="w-12 h-12 text-rose-500 shadow-2xl z-10"/>
                break
              case 'health':
                icon = <RocketLaunchIcon className="w-12 h-12 text-rose-500 shadow-2xl z-10"/>
                break
              case 'adventure':
                icon = <StarIconFull className="w-12 h-12 text-rose-500 shadow-2xl z-10"/>
                break
              case 'tour':
                icon = <SunIcon className="w-12 h-12 text-rose-500 shadow-2xl z-10"/>
                break
              case 'night-life':
                icon = <GlobeAltIcon className="w-12 h-12 text-rose-500 shadow-2xl z-10"/>
                break
            }
            return (
              <div key={category.id} className="w-1/4 md:w-1/6 relative">
                <Image width={240} height={320} alt={category.name}
                       className="rounded-xl shadow-xl bg-white"
                       src={category.image}/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  {icon}
                </div>
                <div
                  className="absolute bottom-1 md:bottom-3 inset-x-0 flex flex-col items-center justify-center  bg-gray-100 drop-shadow-2xl px-2 opacity-80">
                  <h3 className="font-xs font-bold text-nowrap">{category.name}</h3>
                </div>
              </div>
            )
          })}
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
        <div className={`flex flex-nowrap py-2 justify-center `}>
          <div className="w-10/12 md:w-11/12 lg:w-full relative mx-2">
            <Image width={1280} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1280&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Phuket</h3>
            </div>
          </div>
        </div>
        <div className={`flex flex-nowrap py-2 justify-center `}>
          <div className="w-2/5 md:w-5/12 lg:w-6/12 relative m-1 md:m-2">
            <Image width={640} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=640&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Hong Kong</h3>
            </div>
          </div>
          <div className="w-2/5 md:w-5/12 lg:w-6/12 relative m-1 md:m-2">
            <Image width={640} height={320} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=640&amp;h=320&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">London</h3>
            </div>
          </div>
        </div>
        <div className={`flex flex-nowrap gap-0 md:gap-2 py-2 justify-center `}>
          <div className="w-3/12 md:w-1/3 relative m-2">
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
          <div className="w-3/12 md:w-1/3 relative m-2">
            <Image width={420} height={420} alt={`Star rating`} className="rounded-xl shadow-xl bg-white"
                   src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=420&amp;h=420&amp;q=80"/>
            <div className="absolute bottom-1 md:bottom-4 left-1 flex flex-col items-center justify-center">
              <h3 className="font-xs font-bold text-nowrap text-white text-shadow-md">Tokyo</h3>
            </div>
          </div>
          <div className="w-3/12 md:w-1/3 relative m-2">
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
