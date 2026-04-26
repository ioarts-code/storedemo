import { gql } from 'graphql-request';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 100) {
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

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categoryId: ID!) {
    products(first: 100, where: { category: { id: $categoryId } }) {
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

export const SEARCH_PRODUCTS = gql`
  query SearchProducts($search: String!) {
    products(first: 100, where: { name_contains: $search }) {
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
