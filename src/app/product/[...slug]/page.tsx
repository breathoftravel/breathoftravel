import ImageCarousel from "@/components/sections/ImageCarousel/page";
import Breadcrumbs from "@/components/breadcrumb/page";
import ContactIndex from "@/components/products/Contact/page";
import {
  CheckIcon, ClockIcon,
  PhotoIcon,
  PlusIcon,
  ScaleIcon, TicketIcon,
  TrophyIcon, TruckIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import {Metadata} from "next";
import {IPrice, TProduct} from "@/app/search/[[...slug]]/page";

// Fetching product data (mock function, replace with actual data fetching logic)
async function fetchProducts() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/product.json');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Search product | Breath of travel',
    description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
    keywords: ["ทะเล", "ทะเลใต้", "ที่เที่ยวทะเล", "ที่เที่ยวสวย", "ที่เที่ยวหน้าร้อน", "ที่เที่ยวไทยสวยๆ", "รวมที่เที่ยว", "รวมที่เที่ยวไทย", "เกาะ", "เกาะสวยภาคใต้", "เที่ยวไทย"],
    openGraph: {
      type: "website",
      url: "https://breathoftravel.vercel.app/",
      title: 'Search product | Breath of travel',
      description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
      siteName: "Breath of travel",
      images: [{url: "https://breathoftravel.vercel.app/static/image/banner.webp",}],
    }
  }
}

export default async function Page({params}: { params: { slug: string } }) {
  const products = await fetchProducts()
  const product = products.find((product: TProduct) => product.id === params.slug);
  const pricesJsonLd = product?.prices?.map((price: IPrice) => {
    return {
      "@type": "Product",
      "image": "https://breathoftravel.vercel.app/static/image/category.webp",
      "url": "https://breathoftravel.vercel.app/search",
      "name": product.name,
      "offers": {
        "@type": "Offer",
        "priceCurrency": "THB",
        "price": price.adult.toFixed(2) || 0.00,
      }
    }
  })
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "url": "https://breathoftravel.vercel.app/search",
    "numberOfItems": 20,
    "itemListElement": pricesJsonLd
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
      />
      <div className={`py-1 bg-neutral text-neutral-content`}>
        <div className={`px-4 container mx-auto`}>
          <Breadcrumbs/>
        </div>
      </div>
      <div className={`container mx-auto`}>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            <div className={`pt-4 flex justify-between`}>
              <div className={`ml-4 text-sm`}><PhotoIcon className={`w-10 h-10`}/><span>Ticket</span></div>
              <div className={`ml-4 text-sm`}><ScaleIcon className={`w-10 h-10`}/><span>Ticket</span></div>
              <div className={`ml-4 text-sm`}><TrophyIcon className={`w-10 h-10`}/><span>Ticket</span></div>
              <div className={`ml-4 text-sm`}><TicketIcon className={`w-10 h-10`}/><span>Ticket</span></div>
              <div className={`ml-4 text-sm`}><TruckIcon className={`w-10 h-10`}/><span>Ticket</span></div>
              <div className={`ml-4 text-sm`}><ClockIcon className={`w-10 h-10`}/><span>Ticket</span></div>
            </div>
            <div className="divider"/>
            <div className={`py-4`}>
              <ImageCarousel/>
            </div>
            <div className="divider divider-start"><h2>Description</h2></div>
            <p className="indent-8">
              Whether your partner tired of being your Instagram partner or you simply like great shots of you
              together, this private Phuket Instagram tour ticks all the boxes. Hit a handful of Phuket signatures,
              eat lunch at a photo-friendly restaurant, and pose at a secret ocean-view location, with your personal
              photographer on hand to capture all your best angles. For ease, your package includes 2-way transfers
              from many southern Phuket hotels.
            </p>
            <ul className={`list-none list-inside space-y-2`}>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Admission Fees</li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Personal Photographer/Tour
                Guide
                (No professional camera provided)
              </li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Private car with A/C</li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Bottled water</li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Lunch</li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission - Big Buddha
                Phuket
              </li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission - Chaithararam
                Temple (Wat Chalong)
              </li>
              <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission - Phuket</li>
            </ul>
            <div className="divider divider-start"><h2>What is include</h2></div>
            <ul className={`list-none list-inside space-y-2`}>
              <li className={`flex`}><CheckIcon className={`w-4 h-4 self-center mr-2 text-green-600`}/> Admission Fees
              </li>
              <li className={`flex`}><CheckIcon className={`w-4 h-4 self-center mr-2 text-green-600`}/> Personal
                Photographer/Tour Guide (No professional camera provided)
              </li>
              <li className={`flex`}><CheckIcon className={`w-4 h-4 self-center mr-2 text-green-600`}/> Private car
                with
                A/C
              </li>
              <li className={`flex`}><CheckIcon className={`w-4 h-4 self-center mr-2 text-green-600`}/> Bottled water
              </li>
              <li className={`flex`}><CheckIcon className={`w-4 h-4 self-center mr-2 text-green-600`}/> Lunch</li>
              <li className={`flex`}><CheckIcon
                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Entry/Admission
                - Big Buddha Phuket
              </li>
              <li className={`flex`}><CheckIcon
                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Entry/Admission
                - Chaithararam Temple (Wat Chalong)
              </li>
              <li className={`flex`}><CheckIcon
                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Entry/Admission
                - Phuket
              </li>
            </ul>
            <div className="divider divider-start"><h2>What is exclude</h2></div>
            <ul className={`list-none list-inside space-y-2`}>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Admission Fees
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Personal
                Photographer/Tour Guide (No professional camera provided)
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Private car with
                A/C
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Bottled water
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Lunch</li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
                -
                Big Buddha Phuket
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
                -
                Chaithararam Temple (Wat Chalong)
              </li>
              <li className={`flex`}><XMarkIcon className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
                -
                Phuket
              </li>
            </ul>
            <div className="divider divider-start"><h2>Itinerary</h2></div>
            <ul className={`list-none list-inside space-y-2`}>
              <li>We provide a pickup for you directly from your hotel as long as</li>
              <li>10:00 AM – Pick up at your hotel (exact time may vary depending on your location)</li>
              <li>10:40 AM – Arrive at the Phuket Big Buddha</li>
              <li>11:40 AM – Visit Wat Chalong Temple</li>
              <li>12:40 PM – Explore Old Phuket Town</li>
              <li>1:20 PM – Enjoy Lunch at a Secret Restaurant</li>
              <li>2:40 PM – Arrive at the Rock Beach Swing for some amazing photos overlooking the ocean</li>
              <li>3:45 PM – Check Out the Amazing Views from Karon View Point</li>
              <li>4:15 PM – Return back to your hotel</li>
              <li>4:45 PM – Arrive back at your hotel (exact time may vary depending on your location)</li>
            </ul>
          </div>
          <div className="col-span-12 md:col-span-4 xl:col-span-3">
            <ContactIndex message={product?.name}/>
          </div>
        </div>
        <h1 className={`text-xl font-bold`}>Similar experiences</h1>
        <div className="carousel carousel-center p-4 space-x-4 rounded-box">
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              width={300} height={400}
              className="rounded-box" alt={`test`}/>
          </div>
        </div>
        <h1 className={`text-xl font-bold`}>More to explore in Phuket</h1>
        <div className="carousel carousel-center p-4 space-x-4 rounded-box">
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
          <div className="carousel-item">
            <Image
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              width={200} height={200}
              className="rounded-box" alt={`test`}/>
          </div>
        </div>
      </div>
    </>
  )
}
