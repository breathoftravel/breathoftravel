import {IPrice, TProduct} from "@/app/search/[[...slug]]/page";
import Image from "next/image";
import {StarIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import {LimitString} from "@/utils/string";
import {formatCurrency} from "@/utils/currency";

export default function MinimalCard({product}: { product: TProduct }) {
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
    return (
        <Link href={`/product/${product.id}`} target={`_blank`}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />
            <div className="max-w-sm mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                    <Image
                        src={`${product.images?.first !== "" ? product.images?.first : "https://breathoftravels.com/static/image/product.webp"}`}
                        loading={`lazy`}
                        width={400}
                        height={200}
                        alt={product.name}/>
                    <div
                        className="absolute top-0 left-0 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">New
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-xs text-gray-500 font-medium">Phuket</div>
                    <div className="text-lg font-semibold">{LimitString(product?.name, 25)}</div>
                    <div className="flex items-center mt-2">
                        {4.5}
                        <StarIcon width={16} height={16} className={`ml-1 text-orange-400`}/>
                        <div className="text-sm text-gray-500 ml-2">(Coming soon)</div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-blue-500 items-center hidden md:flex">
                            <i className="fas fa-info-circle mr-1"></i>
                            <span>save upto 5% off</span>
                        </div>
                        {product.prices[0]?.promotionAdult ? (
                            <>
                                <div className="text-gray-400 line-through">
                                    {formatCurrency(product.prices[0]?.adult || 0)}
                                </div>
                                <div className="text-2xl font-bold">
                                    {formatCurrency(product.prices[0]?.promotionAdult || 0)}
                                </div>
                            </>
                        ) : (
                            <div className="text-2xl font-bold">{formatCurrency(product.prices[0]?.adult || 0)}</div>
                        )}
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{product.type.toLocaleUpperCase()}</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                    <div className="flex items-center text-gray-500 text-sm mt-4">
                        <i className="fas fa-eye mr-1"></i>
                        <span>56 people viewing now</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}