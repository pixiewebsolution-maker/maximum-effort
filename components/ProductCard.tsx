import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
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
  category,
  price,
  image,
  colors,
  isNew,
  isBestSeller
}: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] bg-gray-100 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {isBestSeller && (
            <span className="bg-white text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">Best Seller</span>
          )}
          {isNew && (
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">New</span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
          <Heart className="w-4 h-4" />
        </button>

        {/* Image Placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span className="text-gray-400 text-sm">Product Image ({name})</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="font-bold text-gray-900">{name}</h3>
        <p className="text-gray-500 text-sm mt-1">{category}</p>
        <p className="font-bold mt-2">₹{price.toLocaleString('en-IN')}</p>
        
        {/* Color Indicators */}
        <div className="flex items-center gap-1 mt-3">
          <div className="w-3 h-3 rounded-full bg-black border border-gray-300"></div>
          <div className="w-3 h-3 rounded-full bg-gray-500 border border-gray-300"></div>
          <span className="text-xs text-gray-500 ml-1">{colors} colours</span>
        </div>
      </div>
    </div>
  );
}
