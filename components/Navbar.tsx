'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, Heart, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Navbar() {
  const { toggleCart, cartCount } = useCart();
  const { toggleWishlist, wishlistCount } = useWishlist();
  return (
    <nav className="w-full h-16 bg-black text-white border-b border-gray-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
      {/* Mobile Menu & Navlinks (Left) */}
      <div className="flex items-center space-x-6">
        <button onClick={() => alert("Menu clicked")} className="md:hidden hover:text-gray-300 transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <div className="hidden md:flex items-center space-x-6 text-sm font-semibold tracking-wide uppercase font-heading">
          <Link href="/category/women" className="hover:text-gray-300 transition-colors">Women</Link>
          <Link href="/category/men" className="hover:text-gray-300 transition-colors">Men</Link>
          <Link href="/category/accessories" className="hover:text-gray-300 transition-colors">Accessories</Link>
          <Link href="/category/sale" className="hover:text-red-500 transition-colors">Sale</Link>
        </div>
      </div>

      {/* Logo (Center) */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/">
          <Image src="/images/logo.png" alt="Maximum Effort" width={180} height={40} className="object-contain" priority />
        </Link>
      </div>

      {/* Action Buttons (Right) */}
      <div className="flex items-center space-x-4">
        <button onClick={() => alert("Search clicked")} className="hover:text-gray-300 transition-colors"><Search className="w-5 h-5" /></button>
        <button onClick={() => alert("User account clicked")} className="hover:text-gray-300 transition-colors hidden md:block"><User className="w-5 h-5" /></button>
        <button onClick={toggleWishlist} className="hover:text-gray-300 transition-colors hidden md:block relative">
          <Heart className="w-5 h-5" />
          {wishlistCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </button>
        <button onClick={toggleCart} className="hover:text-gray-300 transition-colors relative">
          <ShoppingBag className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
