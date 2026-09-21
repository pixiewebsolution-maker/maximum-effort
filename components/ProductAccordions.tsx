'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  title: string;
  content: string;
  defaultOpen?: boolean;
}

function Accordion({ title, content, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left cursor-pointer group transition-colors"
      >
        <span className="font-bold uppercase tracking-widest text-sm">{title}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
        ) : (
          <Plus className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors" />
        )}
      </button>
      {isOpen && (
        <div className="py-4 pt-0 text-gray-600 text-sm space-y-4 whitespace-pre-line">
          {content}
        </div>
      )}
    </div>
  );
}

interface ProductAccordionsProps {
  description: string;
}

export default function ProductAccordions({ description }: ProductAccordionsProps) {
  return (
    <div className="border-t border-gray-200">
      <Accordion 
        title="Description" 
        content={description} 
        defaultOpen={true} 
      />
      <Accordion 
        title="Fit & Materials" 
        content="• High-waisted fit\n• Compressive waistband\n• 78% Nylon, 22% Elastane\n• Machine wash cold\n• Fits true to size" 
      />
      <Accordion 
        title="Delivery & Returns" 
        content="Free standard delivery on orders over ₹2,499.\n\nReturn for free within 30 days of receiving your order. Please note, items must be in their original condition." 
      />
    </div>
  );
}
