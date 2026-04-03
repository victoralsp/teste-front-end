import { useState } from "react";
import { TopBar } from "../TopBar/TopBar";
import { SearchBar } from "../SearchBar/SearchBar";
import { useCart } from "../../../../context/CartContext/CartContext";
import styles from "./Header.module.scss";
import menuMobileIcon from "@/assets/icons/menuMobileIcon.svg";
import iconBox from "@/assets/icons/Group.svg";
import iconHeart from "@/assets/icons/Heart.svg";
import iconUser from "@/assets/icons/UserCircle.svg";
import iconCart from "@/assets/icons/ShoppingCart.svg";
import logoEconverse from "@/assets/logoEconverse.png";
import { CategoryNav } from "../CategoryNav/CategoryNav";

export const Header = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.stickyHeader}>       
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
              <li className={styles.desktopOnly}>
                <img src={iconBox} alt="Meus pedidos" className={styles.myOrdersIcone} />
              </li>
              <li className={styles.desktopOnly}>
                <img src={iconHeart} alt="Favoritos" />
              </li>
              <li className={styles.desktopOnly}>
                <img src={iconUser} alt="Minha conta" />
              </li>

              <li className={styles.cartItem}>
                <div className={styles.cartIconWrapper}>
                  <img src={iconCart} alt="Carrinho" />
                  {cartCount > 0 && (
                    <span className={styles.cartBadge}>{cartCount}</span>
                  )}
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div
        className={`${styles.categoryWrapper} ${isMenuOpen ? styles.menuVisible : ""}`}
      >
        <CategoryNav />
      </div>
    </header>
     </div>
  );
};
