import styles from './CategoryNav.module.scss';
import iconCrown from '@/assets/icons/CrownSimple.svg'; 

export const CategoryNav = () => {
  const categorias = [
    { nomeCategoria: 'TODAS CATEGORIAS', linkCategoria: '#' },
    { nomeCategoria: 'SUPERMERCADO', linkCategoria: '#' },
    { nomeCategoria: 'LIVROS', linkCategoria: '#' },
    { nomeCategoria: 'MODA', linkCategoria: '#' },
    { nomeCategoria: 'LANÇAMENTOS', linkCategoria: '#' },
    { nomeCategoria: 'OFERTAS DO DIA', linkCategoria: '#', destaque: true },
  ];

  return (
    <nav className={styles.navCategorias} aria-label="Categorias de produtos">
      <div className={styles.limiteConteudo}>
        <ul className={styles.listaCategorias}>
          {categorias.map((categoria) => (
            <li key={categoria.nomeCategoria} className={styles.itemCategoria}>
              <a 
                href={categoria.linkCategoria} 
                className={`${styles.linkCategoria} ${categoria.destaque ? styles.linkDestaque : ''}`}
              >
                {categoria.nomeCategoria}
              </a>
            </li>
          ))}
          <li className={styles.itemAssinatura}>
            <a href="#" className={styles.linkAssinatura}>
              <img src={iconCrown} alt="" aria-hidden="true" />
              ASSINATURA
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};