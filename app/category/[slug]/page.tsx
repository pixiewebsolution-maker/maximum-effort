import ProductCard from '@/components/ProductCard';
import FilterSortBar from '@/components/FilterSortBar';
import FilterContent from '@/components/FilterContent';
import products from '@/data/products.json';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Decode slug
  const title = params.slug === 'women' ? 'Women' : 
                params.slug === 'men' ? 'Men' : 
                params.slug === 'accessories' ? 'Accessories' : 'Category';

  // Filter products by slug tags
  let filteredProducts = products;
  if (params.slug !== 'all') {
    filteredProducts = products.filter(p => p.tags.includes(params.slug));
  }

  return (
    <div>
      {/* Category Header */}
      <section className="relative h-[40vh] bg-gray-800 flex items-end px-4 md:px-8 pb-8">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-white max-w-7xl mx-auto w-full">
          <p className="text-xs font-bold uppercase tracking-widest mb-2">Home / {title}</p>
          <h1 className="text-5xl md:text-6xl font-heading font-bold uppercase mb-2">{title}</h1>
          <p className="text-sm">Seamless sets, sculpting leggings and training layers built to move with you.</p>
        </div>
      </section>

      {/* Filter and Sort Bar */}
      <section className="border-b border-gray-200 py-4 px-4 md:px-8 sticky top-16 bg-white z-40">
        <FilterSortBar />
      </section>

      {/* Product Grid Layout */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        
        {/* Left Sidebar Filter (Desktop Only) */}
        <aside className="hidden md:block w-64 shrink-0 border-r border-gray-200 pr-8">
           <div className="sticky top-32">
             <FilterContent />
           </div>
        </aside>

        {/* Right Side Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                id={product.id} 
                name={product.name} 
                slug={product.slug}
                category={product.category} 
                price={product.price} 
                image={product.image} 
                colors={product.colors} 
                isBestSeller={product.isBestSeller}
                isNew={product.isNew}
              />
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-gray-500 font-bold tracking-widest uppercase">
              No products found in this category.
            </div>
          )}
        </div>
        </div>
      </section>
    </div>
  );
}
