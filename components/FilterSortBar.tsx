'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';

export default function FilterSortBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Prevent background scrolling when filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFilterOpen]);

  return (
    <>
      {/* The Bar */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-bold uppercase tracking-widest">
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
        
        <div className="hidden md:block text-gray-500">12 products</div>
        
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block">Sort</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors">
            Featured
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filter Overlay */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-[100] flex">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 transition-opacity" 
            onClick={() => setIsFilterOpen(false)}
          />
          
          {/* Sidebar */}
          <div className="relative w-full max-w-sm bg-white h-full shadow-xl flex flex-col transform transition-transform animate-in slide-in-from-left duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-heading font-bold uppercase">Filter</h2>
              <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Filter Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
              {/* Category */}
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Category</h3>
                <div className="space-y-3">
                  {['Leggings', 'Sports Bras', 'Hoodies & Jackets', 'T-Shirts & Tops', 'Shorts'].map((cat) => (
                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-black cursor-pointer" />
                      <span className="text-sm group-hover:text-gray-600">{cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                  {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <label key={size} className="cursor-pointer">
                      <input type="checkbox" className="peer sr-only cursor-pointer" />
                      <div className="border border-gray-300 text-center py-2 text-sm font-bold peer-checked:bg-black peer-checked:text-white peer-checked:border-black hover:border-black transition-colors">
                        {size}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Colour */}
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Colour</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    {name: 'Black', hex: '#000000'},
                    {name: 'White', hex: '#ffffff'},
                    {name: 'Grey', hex: '#808080'},
                    {name: 'Navy', hex: '#000080'},
                    {name: 'Red', hex: '#ff0000'},
                    {name: 'Green', hex: '#008000'}
                  ].map((color) => (
                    <label key={color.name} className="cursor-pointer group flex flex-col items-center gap-1">
                      <input type="checkbox" className="peer sr-only cursor-pointer" />
                      <div 
                        className="w-8 h-8 rounded-full border border-gray-300 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-black"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="text-xs text-gray-500">{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div>
                <h3 className="font-bold uppercase tracking-widest text-sm mb-4">Price</h3>
                <div className="space-y-3">
                  {['Under ₹1,000', '₹1,000 - ₹2,000', '₹2,000 - ₹4,000', 'Over ₹4,000'].map((price) => (
                    <label key={price} className="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" className="w-4 h-4 accent-black cursor-pointer" />
                      <span className="text-sm group-hover:text-gray-600">{price}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200">
              <button 
                onClick={() => setIsFilterOpen(false)}
                className="w-full bg-black text-white font-bold uppercase tracking-widest text-sm py-4 hover:bg-gray-900 transition-colors cursor-pointer"
              >
                View Results (12)
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
