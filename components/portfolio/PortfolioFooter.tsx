import { BASE_PATH } from '@/lib/base-path';
import styles from './portfolio-chrome.module.css';

export function PortfolioFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerIdentity}>
        <strong>ISIDORA ORREGO</strong>
        <span className={styles.footerLockup} aria-label="Mirar distinto">
          <span className={styles.footerMirar}>MIRAR</span>
          <span className={styles.footerDistinto}>DISTINTO</span>
        </span>
      </div>

      <div className={styles.footerLinks}>
        <a className={styles.footerLink} href="mailto:isiorregov@gmail.com">
          isiorregov@gmail.com
        </a>
        <a
          className={styles.footerLink}
          href="https://www.instagram.com/iorregov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @iorregov
        </a>
        <a
          className={styles.footerLink}
          href={`${BASE_PATH}/portfolio/cv/CV-OrregoIsidora.pdf`}
          target="_blank"
          rel="noopener noreferrer"
        >
          CV
        </a>
      </div>

      <p className={styles.footerYear}>© 2026</p>
    </footer>
  );
}
