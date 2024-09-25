import SearchPage from "@/components/search/page";
// Fetching product data (mock function, replace with actual data fetching logic)
async function fetchProducts() {
  // Example: Replace this with actual data fetching logic
  return [
    { slug: ["tour-in-phuket"] },
    { slug: ["tour-in-pangnga"] },
    // Add more product slugs as needed
  ];
}

export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map(product => ({
    slug: product.slug,
  }));
}
export default function Page({ params }: { params: { slug: string[] } }) {
  return (<SearchPage/>)
}
