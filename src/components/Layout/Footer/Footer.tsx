import styles from './Footer.module.scss';
import logoEconverse from '@/assets/logoEconverse.png';
import iconInsta from '@/assets/icons/instagram.svg';
import iconFb from '@/assets/icons/facebook.svg';
import iconIn from '@/assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          
          <div className={styles.aboutColumn}>
            <img src={logoEconverse} alt="Econverse" className={styles.logo} />
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className={styles.socialIcons}>
              <a href="#"><img src={iconInsta} alt="Instagram" /></a>
              <a href="#"><img src={iconFb} alt="Facebook" /></a>
              <a href="#"><img src={iconIn} alt="LinkedIn" /></a>
            </div>
          </div>

          <div className={styles.verticalDivider}></div>

          <nav className={styles.linksNav}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Institucional</h3>
              <ul>
                <li><a href="#">Sobre Nós</a></li>
                <li><a href="#">Movimento</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Ajuda</h3>
              <ul>
                <li><a href="#">Suporte</a></li>
                <li><a href="#">Fale Conosco</a></li>
                <li><a href="#">Perguntas Frequentes</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>Termos</h3>
              <ul>
                <li><a href="#">Termos e Condições</a></li>
                <li><a href="#">Política de Privacidade</a></li>
                <li><a href="#">Troca e Devolução</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
};