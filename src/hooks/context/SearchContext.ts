import React, { useContext } from "react";
import {TProduct} from "@/app/search/[[...slug]]/page";


export interface SearchContextContextInterface {
  page: number;
  setPage: (page: number) => void;
  products: TProduct[];
  setProducts: (products: TProduct[]) => void;
}

export const SearchContext = React.createContext<SearchContextContextInterface| undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext)
  if(!context) {
    throw new Error(
      "useSearchContext must be used inside a Search.Provider"
    )
  }
  return context
};
