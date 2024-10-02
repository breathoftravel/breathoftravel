"use client";
import React, { useState } from "react";
import {SearchContext} from "@/hooks/context/SearchContext";
import {TProduct} from "@/app/search/[[...slug]]/page";

type Props = {
  init: Init;
  children?: React.ReactNode;
};

type Init = {
  page: number;
  products: TProduct[];
}

const SearchProvider: React.FC<Props> = ({ children,init }) => {
  const [products, setProducts] = useState<TProduct[]>(init.products);
  const [page, setPage] = useState<number>(init.page);
  return (
    <SearchContext.Provider value={{page, setPage, products, setProducts}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
