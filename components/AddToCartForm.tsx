'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/api';
import Button from '@/components/ui/Button';
import { Heart } from 'lucide-react';

interface AddToCartFormProps {
  product: Product;
}

export default function AddToCartForm({ product }: AddToCartFormProps) {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    if (selectedColor === null || !selectedSize) {
      setError('Please select a size and color.');
      return;
    }
    setError(null);
    await addToCart(product, selectedSize, selectedColor);
  };

  return (
    <>
      {/* Colors */}
      <div className="mb-6">
        <h3 className="text-sm font-bold uppercase tracking-widest mb-3">Color</h3>
        <div className="flex gap-3">
          {Array.from({ length: product.colors }).map((_, i) => (
            <button 
              key={i}
              onClick={() => setSelectedColor(i)}
              className={`w-10 h-10 rounded-full border-2 transition-colors ${
                selectedColor === i ? 'border-black' : 'border-gray-300 hover:border-gray-400'
              } ${i === 0 ? 'bg-black' : i === 1 ? 'bg-gray-500' : i === 2 ? 'bg-blue-900' : 'bg-red-900'}`}
            />
          ))}
        </div>
      </div>
      
      {/* Size */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-3">
          <h3 className="text-sm font-bold uppercase tracking-widest">Size</h3>
          <button className="text-xs font-bold border-b border-black pb-0.5 hover:text-gray-500 transition-colors">Size Guide</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
            <button 
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border py-3 text-sm font-bold uppercase transition-colors ${
                selectedSize === size 
                  ? 'border-black bg-black text-white' 
                  : 'border-gray-300 hover:border-black hover:bg-gray-50'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        {error && <p className="text-red-500 text-sm font-bold mt-3">{error}</p>}
      </div>

      <div className="flex gap-4 mb-4">
        <Button onClick={handleAddToCart} variant="primary" className="flex-1">Add to Bag</Button>
        <button className="p-4 border border-gray-300 hover:border-black transition-colors flex items-center justify-center shrink-0">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
