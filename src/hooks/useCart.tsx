import { useState, useEffect, useCallback } from 'react';
import { type Product } from './useProducts';

export interface CartItem extends Product {
  quantity: number;
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('@Econverse:cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('@Econverse:cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.productName === product.productName);

      if (existingProduct) {

        return prevCart.map(item =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  }, []);

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return { cart, addToCart, cartCount };
};