import React, { useContext } from "react";
import {TPackage} from "@/interface/product";

export interface SearchContextContextInterface {
  page: number;
  setPage: (page: number) => void;
  packages: TPackage[];
  setPackages: (packages: TPackage[]) => void;
  name?: string,
  setName: (name: string) => void;
  totalPages: number;
  setTotalPages: (totalPage: number) => void;
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
