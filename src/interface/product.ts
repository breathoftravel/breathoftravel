export interface ICategory {
  id: string,
  name: string,
  slug: string,
  icon: string,
  image: string,
  srcSet: string,
}

export type TProduct = {
  "id": string,
  nameEn: string;
  nameTh: string | null;
  descriptionEn: string | null;
  descriptionTh: string | null;
  type: string;
  typeEn: string;
  typeTh: string | null;
  itineraryEn: string;
  itineraryTh: string | null;
  conditionsEn: string | null;
  conditionsTh: string | null;
  remarksEn: string;
  remarksTh: string | null;
  countryEn: string;
  countryTh: string;
  refExternalId: string;
  productImage?: TImage[];
  productItinerary: TProductItinerary[];
  package?: TPackage[];
}

export type TProductItinerary = {
  id: number;
  titleEn: string;
  titleTh: string;
  subTitleEn: string | null;
  subTitleTh: string | null;
}

export type TImage = {
  id: number;
  name: string;
  productId: number;
}

export type TPackage = {
  id: number;
  status: boolean;
  titleEn: string;
  titleTh: string | null;
  descriptionEn: string | null;
  descriptionTh: string | null;
  saleAdultPrice: number;
  saleChildPrice: number;
  promotionAdultPrice: number | null;
  promotionChildPrice: number | null;
  refExternalSaleAdultPriceId: string;
  refExternalSaleChildPriceId: string;
  refExternalPromotionAdultPriceId: string | null;
  refExternalPromotionChildPriceId: string | null;
  maxPax: number | null;
  productId: number;
  product: TProduct;
}

export type IPrice = {
  adult: number,
  child: number,
  promotionAdult?: number,
  promotionChild?: number,
}

export type IImage = {
  "first": string,
  "landscape":  string[],
  "portrait": string[],
}


export type TPackageSearchResponse = {
  currentPage: number;
  totalPages: number;
  firstPage: number;
  lastPage: number;
  resultsPerPage: number;
  totalResults: number;
  data: TPackage[];
}
