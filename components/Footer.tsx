import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-xl font-bold uppercase mb-4 tracking-wider">Maximum Effort</h3>
          <p className="text-gray-400 text-sm mb-6">Training kit built for the days you do not feel like it. Designed in India, tested in real gyms.</p>
          <h4 className="font-bold text-sm uppercase mb-2">Get 10% off your first order</h4>
          <div className="flex border-b border-gray-600 pb-2">
            <input type="email" placeholder="Email address" className="bg-transparent outline-none text-sm w-full" />
            <button>&rarr;</button>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4">Help</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-white">FAQ</Link></li>
            <li><Link href="#" className="hover:text-white">Delivery Information</Link></li>
            <li><Link href="#" className="hover:text-white">Returns Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Size Guide</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/category/women" className="hover:text-white">Women</Link></li>
            <li><Link href="/category/men" className="hover:text-white">Men</Link></li>
            <li><Link href="/category/accessories" className="hover:text-white">Accessories</Link></li>
            <li><Link href="/category/new" className="hover:text-white">New Releases</Link></li>
            <li><Link href="/category/sale" className="hover:text-white">Sale</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-sm uppercase mb-4">About</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-white">Our Story</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/wishlist" className="hover:text-white">Wishlist</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2026 Maximum Effort. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Prices in INR. Demo store built with Next.js.</p>
      </div>
    </footer>
  );
}
