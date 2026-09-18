import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import FilterSortBar from '@/components/FilterSortBar';
import FilterContent from '@/components/FilterContent';
import { getProducts } from '@/lib/api';

export default async function SearchPage({ 
  searchParams
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const search = await searchParams;
  const q = typeof search.q === 'string' ? search.q.toLowerCase() : '';

  const products = await getProducts();

  // Search logic
  let searchResults = products;
  if (q) {
    searchResults = products.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.category.toLowerCase().includes(q) || 
      p.tags.some(tag => tag.toLowerCase().includes(q))
    );
  }

  // Parse filters from URL
  const activeCategoriesRaw = search.category;
  const activeCategories = typeof activeCategoriesRaw === 'string' 
    ? [activeCategoriesRaw] 
    : activeCategoriesRaw || [];

  const activePricesRaw = search.price;
  const activePrices = typeof activePricesRaw === 'string'
    ? [activePricesRaw]
    : activePricesRaw || [];

  // Filter by selected Categories in Sidebar
  if (activeCategories.length > 0) {
    searchResults = searchResults.filter(p => activeCategories.includes(p.category));
  }

  // Filter by selected Prices in Sidebar
  if (activePrices.length > 0) {
    searchResults = searchResults.filter(p => {
      // Price logic for dummy filters
      if (activePrices.includes('Under ₹1,000') && p.price < 1000) return true;
      if (activePrices.includes('₹1,000 - ₹2,000') && p.price >= 1000 && p.price <= 2000) return true;
      if (activePrices.includes('₹2,000 - ₹4,000') && p.price > 2000 && p.price <= 4000) return true;
      if (activePrices.includes('Over ₹4,000') && p.price > 4000) return true;
      return false;
    });
  }

  return (
    <div>
      {/* Hero Header */}
      <section className="relative h-[30vh] bg-gray-800 flex items-end px-4 md:px-8 pb-8">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-white max-w-7xl mx-auto w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-2">
            <Link href="/" className="hover:text-gray-300 transition-colors">Home</Link> / Search
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold uppercase mb-2">
            {q ? `Results for "${q}"` : 'Search Products'}
          </h1>
          <p className="text-sm">{searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found.</p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0">
          <FilterContent />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <FilterSortBar productCount={searchResults.length} />
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {searchResults.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  slug={product.slug}
                  category={product.category}
                  price={product.price}
                  image={product.image}
                  colors={product.colors}
                  isNew={product.isNew}
                  isBestSeller={product.isBestSeller}
                />
              ))}
            </div>
          ) : (
            <div className="py-24 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">No Matches Found</h2>
              <p className="text-gray-600 mb-8">We couldn't find anything matching "{q}". Try adjusting your search or filters.</p>
              <Link href="/category/all" className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                View All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
