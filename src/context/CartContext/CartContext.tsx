import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Product } from "../../hooks/useProducts";
import styles from "./CartContext.module.scss";


interface CartItem extends Product {
  quantity: number;
}

interface CartContextData {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  cartCount: number;
  showMessage: (text: string) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const [message, setMessage] = useState<string | null>(null);

  const showMessage = (text: string) => {
    setMessage(text);
    setTimeout(() => setMessage(null), 3000);
  };

  useEffect(() => {
    const saved = localStorage.getItem("@Econverse:cart");
    if (saved) setCart(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("@Econverse:cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) => item.productName === product.productName,
      );
      if (exists) {
        return prev.map((item) =>
          item.productName === product.productName
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, showMessage }}>
      {children}
      {message && <div className={styles.toastMessage}>{message}</div>}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
