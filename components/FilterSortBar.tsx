'use client';

import { useState, useEffect } from 'react';
import { SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import FilterContent from '@/components/FilterContent';

interface FilterSortBarProps {
  productCount?: number;
}

export default function FilterSortBar({ productCount = 12 }: FilterSortBarProps) {
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
        {/* Mobile Filter Button (Hidden on Desktop) */}
        <button 
          onClick={() => setIsFilterOpen(true)}
          className="md:hidden flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>
        
        {/* Desktop Product Count */}
        <div className="hidden md:block text-gray-500">{productCount} products</div>
        
        <div className="flex items-center gap-2 ml-auto">
          <span className="hidden md:inline-block">Sort</span>
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 hover:bg-gray-100 transition-colors cursor-pointer">
            Featured
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isFilterOpen && (
        <div className="md:hidden fixed inset-0 z-[100] flex">
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
              <button onClick={() => setIsFilterOpen(false)} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Filter Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
               <FilterContent />
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
