'use client';
import Filter from "@/components/search/Filter";
import {useSearchContext} from "@/hooks/context/SearchContext";
import {TProduct} from "@/app/search/[[...slug]]/page";
import Pagination from "@/components/pagination";
import {Suspense} from "react";
import MinimalCard from "@/components/search/MinimalCard";
import TagLabel from "@/components/search/filter/TagLabel";

export default function SearchPage() {
    const {products, page, setPage} = useSearchContext()
    const renderCards = () => {
        return products?.map((product: TProduct) => {
            return (
                <div key={product.id} className={`col-span-6 lg:col-span-6 xl:col-span-4 rounded-lg`}>
                    <MinimalCard product={product}/>
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
                        <div className={`grid grid-cols-1 gap-4 `}>
                            <TagLabel />
                        </div>
                        <div className={`grid grid-cols-1 gap-4 justify-items-end`}>
                            <div className="flex space-x-8 text-gray-700">
                                <div className="flex items-center space-x-4">
                                    <span className="font-bold">PRICE</span>
                                    <span className="text-red-500">Low to High</span>
                                    <span className="text-gray-400">|</span>
                                    <span className="text-gray-400">High to Low</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <span className="font-bold">SORT BY</span>
                                    <div className="relative dropdown">
                                        <span className="text-red-500 cursor-pointer">Relevance <i
                                            className="fas fa-caret-down"></i></span>
                                        <div
                                            className="dropdown-content mt-2 py-2 w-40 bg-white border border-gray-200 rounded shadow-lg">
                                            <a href="#"
                                               className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Newest</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Popularity</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Relevance</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Rating</a>
                                            <a href="#"
                                               className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Discount</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`grid grid-cols-12 gap-4`}>
                            <Suspense fallback={<>Loading</>}>
                                {renderCards()}
                            </Suspense>
                        </div>
                        <Pagination
                            totalItems={20}
                            itemsPerPage={15}
                            currentPage={page}
                            onPageChange={(page: number) => setPage(page)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
