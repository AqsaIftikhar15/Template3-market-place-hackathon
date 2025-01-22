declare module 'sanity/lib/fetch' {
  // Use a more specific type for params and return value
  export function sanityFetch({
    query,
    params,
  }: {
    query: string;
    params?: Record<string, unknown>; 
  }): Promise<unknown>; 
}
