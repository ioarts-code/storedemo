export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  category?: Category;
  copyrights?: Copyright[];
  image?: {
    url: string;
    alt?: string;
  };
  url?: string;
  icon?: string;
  createdAt?: string;
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
}

export interface Copyright {
  id: string;
  name: string;
  slug?: string;
}

export interface HygraphConfig {
  endpoint: string;
  authToken?: string;
}

export interface ProductsResponse {
  products: Product[];
}
