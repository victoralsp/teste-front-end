import styles from './BtnSeeAll.module.scss';

interface BtnSeeAllProps {
  marginTop?: string | number;
  marginBottom?: string | number;
}

export const BtnSeeAll = ({ marginTop = 0, marginBottom = 0 }: BtnSeeAllProps) => {
  return (
    <div 
    className={styles.container}
    style={{ marginTop, marginBottom }}>
      <a href="#" className={styles.link}>
        Ver todos
      </a>
    </div>
  );
};