import {MetadataRoute} from "next";
import {TProduct} from "@/interface/product";
async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/product`);
  return res.json();
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts()
  return products.map((product:TProduct) => ({
    url: `https://breathoftravels.com/product/${product.id}`,
    lastModified: new Date(),
  }))
}
