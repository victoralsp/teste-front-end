import { useNewsletter } from '../../../hooks/useNewsletter';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
  const { data, status, handlers } = useNewsletter();
  
  return (
    <section className={styles.newsletterSection}>
      <div className={styles.container}>
        <div className={styles.contentLeft}>
          <h2 className={styles.title}>Inscreva-se na nossa newsletter</h2>
          <p className={styles.description}>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.
          </p>
        </div>

        <form className={styles.formRight} onSubmit={handlers.handleSubmit}>
          <div className={styles.inputsWrapper}>
            <input 
              type="text" 
              placeholder="Digite seu nome" 
              className={styles.input}
              value={data.name}
              onChange={handlers.handleNameChange}
              disabled={status === 'loading'}
            />
            <input 
              type="email" 
              placeholder="Digite seu e-mail" 
              className={styles.input}
              value={data.email}
              onChange={handlers.handleEmailChange}
              disabled={status === 'loading'}
            />
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Enviando...' : 'Inscrever'}
            </button>
          </div>
          
          <label className={styles.checkboxContainer}>
            <input type="checkbox" required /> 
            <span className={styles.checkboxText}>Aceito os termos e condições</span>
          </label>
        </form>
      </div>
    </section>
  );
};