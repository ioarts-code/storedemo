import { GraphQLClient } from 'graphql-request';
import { HygraphConfig } from './types';

export const createHygraphClient = (config: HygraphConfig) => {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (config.authToken) {
    headers['Authorization'] = `Bearer ${config.authToken}`;
  }

  return new GraphQLClient(config.endpoint, {
    headers,
  });
};
