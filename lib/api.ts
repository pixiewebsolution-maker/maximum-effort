import productsData from '@/data/products.json';

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

export interface HomepageData {
  hero_subtext: string;
  hero_title: string;
  hero_description: string;
  hero_image: string;
  cat_women_image: string;
  cat_men_image: string;
  cat_acc_image: string;
  coll_seamless_title: string;
  coll_seamless_desc: string;
  coll_seamless_img: string;
  coll_fleece_title: string;
  coll_fleece_desc: string;
  coll_fleece_img: string;
}

async function fetchWooCommerceProducts(): Promise<Product[]> {
  try {
    const url = process.env.WC_API_URL;
    const key = process.env.WC_CONSUMER_KEY;
    const secret = process.env.WC_CONSUMER_SECRET;

    if (!url || !key || !secret) {
      console.warn("WooCommerce API credentials not found in environment variables.");
      return [];
    }

    const auth = Buffer.from(`${key}:${secret}`).toString('base64');
    
    const response = await fetch(`${url}/products`, {
      headers: {
        'Authorization': `Basic ${auth}`
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      console.error("WooCommerce API returned status:", response.status);
      return [];
    }

    const wcProducts = await response.json();

    // Map WooCommerce format to our frontend Product format
    return wcProducts.map((p: any) => ({
      id: p.id.toString(),
      name: p.name,
      slug: p.slug,
      category: p.categories && p.categories.length > 0 ? p.categories[0].name : 'Uncategorized',
      price: parseFloat(p.price || p.regular_price || '0'),
      image: p.images && p.images.length > 0 ? p.images[0].src : `https://loremflickr.com/600/800/fitness,gym,wear?lock=${p.id}`,
      colors: 1,
      isNew: p.featured || false,
      isBestSeller: p.total_sales > 5,
      rating: parseFloat(p.average_rating || '5.0'),
      reviews: p.rating_count || 0,
      description: p.description ? p.description.replace(/<[^>]*>?/gm, '') : 'No description available.',
      tags: p.tags ? p.tags.map((t: any) => t.name) : []
    }));
  } catch (error) {
    console.error('Error fetching WooCommerce products:', error);
    return [];
  }
}

export async function getProducts(): Promise<Product[]> {
  const wcProducts = await fetchWooCommerceProducts();
  const dummyProducts = productsData as Product[];
  
  // Merge WooCommerce products and dummy products (WC products first)
  return [...wcProducts, ...dummyProducts];
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const allProducts = await getProducts();
  return allProducts.find((p) => p.slug === slug);
}

export async function getHomepageData(): Promise<HomepageData | null> {
  try {
    const url = process.env.WC_API_URL?.replace('/wc/v3', '/wp/v2');
    if (!url) return null;

    const response = await fetch(`${url}/pages?slug=home`, {
      next: { revalidate: 60 }
    });

    if (!response.ok) return null;

    const pages = await response.json();
    if (!pages || pages.length === 0 || !pages[0].acf) return null;

    return pages[0].acf as HomepageData;
  } catch (error) {
    console.error("Error fetching homepage ACF data:", error);
    return null;
  }
}
