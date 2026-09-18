import Link from 'next/link';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ProductCard';
import { getProducts } from '@/lib/api';

export default async function Home() {
  const products = await getProducts();
  const newReleases = products.filter(p => p.isNew).slice(0, 4);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[80vh] w-full bg-gray-900 flex items-center justify-start px-4 md:px-12 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://loremflickr.com/1920/1080/gym,training?lock=10")' }}
      >
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 max-w-2xl text-white">
          <p className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4">Heavy Days</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold uppercase leading-tight mb-6">
            Train Like It<br />Counts
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Fleece, straps and shorts for the sessions that ask for everything.
          </p>
          <Link href="/category/men">
            <Button variant="primary">Shop Men</Button>
          </Link>
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
          {newReleases.map(product => (
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
      </section>

      {/* Shop By Category */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold uppercase mb-8">Shop By Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[400px]">
          <Link href="/category/women" className="bg-gray-200 relative group cursor-pointer overflow-hidden flex items-end p-8 bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/600/800/fitness,women?lock=11")' }}>
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Women</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block font-bold">Shop now</span>
             </div>
          </Link>
          <Link href="/category/men" className="bg-gray-300 relative group cursor-pointer overflow-hidden flex items-end p-8 bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/600/800/fitness,men?lock=12")' }}>
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Men</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block font-bold">Shop now</span>
             </div>
          </Link>
          <Link href="/category/accessories" className="bg-gray-400 relative group cursor-pointer overflow-hidden flex items-end p-8 bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/600/800/gym,equipment?lock=13")' }}>
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors z-10" />
             <div className="relative z-20 text-white">
                <h3 className="text-3xl font-heading font-bold uppercase">Accessories</h3>
                <span className="border-b border-white pb-1 mt-2 inline-block font-bold">Shop now</span>
             </div>
          </Link>
        </div>

        {/* Seamless and Fleece */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 h-[500px]">
          <Link href="/category/women" className="bg-gray-500 relative group overflow-hidden flex items-end p-8 bg-cover bg-center block" style={{ backgroundImage: 'url("https://loremflickr.com/800/1000/yoga,apparel?lock=14")' }}>
             <div className="absolute inset-0 bg-black/30 z-10" />
             <div className="relative z-20 text-white max-w-md">
                <h3 className="text-4xl font-heading font-bold uppercase leading-tight mb-2">The Seamless Collection</h3>
                <p className="mb-6">Leggings, bras and tanks that move as one piece.</p>
                <Button variant="primary">Shop Women</Button>
             </div>
          </Link>
          <Link href="/category/men" className="bg-gray-600 relative group overflow-hidden flex items-end p-8 bg-cover bg-center block" style={{ backgroundImage: 'url("https://loremflickr.com/800/1000/bodybuilding,apparel?lock=15")' }}>
             <div className="absolute inset-0 bg-black/30 z-10" />
             <div className="relative z-20 text-white max-w-md">
                <h3 className="text-4xl font-heading font-bold uppercase leading-tight mb-2">Heavyweight Fleece</h3>
                <p className="mb-6">420gsm hoodies and joggers for the walk there and back.</p>
                <Button variant="primary">Shop Men</Button>
             </div>
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading font-bold uppercase">Best Sellers</h2>
          <button className="text-sm font-bold border-b border-black pb-1">View All</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map(product => (
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
      </section>

      {/* Maximum Effort Central */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-200">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-heading font-bold uppercase">Maximum Effort Central</h2>
          <button className="text-sm font-bold border-b border-black pb-1 uppercase tracking-widest">All Articles</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <article className="cursor-pointer group">
            <div className="aspect-[4/3] bg-gray-200 mb-4 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/800/600/gym,workout?lock=16")' }} />
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Training · 10 September 2026</p>
            <h3 className="text-xl font-heading font-bold uppercase mb-2 group-hover:text-gray-600 transition-colors">How to build a training week that sticks</h3>
            <p className="text-gray-600">Four sessions you can hold down for a year beats six you quit in March. Here is how to lay out a week that survives real life.</p>
          </article>
          <article className="cursor-pointer group">
            <div className="aspect-[4/3] bg-gray-200 mb-4 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/800/600/gym,squat?lock=17")' }} />
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Product · 2 September 2026</p>
            <h3 className="text-xl font-heading font-bold uppercase mb-2 group-hover:text-gray-600 transition-colors">What "Squat-Proof" actually means</h3>
            <p className="text-gray-600">Every brand claims it. Here is the test we run on every colour before it goes on sale.</p>
          </article>
          <article className="cursor-pointer group">
            <div className="aspect-[4/3] bg-gray-200 mb-4 overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("https://loremflickr.com/800/600/gym,warmup?lock=18")' }} />
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-2">Training · 21 August 2026</p>
            <h3 className="text-xl font-heading font-bold uppercase mb-2 group-hover:text-gray-600 transition-colors">Five warm-up drills to do before you lift heavy</h3>
            <p className="text-gray-600">Ten minutes that make the first working set feel like the third.</p>
          </article>
        </div>
      </section>
    </div>
  );
}
