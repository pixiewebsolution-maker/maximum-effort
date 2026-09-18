import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full bg-gray-900 flex items-center justify-start px-4 md:px-12">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-2xl text-white">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Heavy Days</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-tight mb-6">
            Train Like It<br />Counts
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Fleece, straps and shorts for the sessions that ask for everything.
          </p>
          <Button variant="primary">Shop Men</Button>
        </div>
      </section>

      {/* Features Banner */}
      <section className="border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Free delivery over ₹2,499</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">30-day returns</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Secure payments</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">Tested in real gyms</span>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading font-bold uppercase">New Releases</h2>
          <button className="text-sm font-bold border-b border-black pb-1">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <ProductCard id="1" name="Lifting Straps & Pouch" category="Lifting Equipment" price={1299} image="/placeholder.jpg" colors={2} isNew />
          <ProductCard id="2" name="Trailhead Zip Hoodie" category="Hoodies & Jackets" price={3999} image="/placeholder.jpg" colors={2} isNew />
          <ProductCard id="3" name="Storm Zip Jacket" category="Hoodies & Jackets" price={4299} image="/placeholder.jpg" colors={2} isNew />
          <ProductCard id="4" name="Tapered Tech Joggers" category="Joggers" price={3299} image="/placeholder.jpg" colors={2} isNew />
        </div>
      </section>

      {/* Shop By Category */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold uppercase mb-8">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
          <div className="bg-gray-200 relative group cursor-pointer overflow-hidden flex items-end p-8">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Women</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block">Shop now</span>
             </div>
          </div>
          <div className="bg-gray-300 relative group cursor-pointer overflow-hidden flex items-end p-8">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Men</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block">Shop now</span>
             </div>
          </div>
          <div className="bg-gray-400 relative group cursor-pointer overflow-hidden flex items-end p-8">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Accessories</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block">Shop now</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
