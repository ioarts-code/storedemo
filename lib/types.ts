export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  download?: {
    url: string;
    fileName?: string;
  } | null;
  categories?: Category[];
  images?: ProductImage[];
  variants?: ProductVariant[];
  reviews?: Review[];
  collections?: Collection[];
  orderItems?: OrderItem[];
}

export interface ProductImage {
  id: string;
  url: string;
  fileName?: string;
}

export interface ProductVariant {
  id: string;
  [key: string]: any;
}

export interface Review {
  id: string;
  [key: string]: any;
}

export interface Collection {
  id: string;
  name: string;
  slug?: string;
}

export interface OrderItem {
  id: string;
  [key: string]: any;
}

export interface Category {
  id: string;
  name: string;
  slug?: string;
}

export interface ProductsResponse {
  products: Product[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
