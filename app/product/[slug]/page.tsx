import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import AddToCartForm from '@/components/AddToCartForm';
import ProductCarousel from '@/components/ProductCarousel';
import ProductAccordions from '@/components/ProductAccordions';
import { Heart, Star, Check, Truck, RotateCcw, Plus, Minus } from 'lucide-react';
import { getProductBySlug, getProducts } from '@/lib/api';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 text-center">
        <h1 className="text-3xl font-heading font-bold uppercase mb-4">Product Not Found</h1>
        <p className="text-gray-500">The product you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  const allProducts = await getProducts();
  const relatedProducts = allProducts.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
  if (relatedProducts.length < 4) {
    // Fill up with other products if not enough in same category
    const additional = allProducts.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...additional);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumbs */}
      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">Home / {product.category} / {product.name}</p>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left: Product Images */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 self-start">
           <ProductCarousel 
             images={[
               `https://loremflickr.com/600/800/fitness,gym,wear?lock=${product.id}`,
               `https://loremflickr.com/600/800/fitness,gym,wear?lock=${Number(product.id) + 100}`
             ]}
             altPrefix={product.name}
           />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 self-start">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">
            <Link href="/" className="hover:text-black transition-colors">Home</Link> /{' '}
            <Link href={`/category/${product.category.toLowerCase().replace(/ /g, '-')}`} className="hover:text-black transition-colors">{product.category}</Link> /{' '}
            <span className="text-black">{product.name}</span>
          </p>
          <h1 className="text-3xl font-heading font-bold uppercase mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-2 mb-4 text-sm">
            <div className="flex text-black">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-gray-500">{product.rating} ({product.reviews.toLocaleString()})</span>
          </div>

          <p className="text-2xl font-bold mb-4">₹{product.price.toLocaleString('en-IN')}</p>
          <p className="text-gray-600 mb-8">{product.description}</p>

          <AddToCartForm product={product} />

          {/* Info Features */}
          <div className="space-y-3 text-sm text-gray-600 mb-8">
            <p className="flex items-center gap-3"><Check className="w-5 h-5 text-green-600" /> In stock — dispatched within 24 hours</p>
            <p className="flex items-center gap-3"><Truck className="w-5 h-5" /> Free delivery on orders over ₹2,499</p>
            <p className="flex items-center gap-3"><RotateCcw className="w-5 h-5" /> 30-day returns with free pickup</p>
          </div>

          {/* Accordions */}
          <ProductAccordions description={product.description} />
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
