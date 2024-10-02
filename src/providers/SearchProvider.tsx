"use client";
import React, {useEffect, useState} from "react";
import {SearchContext} from "@/hooks/context/SearchContext";
import {TProduct} from "@/app/search/[[...slug]]/page";
import {useRouter} from "next/navigation";

type Props = {
  init: Init;
  children?: React.ReactNode;
};

type Init = {
  page: number;
  products: TProduct[];
}

async function fetchProducts() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/product.json');
  return res.json();
}

const SearchProvider: React.FC<Props> = ({children, init}) => {
  const router = useRouter();
  const [products, setProducts] = useState<TProduct[]>(init.products);
  const [page, setPage] = useState<number>(init.page);
  useEffect(() => {
    const start = page === 1 ? 0 : (page - 1) * 15;
    const end = page === 1 ? 15 : page * 15;
    fetchProducts().then((products: TProduct[]) => setProducts(products.slice(start, end)));
    if (page > 1) {
      router.replace(`/search?page=${page}`);
    } else {
      router.replace(`/search`);
    }
  }, [page]);
  return (
    <SearchContext.Provider value={{page, setPage, products, setProducts}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
