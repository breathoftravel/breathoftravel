'use client';
import Filter from "@/components/search/Filter";
import { useSearchContext } from "@/hooks/context/SearchContext";
import { Suspense } from "react";
import MinimalCard from "@/components/search/MinimalCard";
import TagLabel from "@/components/search/filter/TagLabel";
import {TPackage} from "@/interface/product";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {Pagination} from "@/components/pagination";

export default function SearchPage() {
    const { packages, page, setPage, totalPages } = useSearchContext()
    const renderCards = () => {
        return packages?.map((data: TPackage) => {
            return (
                <div key={data.id} className={`col-span-6 lg:col-span-6 xl:col-span-4 rounded-lg`}>
                    <MinimalCard data={data} />
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
                            <input id="filterSearch" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="filterSearch" className="btn btn-outline btn-sm">Filter</label>
                            </div>
                            <div className="drawer-side">
                                <Filter />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 xl:col-span-3 rounded-lg hidden lg:block">
                        <Filter />
                    </div>
                    <div className="col-span-12 md:col-span-8 xl:col-span-9">
                        <div className={`grid grid-cols-1 gap-4 `}>
                            <TagLabel />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
                            <div className="flex items-center space-x-4">
                                <span className="font-semibold text-gray-700">Price:</span>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            Sort Price <ChevronDownIcon className="ml-2 h-4 w-4" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>Low to High</DropdownMenuItem>
                                        <DropdownMenuItem>High to Low</DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        Sort By <ChevronDownIcon className="ml-2 h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>Relevance</DropdownMenuItem>
                                    <DropdownMenuItem>Newest</DropdownMenuItem>
                                    <DropdownMenuItem>Popularity</DropdownMenuItem>
                                    <DropdownMenuItem>Rating</DropdownMenuItem>
                                    <DropdownMenuItem>Discount</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className={`grid grid-cols-12 gap-4`}>
                            <Suspense fallback={<>Loading</>}>
                                {renderCards()}
                            </Suspense>
                        </div>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={page}
                            onPageChange={(page: number) => setPage(page)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
