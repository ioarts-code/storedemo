/**
 * Direct Hygraph GraphQL client
 * Can work either with environment variables or direct configuration
 */
export function createHygraphClient(config?: { endpoint: string; token: string }) {
  return {
    request: async <T,>(query: string, variables?: Record<string, any>): Promise<T> => {
      // If config is provided, use it directly. Otherwise try environment variables.
      const endpoint = config?.endpoint || process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
      const token = config?.token || process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

      if (!endpoint || !token) {
        throw new Error('Hygraph endpoint and token must be configured');
      }

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
