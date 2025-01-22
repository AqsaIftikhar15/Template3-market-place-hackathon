declare module 'sanity/lib/fetch' {
  export function sanityFetch({ query, params }: { query: string; params?: Record<string, any> }): Promise<any>;
}
