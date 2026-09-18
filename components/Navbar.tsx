'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { toggleCart, cartCount } = useCart();
  const { toggleWishlist, wishlistCount } = useWishlist();

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <>
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
        <button onClick={() => setIsSearchOpen(true)} className="hover:text-gray-300 transition-colors"><Search className="w-5 h-5" /></button>
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

    {/* Search Modal Overlay */}
    <div 
      className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isSearchOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
      onClick={() => setIsSearchOpen(false)}
    />

    {/* Search Dropdown */}
    <div 
      className={`fixed top-0 left-0 w-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isSearchOpen ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center h-20 px-4 md:px-8 max-w-7xl mx-auto">
        <Search className="w-6 h-6 text-gray-400" />
        <form onSubmit={handleSearchSubmit} className="flex-1 mx-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, categories..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xl md:text-3xl font-heading uppercase tracking-wide bg-transparent border-none outline-none text-black placeholder-gray-300"
          />
        </form>
        <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-8 h-8 text-black" />
        </button>
      </div>
    </div>
    </>
  );
}
