import { useEffect, useRef } from 'react';
import styles from './TopBar.module.scss';
import iconShield from '@/assets/icons/ShieldCheck.svg';
import iconTruck from '@/assets/icons/Truck.svg';
import iconCard from '@/assets/icons/CreditCard.svg';


export const TopBar = () => {
  const scrollRef = useRef<HTMLUListElement>(null);
  
  // adiciona slider com autoplay nas informações do top bar 
    useEffect(() => {
      const containerInfosTopBar = scrollRef.current;
      if (!containerInfosTopBar) return;
  
      let slideAtual = 0;
      const totalDeItens = 3;
  
      const autoPlay = setInterval(() => {
        if (window.innerWidth <= 768) {
          slideAtual = (slideAtual + 1) % totalDeItens;
          
          containerInfosTopBar.scrollTo({
            left: containerInfosTopBar.offsetWidth * slideAtual,
            behavior: 'smooth'
          });
        }
      }, 3000);
  
      return () => clearInterval(autoPlay); 
    }, []);

return (
    <section className={styles.topBar} aria-label="Benefícios e segurança">
      <div className={styles.contentLimit}>
        <ul className={styles.benefitList} ref={scrollRef}>
          <li className={styles.benefitItem}>
            <img src={iconShield} alt="" aria-hidden="true" className={styles.benefitIcon} />
            <span className={styles.benefitText}>
              Compra <strong className={styles.highlightText}>100% segura</strong>
            </span>
          </li>
          
          <li className={styles.benefitItem}>
            <img src={iconTruck} alt="" aria-hidden="true" className={styles.benefitIcon} />
            <span className={styles.benefitText}>
              <strong className={styles.highlightText}>Frete grátis</strong> acima de R$ 200
            </span>
          </li>
          
          <li className={styles.benefitItem}>
            <img src={iconCard} alt="" aria-hidden="true" className={styles.benefitIcon} />
            <span className={styles.benefitText}>
              <strong className={styles.highlightText}>Parcele</strong> suas compras
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};