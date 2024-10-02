'use client';
import GridCard from "@/components/search/GridCard";
import Filter from "@/components/search/Filter";
import {useSearchContext} from "@/hooks/context/SearchContext";
import {IPrice, TProduct} from "@/app/search/[[...slug]]/page";

export default function SearchPage() {
  const {products, page} = useSearchContext()
  const renderCards = () => {
    return products?.map((product: TProduct, index) => {
      const pricesJsonLd = product?.prices?.map((price: IPrice) => {
        return {
          "@type": "Product",
          "image": "https://breathoftravel.vercel.app/static/image/category.webp",
          "url": window.location.href,
          "name": "Brand 502",
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
        "url": window.location.href,
        "numberOfItems": 20,
        "itemListElement": pricesJsonLd
      };
      return (
        <div key={index} className={`col-span-6 lg:col-span-6 xl:col-span-4 rounded-lg`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
          />
          <GridCard product={product} />
        </div>
      )
    });
  };
  return (
    <>
      <div className="container mx-auto px-2 py-8">
        <div className="grid grid-cols-12 gap-4">
          <div className={`col-span-12 block lg:hidden`}>
            <div className="drawer">
              <input id="filterSearch" type="checkbox" className="drawer-toggle"/>
              <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="filterSearch" className="btn btn-outline btn-sm">Filter</label>
              </div>
              <div className="drawer-side">
                <Filter/>
              </div>
            </div>
          </div>
          <div className="col-span-4 xl:col-span-3 rounded-lg hidden lg:block">
            <Filter/>
          </div>
          <div className="col-span-12 md:col-span-8 xl:col-span-9">
            <div className={`grid grid-cols-12 gap-4`}>
              {renderCards()}
            </div>
            <div className={`flex items-center justify-center mt-5`}>
              <div className=" join">
                <button className="join-item btn">First</button>
                <button className={`join-item btn ${page === 1 ? 'active' : ''}`}>1</button>
                <button className="join-item btn">2</button>
                <button className="join-item btn btn-disabled">...</button>
                <button className="join-item btn">99</button>
                <button className="join-item btn">100</button>
                <button className="join-item btn">Last</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
