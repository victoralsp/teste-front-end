import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.description}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.formRight} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.inputsWrapper}>
            <input type="text" placeholder="Digite seu nome" className={styles.input} />
            <input type="email" placeholder="Digite seu e-mail" className={styles.input} />
            <button type="submit" className={styles.submitButton}>Inscrever</button>
          </div>
          
          <label className={styles.checkboxContainer}>
            <input type="checkbox" />
            <span className={styles.checkboxText}>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
};