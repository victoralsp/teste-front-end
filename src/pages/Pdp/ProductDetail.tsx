import { useLocation, useParams, Link } from 'react-router-dom';
import { ProductShelf } from '../../components/Common/ProductShelf/ProductShelf';
import styles from './ProductDetail.module.scss';

export const ProductDetail = () => {
  const { state } = useLocation();
  const { id } = useParams()
  console.log(id)
  const product = state?.product;

  if (!product) {
    return (
      <div className={styles.errorContainer}>
        <h2>Ops! Produto não encontrado.</h2>
        <Link title="Voltar" to="/">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <main className={styles.pdpContainer}>
      <section className={styles.productMain}>
        <div className={styles.imageColumn}>
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className={styles.infoColumn}>
          <nav className={styles.breadcrumb}>
            Home &gt; Tecnologia &gt; <span>{product.productName}</span>
          </nav>
          
          <h1 className={styles.productName}>{product.productName}</h1>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>
              {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <p className={styles.installments}>
              ou 2x de {(product.price / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} sem juros
            </p>
          </div>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi aut est iusto error earum tempora dolorum aliquid repellendus ipsam aperiam eos harum, voluptatibus obcaecati. Voluptatum placeat qui molestias aspernatur. Quo.
            Repellat omnis provident officia officiis et! Fac
          </p>

          <div className={styles.purchaseActions}>
            <button className={styles.buyBtn}>ADICIONAR AO CARRINHO</button>
          </div>
        </div>
      </section>

      <section className={styles.relatedProducts}>
        <h2 className={styles.sectionTitle}>Quem viu, viu também</h2>
        <ProductShelf selectedCategory="CELULAR" />
      </section>
    </main>
  )
}