import SearchPage from "@/components/search/page";
import {Metadata} from "next";
import SearchProvider from "@/providers/SearchProvider";
import {Suspense} from "react";
import {TPackageSearchResponse} from "@/interface/product";
import {fetchProducts} from "@/utils/api";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Search product | Breath of travel',
    description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
    keywords: ["ทะเล", "ทะเลใต้", "ที่เที่ยวทะเล", "ที่เที่ยวสวย", "ที่เที่ยวหน้าร้อน", "ที่เที่ยวไทยสวยๆ", "รวมที่เที่ยว", "รวมที่เที่ยวไทย", "เกาะ", "เกาะสวยภาคใต้", "เที่ยวไทย"],
    openGraph: {
      type: "website",
      url: "https://breathoftravels.com/",
      title: 'Search product | Breath of travel',
      description: 'ทัวร์ภูเก็ต เกาะสิมิลัน เกาะตาชัย เกาะลันตา มากับเราละมั้ง',
      siteName: "Breath of travel",
      images: [{url: "https://breathoftravels.com/static/image/banner.webp",}],
    }
  }
}

export default async function Page({params, searchParams}: {
  params: { slug: string[] }, searchParams: { page?: string; name?: string; type?: string };
}) {
  const resolvedSearchParams = await searchParams;

  // Extract query parameters
  const page = parseInt(resolvedSearchParams.page || "1", 10); // Default to page 1 if not provided
  const name = resolvedSearchParams?.name;
  const type = resolvedSearchParams?.type;
  // Extract query parameters
  const response: TPackageSearchResponse = await fetchProducts(page, name, type);
  return (
    <SearchProvider init={response}>
      <Suspense fallback={<>Loading</>}>
        <SearchPage/>
      </Suspense>
    </SearchProvider>
  )
}
