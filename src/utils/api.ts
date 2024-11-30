import {TPackageSearchResponse} from "@/interface/product";

export async function apiGet(endpoint: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/${endpoint}`, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${endpoint}`);
  }

  return response.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function apiPost(endpoint: string, body: Record<string, any>) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/${endpoint}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Failed to post data to ${endpoint}`);
  }

  return response.json();
}

export async function fetchProducts(page: number = 1, name?: string, type?: string): Promise<TPackageSearchResponse> {
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  if (name) queryParams.append("name", name);
  if (type) queryParams.append("type", type);

  return await apiGet(`product/search/package/pagination?${queryParams.toString()}`);
}
