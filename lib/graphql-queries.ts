import { gql } from 'graphql-request';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products(first: 100) {
      id
      name
      slug
      description
      price
      categories {
        id
        name
        slug
      }
      images {
        id
        url
        fileName
      }
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($categoryId: ID!) {
    products(first: 100, where: { categories_some: { id: $categoryId } }) {
      id
      name
      slug
      description
      price
      categories {
        id
        name
        slug
      }
      images {
        id
        url
        fileName
      }
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
      slug
      description
      price
      categories {
        id
        name
        slug
      }
      images {
        id
        url
        fileName
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = gql`
  query GetProductBySlug($slug: String!) {
    products(where: { slug: $slug }, first: 1) {
      id
      name
      slug
      description
      price
      categories {
        id
        name
        slug
      }
      images {
        id
        url
        fileName
      }
    }
  }
`;
