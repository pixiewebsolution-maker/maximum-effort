import productsData from '@/data/products.json';

// In the future, this will be replaced with WordPress API calls
// e.g. using fetch('https://your-wordpress-site.com/wp-json/wc/v3/products')

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  colors: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
}

// Simulate async network request (commented out for fast local dev, but ready for real API)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getProducts(): Promise<Product[]> {
  // await delay(200); 
  return productsData as Product[];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  // await delay(200);
  return (productsData as Product[]).find((p) => p.slug === slug);
}
