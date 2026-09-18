'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/api';

export interface CartItem {
  cartItemId: string; // unique ID for the cart item (product.id + size + color)
  product: Product;
  size: string;
  color: number; // index of the color selected
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: Product, size: string, color: number) => Promise<void>;
  removeFromCart: (cartItemId: string) => Promise<void>;
  updateQuantity: (cartItemId: string, quantity: number) => Promise<void>;
  toggleCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Future WP integration: load cart from API on mount
  useEffect(() => {
    const saved = localStorage.getItem('max-effort-cart');
    if (saved) {
      try { setCartItems(JSON.parse(saved)); } catch (e) {}
    }
  }, []);

  // Future WP integration: sync to API instead of localStorage
  useEffect(() => {
    localStorage.setItem('max-effort-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product: Product, size: string, color: number) => {
    // await fetch('/api/cart/add', { ... }) // WP hook point
    const cartItemId = `${product.id}-${size}-${color}`;
    setCartItems(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { cartItemId, product, size, color, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = async (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const updateQuantity = async (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      await removeFromCart(cartItemId);
      return;
    }
    setCartItems(prev => prev.map(item => item.cartItemId === cartItemId ? { ...item, quantity } : item));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const cartTotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, addToCart, removeFromCart, updateQuantity, toggleCart, cartTotal, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
