import { createClient } from "next-sanity";

const client = createClient({
  projectId: "j4tpmvwq",
  dataset: "production",
  useCdn: true,
  apiVersion: '2025-01-18',
});

export async function sanityFetch({ query, params }: { query: string, params?: Record<string, string | number | boolean> }) {
  return await client.fetch(query, params);
}
