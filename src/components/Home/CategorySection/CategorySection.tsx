import styles from './CategorySection.module.scss';
import iconTech from '@/assets/icons/icone-tecnologia.svg';
import iconMarket from '@/assets/icons/icone-supermercado.svg';
import iconBebidas from '@/assets/icons/icone-bebidas.svg';
import iconTools from '@/assets/icons/icone-ferramentas.svg';
import iconHealth from '@/assets/icons/icone-saude.svg';
import iconFitness from '@/assets/icons/icone-fitness.svg';
import iconFashion from '@/assets/icons/icone-moda.svg';

const categories = [
  { id: 1, name: 'Tecnologia', icon: iconTech, active: true },
  { id: 2, name: 'Supermercado', icon: iconMarket },
  { id: 3, name: 'Bebidas', icon: iconBebidas },
  { id: 4, name: 'Ferramentas', icon: iconTools },
  { id: 5, name: 'Saúde', icon: iconHealth },
  { id: 6, name: 'Esportes e Fitness', icon: iconFitness },
  { id: 7, name: 'Moda', icon: iconFashion },
];

export const CategorySection = () => {
  return (
    <section className={styles.categorySection}>
      <div className={styles.container}>
        <ul className={styles.categoryList}>
          {categories.map((categoria) => (
            <li 
              key={categoria.id} 
              className={`${styles.categoryItem} ${categoria.active ? styles.active : ''}`}
            >
              <div className={styles.iconWrapper}>
                <img src={categoria.icon} alt={categoria.name} />
              </div>
              <span className={styles.categoryName}>{categoria.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};