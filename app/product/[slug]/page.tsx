import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import { Heart, Star, Check, Truck, RotateCcw, Plus, Minus } from 'lucide-react';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const isRelentless = params.slug.includes('relentless');
  const title = isRelentless ? "Relentless Seamless Leggings" : "Product Title";
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Breadcrumbs */}
      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-6">Home / Women / {title}</p>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
        {/* Left: Product Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="aspect-[3/4] bg-gray-200 w-full" />
          <div className="aspect-[3/4] bg-gray-300 w-full" />
        </div>

        {/* Right: Product Details */}
        <div className="w-full md:w-1/2 md:sticky md:top-24 self-start">
          <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Leggings</p>
          <h1 className="text-3xl font-heading font-bold uppercase mb-2">{title}</h1>
          
          <div className="flex items-center gap-2 mb-4 text-sm">
            <div className="flex text-black">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-gray-500">4.8 (1,284)</span>
          </div>

          <p className="text-2xl font-bold mb-4">₹2,799</p>
          <p className="text-gray-600 mb-8">Knitted in one piece so there are no side seams to dig in, rub or shift mid-set.</p>

          {/* Color Selection */}
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest mb-3">Colour: <span className="text-gray-500">Black</span></p>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-black border border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-rose-800 border border-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-blue-900 border border-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-green-800 border border-gray-300 hover:ring-2 hover:ring-offset-2 hover:ring-gray-300 transition-all"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-bold uppercase tracking-widest">Size</p>
              <button className="text-xs font-bold border-b border-black pb-0.5">Size Guide</button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                <button key={size} className="py-3 border border-gray-300 text-center font-bold hover:border-black transition-colors">{size}</button>
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
              <p>The Relentless Leggings are knitted as a single tube, which means no side seams, no rubbing and nothing to twist when you squat. Ribbed panels sit over the knee and calf so the fabric stretches where your leg does.</p>
              <p>A high, wide waistband stays put through deadlifts and hip thrusts, and the fabric is opaque under load — we test every colour on a squat rack before it ships.</p>
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
          <ProductCard id="3" name="Contour Sculpt Leggings" category="Leggings" price={3199} image="/placeholder.jpg" colors={3} isBestSeller />
          <ProductCard id="4" name="Momentum High-Waist Leggings" category="Leggings" price={1749} image="/placeholder.jpg" colors={3} />
          <ProductCard id="1" name="Grit High-Support Sports Bra" category="Sports Bras" price={1799} image="/placeholder.jpg" colors={3} isBestSeller />
          <ProductCard id="2" name="Iron Core Oversized T-Shirt" category="T-Shirts & Tops" price={1699} image="/placeholder.jpg" colors={3} isBestSeller />
        </div>
      </section>
    </div>
  );
}
