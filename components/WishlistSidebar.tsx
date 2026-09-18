'use client';

import { useWishlist } from '@/context/WishlistContext';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function WishlistSidebar() {
  const { wishlistItems, isWishlistOpen, toggleWishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${isWishlistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleWishlist}
      />
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isWishlistOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-wider">Wishlist</h2>
          <button onClick={toggleWishlist} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {wishlistItems.length === 0 ? (
            <div className="text-center text-gray-500 mt-12 font-bold tracking-widest uppercase">
              Your wishlist is empty
            </div>
          ) : (
            wishlistItems.map((product) => (
              <div key={product.id} className="flex gap-4 border-b border-gray-100 pb-6 last:border-0">
                <div className="w-24 h-32 bg-gray-100 relative shrink-0">
                  <img 
                    src={`https://loremflickr.com/600/800/fitness,gym,wear?lock=${product.id}`} 
                    alt={product.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-sm leading-tight">{product.name}</h3>
                      <p className="font-bold mt-1">₹{product.price.toLocaleString('en-IN')}</p>
                    </div>
                    <button onClick={() => removeFromWishlist(product.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <Link href={`/product/${product.id}`} onClick={toggleWishlist} className="mt-auto flex items-center justify-center gap-2 w-full py-2 border border-black text-sm font-bold uppercase hover:bg-black hover:text-white transition-colors">
                    <ShoppingBag className="w-4 h-4" /> View Product
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
