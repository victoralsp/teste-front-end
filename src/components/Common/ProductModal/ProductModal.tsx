import { useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom'
import { type Product } from "../../../hooks/useProducts";
import { useCart } from "../../../context/CartContext/CartContext";
import styles from "./ProductModal.module.scss";

interface ProductModalProps {
  isOpen: boolean;
  product: Product | null;
  onClose: () => void;
}

export const ProductModal = ({
  isOpen,
  product,
  onClose,
}: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, showMessage } = useCart();
  const navigate = useNavigate(); 

  if (!isOpen || !product) return null;

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleConfirmPurchase = () => {
    addToCart(product, quantity);
    onClose();
    setQuantity(1);
    showMessage(`${product.productName} adicionado ao carrinho!`);
  };

  const handleGoToDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    onClose()
    const productSlug = product.productName
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
    navigate(`/produto/${productSlug}`, { state: { product } });
  }

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <div className={styles.modalBody}>
          <div className={styles.imageSection}>
            <img src={product.photo} alt={product.productName} />
          </div>

          <div className={styles.infoSection}>
            <h2 className={styles.productName}>{product.productName}</h2>
            <p className={styles.price}>
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
            <p className={styles.description}>
              Many desktop publishing packages and web page editors now many
              desktop publishing
            </p>
            
            <a 
              href="#" 
              className={styles.moreDetails} 
              onClick={handleGoToDetails}
            >
              Veja mais detalhes do produto &gt;
            </a>

            <div className={styles.actions}>
              <div className={styles.quantitySelector}>
                <button onClick={handleDecrement}>-</button>
                <span>{quantity.toString().padStart(2, "0")}</span>
                <button onClick={handleIncrement}>+</button>
              </div>
              <button
                className={styles.buyButton}
                onClick={handleConfirmPurchase}
              >
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};