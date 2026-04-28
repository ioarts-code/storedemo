/**
 * Client-side Hygraph GraphQL client
 * Communicates with /api/hygraph route which handles authentication server-side
 */
export function createHygraphClient() {
  return {
    request: async <T,>(query: string, variables?: Record<string, any>): Promise<T> => {
      const response = await fetch('/api/hygraph', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `API request failed with status ${response.status}`);
      }

      const data = await response.json();

      if (data.errors) {
        throw new Error(data.errors[0]?.message || 'GraphQL error');
      }

      return data.data;
    },
  };
}
