// import { MagnifyingGlass } from 'phosphor-react'; 
import styles from './SearchBar.module.scss';
import IconSearch from '@/assets/icons/MagnifyingGlass.svg';

export const SearchBar = () => {
  return (
    <form className={styles.searchContainer} role="search">
      <input 
        type="text" 
        placeholder="O que você está buscando?" 
        className={styles.searchInput}
        aria-label="Buscar produtos"
      />
      <button type="submit" className={styles.searchButton} aria-label="Confirmar busca">
        <img src={IconSearch} alt="" />
      </button>
    </form>
  );
};