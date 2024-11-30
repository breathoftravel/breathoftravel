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
import {Metadata, ResolvingMetadata} from "next";
import {IPrice, TProduct} from "@/interface/product";

// Fetching product data (mock function, replace with actual data fetching logic)
async function fetchProducts() {
    const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/product.json');
    return res.json();
}

type Props = {
    params: { slug: string[] }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    {params, searchParams}: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const products = await fetchProducts()
    const product = products.find((product: TProduct) => product.id === params?.slug[0]);
    const previousImages = (await parent).openGraph?.images || []
    const description = Array.isArray(searchParams) ? searchParams : [];
    return {
        title: `${product.name} | Breath of travel`,
        description: `สัมผัสประสบการณ์ดำน้ำกับ ${product.name} ของเรา`,
        keywords: ["ทะเล", "ทะเลใต้", "ที่เที่ยวทะเล", "ที่เที่ยวสวย", "ที่เที่ยวหน้าร้อน", "ที่เที่ยวไทยสวยๆ", "รวมที่เที่ยว", "รวมที่เที่ยวไทย", "เกาะ", "เกาะสวยภาคใต้", "เที่ยวไทย", ...description],
        openGraph: {
            type: "website",
            url: "https://breathoftravels.com/",
            title: `${product.name} | Breath of travel`,
            description: `สัมผัสประสบการณ์ดำน้ำกับ ${product.name} ของเรา`,
            siteName: "Breath of travel",
            images: [{url: product.images?.first !== "" ? product.images?.first : "https://breathoftravels.com/static/image/banner.webp"}, ...previousImages],
        }
    }
}

interface IDisplayImage {
    src: string
    alt: string
}

export default async function Page({params}: { params: { slug: string } }) {
    const products = await fetchProducts()
    const product = products.find((product: TProduct) => product.id === params.slug[0]);
    const pricesJsonLd = product?.prices?.map((price: IPrice) => {
        return {
            "@type": "Product",
            "image": product.images?.first !== "" ? product.images?.first : "https://breathoftravels.com/static/image/category.webp",
            "url": "https://breathoftravels.com/search",
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
        "url": "https://breathoftravels.com/search",
        "numberOfItems": 20,
        "itemListElement": pricesJsonLd
    };
    const images: IDisplayImage[] = product.images?.landscape.map((image: string) => {
        return {
            src: image,
            alt: product.name
        }
    }) || [{src: '', alt: product.name}];
    const displayImages = images.length >= 3 ? images.slice(0, 3) : images;

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
            <div className={`container mx-auto px-10 md:px-24`}>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-8 xl:col-span-9">
                        <div className={`pt-4 flex justify-between`}>
                            <div className={`ml-4 text-sm`}><PhotoIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                            <div className={`ml-4 text-sm`}><ScaleIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                            <div className={`ml-4 text-sm`}><TrophyIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                            <div className={`ml-4 text-sm`}><TicketIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                            <div className={`ml-4 text-sm`}><TruckIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                            <div className={`ml-4 text-sm`}><ClockIcon className={`w-10 h-10`}/><span>Ticket</span>
                            </div>
                        </div>
                        <div className="divider"/>
                        <div className="grid grid-rows-2 grid-flow-col gap-4 py-4">
                            {displayImages.map((image: IDisplayImage, index) => (
                                <div key={index} className={index === 0 ? "row-span-2 col-span-2" : ""}>
                                    <Image
                                        src={image.src !== "" ? image.src : "https://breathoftravels.com/static/image/category.webp"}
                                        alt={image.alt}
                                        width={index === 0 ? 940 : 470}
                                        height={index === 0 ? 788 : 394}
                                        priority={index === 0}
                                        loading={index === 0 ? undefined : 'lazy'}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="divider divider-start"><h2>Description</h2></div>
                        <p className="indent-8">
                            {product.description}
                        </p>
                        <ul className={`list-none list-inside space-y-2`}>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Admission Fees
                            </li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Personal
                                Photographer/Tour
                                Guide
                                (No professional camera provided)
                            </li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Private car with
                                A/C
                            </li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Bottled water</li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Lunch</li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission -
                                Big Buddha
                                Phuket
                            </li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission -
                                Chaithararam
                                Temple (Wat Chalong)
                            </li>
                            <li className={`flex`}><PlusIcon className={`w-4 h-4 self-center mr-2`}/> Entry/Admission -
                                Phuket
                            </li>
                        </ul>
                        <div className="divider divider-start"><h2>What is include</h2></div>
                        <ul className={`list-none list-inside space-y-2`}>
                            <li className={`flex`}><CheckIcon
                                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Admission Fees
                            </li>
                            <li className={`flex`}><CheckIcon
                                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Personal
                                Photographer/Tour Guide (No professional camera provided)
                            </li>
                            <li className={`flex`}><CheckIcon
                                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Private car
                                with
                                A/C
                            </li>
                            <li className={`flex`}><CheckIcon
                                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Bottled water
                            </li>
                            <li className={`flex`}><CheckIcon
                                className={`w-4 h-4 self-center mr-2 text-green-600`}/> Lunch
                            </li>
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
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Admission Fees
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Personal
                                Photographer/Tour Guide (No professional camera provided)
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Private car with
                                A/C
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Bottled water
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Lunch
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
                                -
                                Big Buddha Phuket
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
                                -
                                Chaithararam Temple (Wat Chalong)
                            </li>
                            <li className={`flex`}><XMarkIcon
                                className={`w-4 h-4 self-center mr-2 text-red-600`}/> Entry/Admission
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
                            <li>2:40 PM – Arrive at the Rock Beach Swing for some amazing photos overlooking the ocean
                            </li>
                            <li>3:45 PM – Check Out the Amazing Views from Karon View Point</li>
                            <li>4:15 PM – Return back to your hotel</li>
                            <li>4:45 PM – Arrive back at your hotel (exact time may vary depending on your location)
                            </li>
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
                            priority
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={300} height={400}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image loading={'lazy'}
                               src="https://breathoftravels.com/static/image/category.webp"
                               width={300} height={400}
                               className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">

                        <Image loading={'lazy'}
                               src="https://breathoftravels.com/static/image/category.webp"
                               width={300} height={400}
                               className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">

                        <Image loading={'lazy'}
                               src="https://breathoftravels.com/static/image/category.webp"
                               width={300} height={400}
                               className="rounded-box" alt={`test`}/>
                    </div>
                </div>
                <h1 className={`text-xl font-bold`}>More to explore in Phuket</h1>
                <div className="carousel carousel-center p-4 space-x-4 rounded-box">
                    <div className="carousel-item">
                        <Image
                            priority
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image
                            loading={'lazy'}
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image
                            loading={'lazy'}
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image
                            loading={'lazy'}
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image
                            loading={'lazy'}
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                    <div className="carousel-item">
                        <Image
                            loading={'lazy'}
                            src="https://breathoftravels.com/static/image/category.webp"
                            width={200} height={200}
                            className="rounded-box" alt={`test`}/>
                    </div>
                </div>
            </div>
        </>
    )
}
