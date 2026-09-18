export default function FilterContent() {
  return (
    <div className="space-y-8">
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
  );
}
