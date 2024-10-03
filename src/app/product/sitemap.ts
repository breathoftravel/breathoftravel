import {MetadataRoute} from "next";
import {TProduct} from "@/app/search/[[...slug]]/page";
async function fetchProducts() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/product.json');
  return res.json();
}
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await fetchProducts()
  return products.map((product:TProduct) => ({
    url: `https://breathoftravel.vercel.app/product/${product.id}`,
    lastModified: new Date(),
  }))
}