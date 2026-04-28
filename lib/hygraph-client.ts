import { GraphQLClient } from 'graphql-request';

/**
 * Create a Hygraph GraphQL client using environment variables
 * Reads NEXT_PUBLIC_HYGRAPH_ENDPOINT and NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN from Vercel env
 */
export function getHygraphClient() {
  const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT;
  const authToken = process.env.NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN;

  if (!endpoint) {
    throw new Error(
      'NEXT_PUBLIC_HYGRAPH_ENDPOINT environment variable is not set'
    );
  }

  if (!authToken) {
    throw new Error(
      'NEXT_PUBLIC_HYGRAPH_AUTH_TOKEN environment variable is not set'
    );
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };

  return new GraphQLClient(endpoint, { headers });
}

/**
 * Legacy function for backwards compatibility - uses Vercel env vars directly
 */
export const createHygraphClient = () => {
  return getHygraphClient();
};
