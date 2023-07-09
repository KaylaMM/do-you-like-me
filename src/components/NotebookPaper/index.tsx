import { PropsWithChildren } from '@types';
import styles from '@styles/NotebookPaper.module.scss';

const NotebookPaper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.page}>
      <div className={`${styles.l_margin} ${styles.margin}`}>
        <div className={`${styles.hole} ${styles.first_hole}`}></div>
        <div className={`${styles.hole} ${styles.second_hole}`}></div>
        <div className={`${styles.hole} ${styles.third_hole}`}></div>
      </div>
      <div className={`${styles.r_margin} ${styles.margin}`}></div>
      <header>
        <span className={styles.page_title}>Do u like me?</span>
      </header>
      {children}
    </div>
  );
};

export default NotebookPaper;
