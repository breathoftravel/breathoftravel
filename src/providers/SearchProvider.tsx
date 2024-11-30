"use client";
import React, {useEffect, useState} from "react";
import {SearchContext} from "@/hooks/context/SearchContext";
import {useRouter, useSearchParams} from "next/navigation";
import {TPackage, TPackageSearchResponse} from "@/interface/product";
import {fetchProducts} from "@/utils/api";

type Props = {
  init: TPackageSearchResponse;
  children?: React.ReactNode;
};

const SearchProvider: React.FC<Props> = ({children, init}) => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Access current search parameters
  const [packages, setPackages] = useState<TPackage[]>(init.data);
  const [page, setPage] = useState<number>(init.currentPage);
  const [name, setName] = useState<string | undefined>(searchParams.get("name") || undefined);
  const [totalPages, setTotalPages] = useState<number>(init.totalPages);

  useEffect(() => {
    // Fetch products based on page and name
    async function loadProducts() {
      try {
        const response: TPackageSearchResponse = await fetchProducts(page, name);
        setPackages(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    loadProducts();

    // Update the URL query params
    const queryParams = new URLSearchParams();
    if (page > 1) queryParams.append("page", page.toString());
    if (name) queryParams.append("name", name);

    router.replace(`/search?${queryParams.toString()}`);
  }, [page, name, router]);
  return (
    <SearchContext.Provider value={{ page, setPage, packages, setPackages, name, setName,totalPages,setTotalPages }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
