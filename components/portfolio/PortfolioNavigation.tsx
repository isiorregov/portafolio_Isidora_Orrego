'use client';

import { useEffect, useState } from 'react';
import { BASE_PATH } from '@/lib/base-path';
import styles from './portfolio-chrome.module.css';

const navigationItems = [
  { number: '01', label: 'Proyectos', href: `${BASE_PATH}/#proyectos` },
  { number: '02', label: 'Sobre mí', href: `${BASE_PATH}/about` },
  { number: '03', label: 'Contacto', href: `${BASE_PATH}/contact` },
];

const cvHref = `${BASE_PATH}/portfolio/cv/CV-OrregoIsidora.pdf`;

export function PortfolioNavigation() {
  const [isCompact, setIsCompact] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateNavigation = () => setIsCompact(window.scrollY > 36);
    updateNavigation();
    window.addEventListener('scroll', updateNavigation, { passive: true });

    return () => window.removeEventListener('scroll', updateNavigation);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`${styles.navigation} ${isCompact ? styles.navigationCompact : ''}`}
    >
      <div className={styles.navigationInner}>
        <a
          className={styles.wordmark}
          href={`${BASE_PATH}/`}
          aria-label="Isidora Orrego — ir al inicio"
          onClick={closeMenu}
        >
          <img
            className={styles.brandLogo}
            src={`${BASE_PATH}/portfolio/identity/isidora-monograma-io.png`}
            alt=""
            aria-hidden="true"
          />
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? 'Cerrar' : 'Menú'}
        </button>

        <nav
          id="portfolio-navigation"
          className={`${styles.navigationNav} ${isMenuOpen ? styles.navigationNavOpen : ''}`}
          aria-label="Navegación principal"
        >
          <ul className={styles.navList}>
            {navigationItems.map((item) => (
              <li key={item.number}>
                <a className={styles.navLink} href={item.href} onClick={closeMenu}>
                  <span className={styles.navNumber}>{item.number}</span>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className={styles.navLink}
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <span className={styles.navNumber}>04</span>
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
