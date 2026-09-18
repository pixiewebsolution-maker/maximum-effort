import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import { Heart, Star, Check, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import products from '@/data/products.json';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold uppercase mb-4">Product Not Found</h1>
        <p className="text-gray-500">The product you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  const relatedProducts = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
    // Fill up with other products if not enough in same category
    const additional = products.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additional);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumbs */}
      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">Home / {product.category} / {product.name}</p>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left: Product Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] bg-gray-200 w-full relative overflow-hidden">
             <img 
               src={`https://loremflickr.com/600/800/fitness,gym,wear?lock=${product.id}`}
               alt={`${product.name} Main`}
               className="w-full h-full object-cover"
             />
          </div>
          <div className="aspect-[3/4] bg-gray-300 w-full relative overflow-hidden">
             <img 
               src={`https://loremflickr.com/600/800/fitness,gym,wear?lock=${Number(product.id) + 100}`}
               alt={`${product.name} Alternate`}
               className="w-full h-full object-cover"
             />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 self-start">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">{product.category}</p>
          <h1 className="text-3xl font-heading font-bold uppercase mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4 text-sm">
            <div className="flex text-black">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-gray-500">{product.rating} ({product.reviews.toLocaleString()})</span>
          </div>

          <p className="text-2xl font-bold mb-4">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3">Colour <span className="text-gray-500 font-normal lowercase ml-1">({product.colors} options)</span></p>
            <div className="flex gap-3">
              {Array.from({ length: product.colors }).map((_, i) => (
                <button key={i} className={`w-8 h-8 rounded-full border border-gray-300 transition-all ${i === 0 ? 'bg-black ring-2 ring-offset-2 ring-black' : 'bg-gray-400 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300'}`}></button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-bold uppercase tracking-widest">Size</p>
              <button className="text-xs font-bold border-b border-black pb-0.5">Size Guide</button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['XS', 'S', 'M', 'L', 'XL'].map((size, idx) => (
                <button key={size} className={`py-3 border border-gray-300 text-center font-bold hover:border-black transition-colors ${idx === 2 ? 'bg-black text-white border-black' : ''}`}>{size}</button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mb-8">
            <Button variant="secondary" fullWidth>Add to Bag</Button>
            <button className="p-4 border border-gray-300 hover:border-black transition-colors flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </button>
          </div>

          {/* Info Features */}
          <div className="space-y-3 text-sm text-gray-600 mb-8">
            <p className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> In stock — dispatched within 24 hours</p>
            <p className="flex items-center gap-3"><Truck className="w-5 h-5" /> Free delivery on orders over ₹2,499</p>
            <p className="flex items-center gap-3"><RotateCcw className="w-5 h-5" /> 30-day returns with free pickup</p>
          </div>

          {/* Accordions */}
          <div className="border-t border-gray-200">
            <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
              <span className="font-bold uppercase tracking-widest text-sm">Description</span>
              <Minus className="w-5 h-5 text-gray-500" />
            </div>
            <div className="py-4 text-gray-600 text-sm space-y-4">
              <p>{product.description}</p>
            </div>
            
            <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
              <span className="font-bold uppercase tracking-widest text-sm">Fit & Materials</span>
              <Plus className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
            </div>
            <div className="py-4 border-b border-gray-200 flex justify-between items-center cursor-pointer group">
              <span className="font-bold uppercase tracking-widest text-sm">Delivery & Returns</span>
              <Plus className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="mt-24">
        <h2 className="text-3xl font-heading font-bold uppercase mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {relatedProducts.map(rp => (
               <ProductCard 
                 key={rp.id} 
                 id={rp.id} 
                 name={rp.name} 
                 slug={rp.slug}
                 category={rp.category} 
                 price={rp.price} 
                 image={rp.image} 
                 colors={rp.colors} 
                 isBestSeller={rp.isBestSeller}
                 isNew={rp.isNew}
               />
          ))}
        </div>
      </section>
    </div>
  );
}
