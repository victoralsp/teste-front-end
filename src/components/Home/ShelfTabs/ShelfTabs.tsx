import styles from './ShelfTabs.module.scss';

interface ShelfTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export const ShelfTabs = ({ activeTab, onTabChange }: ShelfTabsProps) => {
  return (
    <nav className={styles.tabsContainer}>
      <ul className={styles.tabsList}>
        {tabs.map((tab) => (
          <li key={tab} className={styles.tabItem}>
            <button
              className={`${styles.tabButton} ${activeTab === tab ? styles.active : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};