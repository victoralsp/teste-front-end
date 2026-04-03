import { useState } from 'react';
import { TopBar } from '../TopBar/TopBar';
import { SearchBar } from '../SearchBar/SearchBar';
import styles from './Header.module.scss';
import menuMobileIcon from '@/assets/icons/menuMobileIcon.svg';
import iconBox from '@/assets/icons/Group.svg';
import iconHeart from '@/assets/icons/Heart.svg';
import iconUser from '@/assets/icons/UserCircle.svg';
import iconCart from '@/assets/icons/ShoppingCart.svg';
import logoEconverse from '@/assets/logoEconverse.png';
import { CategoryNav } from '../CategoryNav/CategoryNav';

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.header}>

      <TopBar />

      <div className={styles.headerMain}>
        <div className={styles.contentLimit}>

          <button 
            className={styles.mobileMenu} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <img src={menuMobileIcon} alt="Menu" />
          </button>

          <h1 className={styles.logo}>
            <a href="/" title="Home Econverse">
              <img 
                src={logoEconverse} 
                alt="Logo Econverse" 
                className={styles.logoImage} 
              />
            </a>
          </h1>

         <div className={styles.searchWrapper}>
            <SearchBar />
          </div>

          <nav className={styles.userActions}>
            <ul className={styles.actionList}>
              <li className={styles.desktopOnly}><img src={iconBox} alt="" /></li>
              <li className={styles.desktopOnly}><img src={iconHeart} alt="" /></li>
              <li className={styles.desktopOnly}><img src={iconUser} alt="" /></li>
              <li><img src={iconCart} alt="Cart" /></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={`${styles.categoryWrapper} ${isMenuOpen ? styles.menuVisible : ''}`}>
        <CategoryNav />
      </div>
      
    </header>
  );
};