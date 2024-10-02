import SearchPage from "@/components/search/page";
import {Metadata} from "next";
import SearchProvider from "@/providers/SearchProvider";
import {Suspense} from "react";

export type TProduct = {
  "id": string,
  "name": string,
  "type": string,
  "description": string,
  "itinerary": string | string[],
  "include": string[],
  "exclude": string[],
  "prices": IPrice[],
  "remark": string,
  "company": string,
}
export type IPrice = {
  "adult": number,
  "child": number,
}

// Fetching product data (mock function, replace with actual data fetching logic)
async function fetchProducts() {
  const res = await fetch('https://sukhantharot.github.io/dummy-fake-json/product.json');
  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Search product | Breath of travel',
    description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
    keywords: ["ทะเล", "ทะเลใต้", "ที่เที่ยวทะเล", "ที่เที่ยวสวย", "ที่เที่ยวหน้าร้อน", "ที่เที่ยวไทยสวยๆ", "รวมที่เที่ยว", "รวมที่เที่ยวไทย", "เกาะ", "เกาะสวยภาคใต้", "เที่ยวไทย"],
    openGraph: {
      type: "website",
      url: "https://breathoftravel.vercel.app/",
      title: 'Search product | Breath of travel',
      description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
      siteName: "Breath of travel",
      images: [{url: "https://breathoftravel.vercel.app/static/image/banner.webp",}],
    }
  }
}

export default async function Page({params}: { params: { slug: string[] } }) {
  const products: TProduct[] = await fetchProducts();
  console.log(params);
  return (
    <SearchProvider init={{page: 1, products: products.slice(0, 15)}}>
      <Suspense fallback={<>Loading</>}>
        <SearchPage/>
      </Suspense>
    </SearchProvider>
  )
}
