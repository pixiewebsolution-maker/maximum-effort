import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function CategoryPage({ params }: { params: { slug: string } }) {
  // Decode slug
  const title = params.slug === 'women' ? 'Women' : 
                params.slug === 'men' ? 'Men' : 
                params.slug === 'accessories' ? 'Accessories' : 'Category';

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
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-bold uppercase tracking-widest">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </button>
          
          <div className="hidden md:block text-gray-500">12 products</div>
          
          <div className="flex items-center gap-2">
            <span className="hidden md:inline-block">Sort</span>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors">
              Featured
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-12">
          {Array.from({ length: 12 }).map((_, i) => (
            <ProductCard 
              key={i} 
              id={i.toString()} 
              name={["Grit High-Support Sports Bra", "Relentless Seamless Leggings", "Contour Sculpt Leggings", "Recovery Oversized Hoodie"][i % 4]} 
              category={["Sports Bras", "Leggings", "Leggings", "Hoodies & Jackets"][i % 4]} 
              price={[1799, 2799, 3199, 3499][i % 4]} 
              image="/placeholder.jpg" 
              colors={3} 
              isBestSeller={i < 4}
              isNew={i >= 4 && i < 6}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
