import { gql } from 'graphql-request';

export const GET_SERVICES = gql`
  query GetServices {
    services(first: 100) {
      id
      name
      description
      shortDescription
      url
      icon
      category {
        id
        name
        slug
      }
      tags(first: 10) {
        id
        name
        slug
      }
      image {
        url
        alt: caption
      }
      createdAt
    }
  }
`;

export const GET_SERVICES_BY_CATEGORY = gql`
  query GetServicesByCategory($categoryId: ID!) {
    services(first: 100, where: { category: { id: $categoryId } }) {
      id
      name
      description
      shortDescription
      url
      icon
      category {
        id
        name
        slug
      }
      tags(first: 10) {
        id
        name
        slug
      }
      image {
        url
        alt: caption
      }
      createdAt
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(first: 50) {
      id
      name
      slug
    }
  }
`;

export const SEARCH_SERVICES = gql`
  query SearchServices($search: String!) {
    services(first: 100, where: { name_contains: $search }) {
      id
      name
      description
      shortDescription
      url
      icon
      category {
        id
        name
        slug
      }
      tags(first: 10) {
        id
        name
        slug
      }
      image {
        url
        alt: caption
      }
      createdAt
    }
  }
`;
