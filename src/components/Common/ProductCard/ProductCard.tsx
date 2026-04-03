import { type Product } from '../../../hooks/useProducts'
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
  onOpenModal: () => void; 
}

export const ProductCard = ({ product, onOpenModal }: ProductCardProps) => {
  const formattedPrice = product.price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const installmentValue = (product.price / 2).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <article className={styles.cardContainer}>
      <div className={styles.imageWrapper} onClick={onOpenModal} style={{ cursor: 'pointer' }}>
        <img 
          src={product.photo} 
          alt={product.productName} 
          className={styles.productImage} 
        />
      </div>

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.productName}</h3>
        
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>
            {(product.price * 1.1).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <span className={styles.currentPrice}>{formattedPrice}</span>
        </div>

        <p className={styles.installmentsInfo}>ou 2x de {installmentValue} sem juros</p>
        
        <span className={styles.freeShippingLabel}>Frete grátis</span>

        {/* dispara e abre o modal  */}
        <button className={styles.buyButton} onClick={onOpenModal}>
          Comprar
        </button>
      </div>
    </article>
  );
};