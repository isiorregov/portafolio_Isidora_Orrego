import type { ReactNode } from 'react';
import { PortfolioFooter } from './PortfolioFooter';
import { PortfolioNavigation } from './PortfolioNavigation';
import styles from './portfolio-chrome.module.css';

export function PortfolioFrame({
  children,
  typewriterBrand = false,
}: {
  children: ReactNode;
  typewriterBrand?: boolean;
}) {
  return (
    <>
      <PortfolioNavigation typewriterBrand={typewriterBrand} />
      <div className={styles.pageOffset}>{children}</div>
      <PortfolioFooter />
    </>
  );
}
