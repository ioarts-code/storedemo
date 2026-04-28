/**
 * Hygraph GraphQL client using Vercel environment variables only
 * Requires NEXT_PUBLIC_HYGRAPH_ENDPOINT and NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN
 */
export function createHygraphClient() {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
  const token = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

  if (!endpoint || !token) {
    throw new Error(
      'Missing Hygraph configuration. Set NEXT_PUBLIC_HYGRAPH_ENDPOINT and NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN in Vercel environment variables.'
    );
  }

  return {
    request: async <T,>(query: string, variables?: Record<string, any>): Promise<T> => {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0]?.message || 'GraphQL error');
      }

      return data.data;
    },
  };
}
