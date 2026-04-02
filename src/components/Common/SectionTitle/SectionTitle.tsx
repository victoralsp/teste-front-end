import styles from './SectionTitle.module.scss';

interface SectionTitleProps {
  title: string;
}

export const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <div className={styles.titleContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
};