'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useWishlist } from '@/context/WishlistContext';

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  image: string;
  colors: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export default function ProductCard({
  id,
  name,
  slug,
  category,
  price,
  image,
  colors,
  isNew,
  isBestSeller
}: ProductCardProps) {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist(id)) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        id, name, slug, category, price, image, colors,
        description: '', rating: 0, reviews: 0, tags: []
      });
    }
  };

  return (
    <Link href={`/product/${slug}`} className="group cursor-pointer block">
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {isBestSeller && (
            <span className="bg-white text-black text-xs font-semibold px-2 py-1 uppercase tracking-wider">Best Seller</span>
          )}
          {isNew && (
            <span className="bg-black text-white text-xs font-semibold px-2 py-1 uppercase tracking-wider">New</span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button 
          onClick={handleWishlistClick}
          className={`absolute top-2 right-2 z-10 p-2 bg-white rounded-full transition-opacity shadow-sm ${
            isInWishlist(id) ? 'opacity-100 text-red-500' : 'opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist(id) ? 'fill-current' : ''}`} />
        </button>

        {/* Image */}
        <div className="w-full h-full relative">
          <img 
            src={image || '/images/products/IMG_4220.PNG'}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-normal text-gray-900 text-sm md:text-base">{name}</h3>
        <p className="text-gray-500 text-xs md:text-sm mt-0.5 font-normal">{category}</p>
        <p className="font-medium text-gray-900 mt-1.5 text-sm md:text-base">₹{price.toLocaleString('en-IN')}</p>
        
        {/* Color Indicators */}
        <div className="flex items-center gap-1 mt-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-black border border-gray-300"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gray-500 border border-gray-300"></div>
          <span className="text-xs text-gray-400 ml-1 font-normal">{colors} colours</span>
        </div>
      </div>
    </Link>
  );
}
