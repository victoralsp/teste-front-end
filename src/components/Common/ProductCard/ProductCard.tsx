import styles from './ProductCard.module.scss';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
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
      <div className={styles.imageWrapper}>
        <img src={product.photo} alt={product.productName} className={styles.productImage} />
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

        <button className={styles.buyButton}>
          Comprar
        </button>
      </div>
    </article>
  );
};