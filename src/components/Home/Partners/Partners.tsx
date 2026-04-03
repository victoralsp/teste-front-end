import styles from './Partners.module.scss';

export const Partners = () => {
  const partnerCards: number[] = [1, 2];

  return (
    <section className={styles.partnersSection}>
      <div className={styles.partnersContainer}>
        {partnerCards.map((_, index) => (
          <div key={index} className={styles.partnerCard}>
            <div className={styles.overlay}>
              <h2 className={styles.title}>Parceiros</h2>
              <p className={styles.description}>
                Lorem ipsum dolor sit amet, consectetur
              </p>
              <button className={styles.confirmButton}>Confira</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};